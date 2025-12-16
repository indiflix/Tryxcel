from fastapi import APIRouter, HTTPException
from models import Settings, SettingsUpdate
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/settings", tags=["settings"])

# Database connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
settings_collection = db.settings


@router.get("", response_model=Settings)
async def get_settings():
    """
    Get company settings
    """
    try:
        settings = await settings_collection.find_one({})
        
        # If no settings exist, create default settings
        if not settings:
            default_settings = Settings()
            await settings_collection.insert_one(default_settings.model_dump())
            return default_settings
        
        return Settings(**settings)
    except Exception as e:
        logger.error(f"Error fetching settings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch settings")


@router.put("", response_model=Settings)
async def update_settings(settings_data: SettingsUpdate):
    """
    Update company settings
    """
    try:
        # Get current settings
        current_settings = await settings_collection.find_one({})
        
        if not current_settings:
            # Create new settings if none exist
            new_settings = Settings(**settings_data.model_dump(exclude_unset=True))
            await settings_collection.insert_one(new_settings.model_dump())
            logger.info("Created new settings")
            return new_settings
        
        # Update existing settings
        update_data = settings_data.model_dump(exclude_unset=True)
        update_data["updatedAt"] = datetime.utcnow()
        
        await settings_collection.update_one(
            {"id": current_settings["id"]},
            {"$set": update_data}
        )
        
        updated_settings = await settings_collection.find_one({"id": current_settings["id"]})
        logger.info("Updated settings")
        return Settings(**updated_settings)
    except Exception as e:
        logger.error(f"Error updating settings: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update settings")
