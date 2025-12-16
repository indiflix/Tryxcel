import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Cpu, Brain, Monitor, Cog, Network, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Embedded Engineering Services',
      description: 'Complete embedded system design, development, and optimization for various applications.',
      services: [
        'Custom embedded system design',
        'Microcontroller programming',
        'Real-time operating systems (RTOS)',
        'Hardware abstraction layers',
        'Device driver development',
        'System integration & testing',
      ],
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI & Machine Learning Solutions',
      description: 'Intelligent AI-powered solutions for automation, prediction, and decision-making.',
      services: [
        'Machine learning model development',
        'Deep learning solutions',
        'Computer vision systems',
        'Natural language processing',
        'Predictive analytics',
        'AI model optimization',
      ],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'AI Agentic Workflows',
      description: 'Autonomous intelligent agents that learn, adapt, and make decisions independently.',
      services: [
        'Autonomous agent design',
        'Multi-agent systems',
        'Reinforcement learning',
        'Decision-making algorithms',
        'Agent orchestration',
        'Continuous learning systems',
      ],
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: 'Product Design & Prototyping',
      description: 'End-to-end product development from concept to manufacturing-ready designs.',
      services: [
        'Concept development',
        'CAD design & modeling',
        'Rapid prototyping',
        'Design for manufacturing (DFM)',
        'Testing & validation',
        'Production support',
      ],
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: 'Display & HMI Solutions',
      description: 'Advanced display technologies and human-machine interface systems.',
      services: [
        'Custom display integration',
        'Touch interface development',
        'GUI/UX design',
        'Graphics optimization',
        'Multi-display systems',
        'Gesture recognition',
      ],
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'IoT & Smart Device Development',
      description: 'Connected devices and IoT ecosystems for intelligent automation.',
      services: [
        'IoT architecture design',
        'Sensor integration',
        'Wireless connectivity',
        'Cloud integration',
        'Edge computing',
        'Device management platforms',
      ],
    },
  ];

  const industries = [
    {
      name: 'Healthcare',
      applications: ['Medical devices', 'Patient monitoring', 'Diagnostic equipment', 'Telemedicine solutions'],
    },
    {
      name: 'Industrial Automation',
      applications: ['Manufacturing systems', 'Process control', 'Robotics', 'Predictive maintenance'],
    },
    {
      name: 'Consumer Electronics',
      applications: ['Smart home devices', 'Wearables', 'Entertainment systems', 'Personal gadgets'],
    },
    {
      name: 'Automotive',
      applications: ['ADAS systems', 'Infotainment', 'Vehicle diagnostics', 'Electric vehicle systems'],
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solutions & Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#1a5f7a] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4db5c0] mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{service}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom solutions designed for specific industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#1a5f7a]">{industry.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {industry.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#4db5c0] transition-colors"
                      >
                        <p className="text-sm font-medium text-gray-700">{app}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Design', description: 'Creating optimal solutions and architectures' },
              { step: '03', title: 'Development', description: 'Building with precision and quality' },
              { step: '04', title: 'Testing', description: 'Rigorous validation and optimization' },
              { step: '05', title: 'Deployment', description: 'Seamless integration and support' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Partner with Tryxcel Technologies for innovative solutions that drive success
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#1a5f7a] hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
