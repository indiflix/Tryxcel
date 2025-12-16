import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { HeartPulse, Factory, Smartphone, Car, Building2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const IndustriesPage = () => {
  const industries = [
    {
      icon: <HeartPulse className="w-10 h-10" />,
      name: 'Healthcare',
      description: 'Advanced medical technology solutions for better patient care and diagnostics.',
      applications: [
        'Medical device development',
        'Patient monitoring systems',
        'Diagnostic equipment',
        'Telemedicine platforms',
        'Wearable health trackers',
        'Medical imaging systems',
      ],
      impact: 'Improving patient outcomes through intelligent medical technology',
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      name: 'Consumer Electronics',
      description: 'Next-generation smart devices for modern consumers.',
      applications: [
        'Smart home devices',
        'Wearable technology',
        'Entertainment systems',
        'Personal gadgets',
        'IoT consumer products',
        'Audio & visual systems',
      ],
      impact: 'Enhancing everyday life with intelligent, connected devices',
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      name: 'Fashion & Lifestyle Tech',
      description: 'Merging fashion with technology for innovative lifestyle products.',
      applications: [
        'Smart clothing',
        'Fashion wearables',
        'Interactive apparel',
        'LED accessories',
        'Tech-enhanced jewelry',
        'Lifestyle gadgets',
      ],
      impact: 'Revolutionizing fashion with embedded intelligence',
    },
    {
      icon: <Factory className="w-10 h-10" />,
      name: 'Industrial Automation',
      description: 'Intelligent systems for manufacturing and process optimization.',
      applications: [
        'Manufacturing automation',
        'Process control systems',
        'Robotics integration',
        'Predictive maintenance',
        'Quality control systems',
        'Industrial IoT',
      ],
      impact: 'Driving efficiency and productivity in manufacturing',
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      name: 'Smart Cities',
      description: 'Technology solutions for sustainable and intelligent urban infrastructure.',
      applications: [
        'Smart lighting systems',
        'Traffic management',
        'Waste management',
        'Energy optimization',
        'Public safety systems',
        'Environmental monitoring',
      ],
      impact: 'Building sustainable, efficient cities of the future',
    },
    {
      icon: <Car className="w-10 h-10" />,
      name: 'Automotive & Mobility',
      description: 'Advanced automotive systems and connected vehicle technology.',
      applications: [
        'ADAS systems',
        'Infotainment platforms',
        'Vehicle diagnostics',
        'Electric vehicle systems',
        'Connected car solutions',
        'Autonomous driving tech',
      ],
      impact: 'Shaping the future of transportation and mobility',
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      name: 'Retail & Smart Displays',
      description: 'Interactive display solutions for modern retail experiences.',
      applications: [
        'Digital signage',
        'Interactive kiosks',
        'Smart shelving',
        'POS systems',
        'Customer analytics',
        'Virtual try-on systems',
      ],
      impact: 'Transforming retail experiences with intelligent displays',
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powering innovation across diverse sectors with cutting-edge technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 border-none"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white mb-6">
                        {industry.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {industry.description}
                      </p>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#4db5c0]/10 text-[#1a5f7a] text-sm font-medium">
                        <span>{industry.impact}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-6 text-gray-800">Key Applications:</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {industry.applications.map((app, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#4db5c0] transition-all duration-300 group"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#4db5c0] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <p className="text-gray-700 font-medium">{app}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Industry Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering measurable results across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Industry Partners' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how Tryxcel Technologies can create innovative solutions for your sector
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
