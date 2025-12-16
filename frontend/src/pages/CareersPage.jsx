import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, Lightbulb, Award } from 'lucide-react';
import { mockJobs } from '../utils/mockData';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'design', name: 'Design' },
    { id: 'sales', name: 'Sales & Marketing' },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear career paths and continuous learning opportunities',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Culture',
      description: 'Work with talented teams on cutting-edge projects',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote options',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Competitive Benefits',
      description: 'Industry-leading compensation and perks',
    },
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? mockJobs
    : mockJobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Work at Tryxcel?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Tryxcel Technologies, we believe that innovation thrives in an environment where creativity, collaboration, and continuous learning are valued. Join us to work on groundbreaking projects that make a real impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just building technology—we're building the future. If you're passionate about AI, embedded systems, and creating intelligent solutions, this is the place for you.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a5f7a]/20 to-[#4db5c0]/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb className="w-32 h-32 mx-auto mb-6 text-[#1a5f7a]" />
                  <p className="text-2xl font-bold text-gray-800">Innovation Mindset</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600">Explore opportunities across different departments</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                variant={selectedDepartment === dept.id ? 'default' : 'outline'}
                className={`${
                  selectedDepartment === dept.id
                    ? 'bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] text-white'
                    : 'border-gray-300 text-gray-700 hover:border-[#4db5c0]'
                } transition-all duration-300`}
              >
                {dept.name}
              </Button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-grow mb-6 md:mb-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-2xl font-bold">{job.title}</h3>
                        <Badge className="bg-[#4db5c0]/10 text-[#1a5f7a] hover:bg-[#4db5c0]/20">
                          {job.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0 md:ml-8">
                      <Button className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] hover:shadow-lg transition-all duration-300">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No openings in this category at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Internships & Collaboration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Internship Program</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Gain hands-on experience with cutting-edge technologies. Our internship program offers real project work, mentorship from industry experts, and potential full-time opportunities.
                </p>
                <Button variant="outline" className="border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Collaboration Opportunities</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We collaborate with universities, research institutions, and industry partners. If you're interested in research partnerships or academic collaborations, we'd love to hear from you.
                </p>
                <Button variant="outline" className="border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white">
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#1a5f7a] hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Submit Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
