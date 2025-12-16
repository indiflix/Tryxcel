from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models import Job, JobCreate
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/jobs", tags=["jobs"])

# Database connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
jobs_collection = db.jobs


@router.get("", response_model=List[Job])
async def get_jobs(department: Optional[str] = Query(None)):
    """
    Get all active jobs, optionally filtered by department
    """
    try:
        query = {"isActive": True}
        if department and department != "all":
            query["department"] = department
        
        jobs = await jobs_collection.find(query).sort("createdAt", -1).to_list(100)
        return [Job(**job) for job in jobs]
    except Exception as e:
        logger.error(f"Error fetching jobs: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch jobs")


@router.get("/{job_id}", response_model=Job)
async def get_job(job_id: str):
    """
    Get a single job by ID
    """
    try:
        job = await jobs_collection.find_one({"id": job_id})
        if not job:
            raise HTTPException(status_code=404, detail="Job not found")
        return Job(**job)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching job {job_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch job")


@router.post("", response_model=Job)
async def create_job(job_data: JobCreate):
    """
    Create a new job posting
    """
    try:
        job = Job(**job_data.model_dump())
        await jobs_collection.insert_one(job.model_dump())
        logger.info(f"Created new job: {job.title}")
        return job
    except Exception as e:
        logger.error(f"Error creating job: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create job")


@router.put("/{job_id}", response_model=Job)
async def update_job(job_id: str, job_data: JobCreate):
    """
    Update an existing job
    """
    try:
        job = await jobs_collection.find_one({"id": job_id})
        if not job:
            raise HTTPException(status_code=404, detail="Job not found")
        
        from datetime import datetime
        update_data = job_data.model_dump()
        update_data["updatedAt"] = datetime.utcnow()
        
        await jobs_collection.update_one(
            {"id": job_id},
            {"$set": update_data}
        )
        
        updated_job = await jobs_collection.find_one({"id": job_id})
        logger.info(f"Updated job: {job_id}")
        return Job(**updated_job)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating job {job_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update job")


@router.delete("/{job_id}")
async def delete_job(job_id: str):
    """
    Delete a job (soft delete by setting isActive to False)
    """
    try:
        result = await jobs_collection.update_one(
            {"id": job_id},
            {"$set": {"isActive": False}}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Job not found")
        
        logger.info(f"Deleted job: {job_id}")
        return {"message": "Job deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting job {job_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to delete job")
