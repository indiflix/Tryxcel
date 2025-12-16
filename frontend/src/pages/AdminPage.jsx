import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Shield, Briefcase, Mail, Settings, Plus, Edit, Trash2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockJobs } from '../utils/mockData';

const AdminPage = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState(mockJobs);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      message: 'Interested in your AI solutions for healthcare',
      date: '2025-01-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      phone: '+91 87654 32109',
      message: 'Looking for embedded systems consultation',
      date: '2025-01-14',
    },
  ]);

  const [isAddingJob, setIsAddingJob] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    department: 'engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '',
    description: '',
  });

  const handleAddJob = () => {
    if (!newJob.title || !newJob.experience || !newJob.description) {
      toast({
        title: 'Error',
        description: 'Please fill all required fields',
        variant: 'destructive',
      });
      return;
    }

    const job = {
      id: jobs.length + 1,
      ...newJob,
    };

    setJobs([...jobs, job]);
    setNewJob({
      title: '',
      department: 'engineering',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '',
      description: '',
    });
    setIsAddingJob(false);

    toast({
      title: 'Success',
      description: 'Job posting added successfully',
    });
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
    toast({
      title: 'Deleted',
      description: 'Job posting removed',
    });
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    toast({
      title: 'Deleted',
      description: 'Contact message removed',
    });
  };

  return (
    <div className="pt-20 pb-12 animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-[#1a5f7a]" />
            <h1 className="text-4xl font-bold">Admin CMS</h1>
          </div>
          <p className="text-gray-600">Manage website content, job postings, and contact inquiries</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="jobs" className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Job Postings</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Contact Messages</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Job Postings Tab */}
          <TabsContent value="jobs">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Manage Job Postings</h2>
                  <Button
                    onClick={() => setIsAddingJob(!isAddingJob)}
                    className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0]"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Job
                  </Button>
                </div>

                {/* Add Job Form */}
                {isAddingJob && (
                  <Card className="mb-6 border-2 border-[#4db5c0]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">New Job Posting</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="job-title">Job Title *</Label>
                          <Input
                            id="job-title"
                            value={newJob.title}
                            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                            placeholder="e.g., Senior Embedded Engineer"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="job-department">Department *</Label>
                          <select
                            id="job-department"
                            value={newJob.department}
                            onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                            className="mt-2 w-full h-10 px-3 rounded-md border border-gray-300"
                          >
                            <option value="engineering">Engineering</option>
                            <option value="ai">AI & ML</option>
                            <option value="design">Design</option>
                            <option value="sales">Sales & Marketing</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="job-location">Location *</Label>
                          <Input
                            id="job-location"
                            value={newJob.location}
                            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="job-type">Job Type *</Label>
                          <select
                            id="job-type"
                            value={newJob.type}
                            onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                            className="mt-2 w-full h-10 px-3 rounded-md border border-gray-300"
                          >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="job-experience">Experience Required *</Label>
                          <Input
                            id="job-experience"
                            value={newJob.experience}
                            onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                            placeholder="e.g., 3-5 years"
                            className="mt-2"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="job-description">Job Description *</Label>
                          <Textarea
                            id="job-description"
                            value={newJob.description}
                            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                            placeholder="Enter job description..."
                            className="mt-2 min-h-[100px]"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-6">
                        <Button
                          onClick={handleAddJob}
                          className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0]"
                        >
                          Add Job
                        </Button>
                        <Button variant="outline" onClick={() => setIsAddingJob(false)}>
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Jobs List */}
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-grow">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold">{job.title}</h3>
                              <Badge className="bg-[#4db5c0]/10 text-[#1a5f7a]">{job.type}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <span>{job.department}</span>
                              <span>•</span>
                              <span>{job.location}</span>
                              <span>•</span>
                              <span>{job.experience}</span>
                            </div>
                            <p className="text-gray-600">{job.description}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteJob(job.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Messages Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Inquiries</h2>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <Card key={contact.id} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-grow">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold">{contact.name}</h3>
                              <Badge variant="outline">{contact.date}</Badge>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600 mb-3">
                              <p>Email: {contact.email}</p>
                              <p>Phone: {contact.phone}</p>
                            </div>
                            <p className="text-gray-700">{contact.message}</p>
                          </div>
                          <div className="ml-4">
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteContact(contact.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {contacts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      No contact messages yet.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Site Settings</h2>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <Label htmlFor="company-email">Company Email</Label>
                    <Input
                      id="company-email"
                      defaultValue="info@tryxcel.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company-phone">Company Phone</Label>
                    <Input
                      id="company-phone"
                      defaultValue="+91 (XXX) XXX-XXXX"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company-address">Company Address</Label>
                    <Textarea
                      id="company-address"
                      defaultValue="Bangalore, Karnataka, India - 560001"
                      className="mt-2"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0]">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
