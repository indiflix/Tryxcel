"""Seed initial data into the database"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from models import Job

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


initial_jobs = [
    {
        "title": "Senior Embedded Systems Engineer",
        "department": "engineering",
        "location": "Bangalore, India",
        "type": "Full-time",
        "experience": "5-8 years",
        "description": "Design and develop cutting-edge embedded systems for AI-powered devices. Work with latest microcontrollers and RTOS.",
    },
    {
        "title": "AI/ML Engineer",
        "department": "ai",
        "location": "Bangalore, India / Remote",
        "type": "Full-time",
        "experience": "3-5 years",
        "description": "Develop and deploy machine learning models for embedded systems. Experience with TensorFlow Lite and edge AI preferred.",
    },
    {
        "title": "Hardware Design Engineer",
        "department": "engineering",
        "location": "Bangalore, India",
        "type": "Full-time",
        "experience": "4-6 years",
        "description": "Design PCBs and hardware modules for wearable devices and display systems. Proficiency in CAD tools required.",
    },
    {
        "title": "UX/UI Designer",
        "department": "design",
        "location": "Bangalore, India / Remote",
        "type": "Full-time",
        "experience": "2-4 years",
        "description": "Create intuitive interfaces for smart devices and embedded systems. Experience with HMI design is a plus.",
    },
    {
        "title": "Firmware Development Intern",
        "department": "engineering",
        "location": "Bangalore, India",
        "type": "Internship",
        "experience": "Fresh Graduate / Final Year",
        "description": "Learn and contribute to firmware development for embedded devices. Strong C/C++ programming skills required.",
    },
    {
        "title": "Sales & Business Development Manager",
        "department": "sales",
        "location": "Bangalore, India",
        "type": "Full-time",
        "experience": "5-7 years",
        "description": "Drive business growth and establish partnerships in embedded systems and AI solutions. B2B sales experience preferred.",
    },
]


async def seed_database():
    """Seed initial data"""
    print("Starting database seeding...")
    
    # Check if jobs already exist
    existing_jobs = await db.jobs.count_documents({})
    if existing_jobs > 0:
        print(f"Database already has {existing_jobs} jobs. Skipping seed.")
        return
    
    # Seed jobs
    print("Seeding jobs...")
    for job_data in initial_jobs:
        job = Job(**job_data)
        await db.jobs.insert_one(job.model_dump())
        print(f"  - Added: {job.title}")
    
    print(f"\nSeeding complete! Added {len(initial_jobs)} jobs.")


if __name__ == "__main__":
    asyncio.run(seed_database())
    print("Database seeded successfully!")
