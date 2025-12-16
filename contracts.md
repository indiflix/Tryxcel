# API Contracts & Integration Plan

## Overview
This document outlines the API contracts, mock data replacement strategy, and backend implementation plan for Tryxcel Technologies website.

---

## 1. MOCK DATA TO REPLACE

### Frontend Mock Data (src/utils/mockData.js)
- `mockJobs` - Job postings array (currently 6 jobs)
- `mockContactSubmissions` - Contact form submissions

---

## 2. MONGODB MODELS

### Job Model
```
{
  _id: ObjectId,
  title: String,
  department: String (engineering|ai|design|sales),
  location: String,
  type: String (Full-time|Part-time|Contract|Internship),
  experience: String,
  description: String,
  isActive: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### Contact Model
```
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  status: String (new|read|responded),
  createdAt: DateTime
}
```

### Settings Model (Company Info)
```
{
  _id: ObjectId,
  companyEmail: String,
  companyPhone: String,
  companyAddress: String,
  socialLinks: {
    linkedin: String,
    twitter: String,
    instagram: String,
    facebook: String
  },
  updatedAt: DateTime
}
```

---

## 3. API ENDPOINTS

### Jobs API
- **GET /api/jobs** - Get all active jobs (with optional department filter)
- **GET /api/jobs/:id** - Get single job
- **POST /api/jobs** - Create new job (Admin)
- **PUT /api/jobs/:id** - Update job (Admin)
- **DELETE /api/jobs/:id** - Delete job (Admin)

### Contact API
- **POST /api/contact** - Submit contact form (sends email)
- **GET /api/contact** - Get all contact submissions (Admin)
- **DELETE /api/contact/:id** - Delete contact submission (Admin)
- **PATCH /api/contact/:id/status** - Update contact status (Admin)

### Settings API
- **GET /api/settings** - Get company settings
- **PUT /api/settings** - Update company settings (Admin)

---

## 4. EMAIL FUNCTIONALITY

### Contact Form Email
- **Service**: SMTP or email service integration
- **Trigger**: POST /api/contact
- **Recipients**: Company email (from settings)
- **Content**: Name, Email, Phone, Message from contact form
- **Template**: HTML email template with company branding

---

## 5. FRONTEND INTEGRATION CHANGES

### Pages to Update:

1. **CareersPage.jsx**
   - Replace `mockJobs` import with API call to `/api/jobs`
   - Update job filtering to work with backend data
   - Add loading states

2. **AdminPage.jsx**
   - Replace local state with API calls:
     - GET /api/jobs for job list
     - POST /api/jobs for adding jobs
     - DELETE /api/jobs/:id for deleting jobs
     - GET /api/contact for contact messages
     - DELETE /api/contact/:id for deleting messages
     - GET/PUT /api/settings for settings management

3. **ContactPage.jsx**
   - Update form submission to POST /api/contact
   - Add proper success/error handling
   - Show loading state during submission

---

## 6. BACKEND IMPLEMENTATION STEPS

1. Create MongoDB models (Job, Contact, Settings)
2. Create API routes with validation
3. Implement email sending functionality
4. Add error handling and logging
5. Seed initial data (jobs from mockData)
6. Test all endpoints

---

## 7. FRONTEND INTEGRATION STEPS

1. Create API service utility file
2. Update CareersPage to fetch jobs from API
3. Update AdminPage to use all CRUD operations
4. Update ContactPage to submit to API
5. Add loading and error states
6. Test full flow end-to-end

---

## 8. ENVIRONMENT VARIABLES NEEDED

```
MONGO_URL=<already configured>
DB_NAME=<already configured>
SMTP_HOST=<email server>
SMTP_PORT=<email port>
SMTP_USER=<email username>
SMTP_PASSWORD=<email password>
COMPANY_EMAIL=info@tryxcel.com
```

---

## 9. TESTING CHECKLIST

- [ ] Jobs CRUD operations
- [ ] Contact form submission and email delivery
- [ ] Admin CMS job management
- [ ] Admin CMS contact message management
- [ ] Admin CMS settings management
- [ ] Frontend-Backend integration
- [ ] Error handling
- [ ] Loading states

---
