import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Cpu, Brain, Monitor, Watch, Sparkles, TrendingUp, Shield, Users } from 'lucide-react';

const HomePage = () => {
  const expertise = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Embedded Engineering',
      description: 'Cutting-edge embedded systems and custom hardware solutions',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Artificial Intelligence',
      description: 'AI-powered solutions and agentic systems for intelligent automation',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Display Technologies',
      description: 'Smart displays and interactive visual solutions for every industry',
    },
    {
      icon: <Watch className="w-8 h-8" />,
      title: 'Wearable Tech',
      description: 'Next-gen wearables and embedded fashion technology',
    },
  ];

  const industries = [
    'Healthcare',
    'Consumer Electronics',
    'Fashion & Lifestyle',
    'Industrial Automation',
    'Smart Cities',
    'Automotive',
  ];

  const whyChoose = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '15+ Years Excellence',
      description: 'Proven track record of innovation and delivery',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trusted Solutions',
      description: 'Reliable, scalable, and future-ready technologies',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Centric',
      description: 'Collaborative approach focused on your success',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-[#4db5c0]/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#4db5c0]/10 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#1a5f7a]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#4db5c0]/10 border border-[#4db5c0]/20 rounded-full px-6 py-2 mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-[#1a5f7a]" />
            <span className="text-sm font-medium text-[#1a5f7a]">15+ Years of Innovation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Engineering the
            <span className="block mt-2 bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] bg-clip-text text-transparent">
              Future of Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Intelligent, scalable, and future-ready solutions in Embedded Systems, AI, Display Technologies, and Smart Wearables
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base px-8 py-6"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white transition-all duration-300 text-base px-8 py-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by Krishna Raj & Ashutosh, Tryxcel Technologies LLP has been pioneering innovation in deep-tech engineering for over 15 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a leading technology company specializing in Embedded Engineering, Artificial Intelligence, Display Technologies, and Wearable Solutions. Our passion for innovation drives us to create intelligent, scalable solutions that transform industries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From AI-powered agentic systems to cutting-edge embedded fashion technology, we deliver excellence in every project, helping businesses stay ahead in the digital age.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a5f7a]/20 to-[#4db5c0]/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#1a5f7a] mb-4">15+</div>
                  <div className="text-2xl font-semibold text-gray-800">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering cutting-edge solutions across multiple technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powering innovation across diverse sectors worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#4db5c0] hover:shadow-lg transition-all duration-300 text-center group"
              >
                <p className="text-lg font-semibold text-gray-800 group-hover:text-[#1a5f7a] transition-colors">
                  {industry}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries">
              <Button variant="outline" className="border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white">
                View All Industries
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Tryxcel */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Tryxcel Technologies</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner for innovative technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                  {React.cloneElement(item.icon, { className: 'w-6 h-6 text-white' })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how Tryxcel Technologies can help you achieve your goals
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base px-10 py-6"
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

export default HomePage;
