from fastapi import APIRouter, HTTPException
from typing import List
from models import Contact, ContactCreate, ContactStatusUpdate
from motor.motor_asyncio import AsyncIOMotorClient
from email_service import send_contact_email
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/contact", tags=["contact"])

# Database connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
contact_collection = db.contacts
settings_collection = db.settings


@router.post("", response_model=Contact)
async def submit_contact_form(contact_data: ContactCreate):
    """
    Submit contact form and send email notification
    """
    try:
        # Create contact record
        contact = Contact(**contact_data.model_dump())
        await contact_collection.insert_one(contact.model_dump())
        
        # Get company email from settings
        settings = await settings_collection.find_one({})
        recipient_email = settings.get('companyEmail', 'info@tryxcel.com') if settings else 'info@tryxcel.com'
        
        # Send email notification
        send_contact_email(
            name=contact.name,
            email=contact.email,
            phone=contact.phone or 'Not provided',
            message=contact.message,
            recipient_email=recipient_email
        )
        
        logger.info(f"Contact form submitted by {contact.name} ({contact.email})")
        return contact
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")


@router.get("", response_model=List[Contact])
async def get_contacts():
    """
    Get all contact form submissions (Admin only)
    """
    try:
        contacts = await contact_collection.find().sort("createdAt", -1).to_list(100)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contacts")


@router.delete("/{contact_id}")
async def delete_contact(contact_id: str):
    """
    Delete a contact submission
    """
    try:
        result = await contact_collection.delete_one({"id": contact_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        logger.info(f"Deleted contact: {contact_id}")
        return {"message": "Contact deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting contact {contact_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to delete contact")


@router.patch("/{contact_id}/status", response_model=Contact)
async def update_contact_status(contact_id: str, status_data: ContactStatusUpdate):
    """
    Update contact submission status
    """
    try:
        result = await contact_collection.update_one(
            {"id": contact_id},
            {"$set": {"status": status_data.status}}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        updated_contact = await contact_collection.find_one({"id": contact_id})
        logger.info(f"Updated contact status: {contact_id}")
        return Contact(**updated_contact)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating contact status {contact_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update contact status")
