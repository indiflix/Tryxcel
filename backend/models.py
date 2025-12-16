from pydantic import BaseModel, Field, EmailStr
from typing import Optional, Literal
from datetime import datetime
import uuid


# Job Models
class JobBase(BaseModel):
    title: str
    department: Literal['engineering', 'ai', 'design', 'sales']
    location: str
    type: Literal['Full-time', 'Part-time', 'Contract', 'Internship']
    experience: str
    description: str


class JobCreate(JobBase):
    pass


class Job(JobBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    isActive: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)


# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: Literal['new', 'read', 'responded'] = 'new'
    createdAt: datetime = Field(default_factory=datetime.utcnow)


class ContactStatusUpdate(BaseModel):
    status: Literal['new', 'read', 'responded']


# Settings Models
class SocialLinks(BaseModel):
    linkedin: str = ''
    twitter: str = ''
    instagram: str = ''
    facebook: str = ''


class SettingsUpdate(BaseModel):
    companyEmail: Optional[str] = None
    companyPhone: Optional[str] = None
    companyAddress: Optional[str] = None
    socialLinks: Optional[SocialLinks] = None


class Settings(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    companyEmail: str = 'info@tryxcel.com'
    companyPhone: str = '+91 (XXX) XXX-XXXX'
    companyAddress: str = 'Bangalore, Karnataka, India - 560001'
    socialLinks: SocialLinks = Field(default_factory=SocialLinks)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)
