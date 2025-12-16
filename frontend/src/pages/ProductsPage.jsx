import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Monitor, Watch, Shirt, Brain, Cpu, ArrowRight } from 'lucide-react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: <Cpu className="w-5 h-5" /> },
    { id: 'display', name: 'Display Technologies', icon: <Monitor className="w-5 h-5" /> },
    { id: 'wearable', name: 'Wearables', icon: <Watch className="w-5 h-5" /> },
    { id: 'fashion', name: 'Embedded Fashion', icon: <Shirt className="w-5 h-5" /> },
    { id: 'ai', name: 'AI Systems', icon: <Brain className="w-5 h-5" /> },
  ];

  const products = [
    {
      category: 'display',
      name: 'Smart Industrial Displays',
      description: 'High-performance displays designed for industrial environments with advanced touch capabilities and durability.',
      features: ['4K Resolution', 'IP65 Rating', 'Multi-touch Support', 'Wide Temperature Range'],
    },
    {
      category: 'display',
      name: 'Interactive Display Modules',
      description: 'Customizable display modules for embedded applications with flexible integration options.',
      features: ['Custom Sizes', 'Low Power', 'HDMI/DisplayPort', 'Easy Integration'],
    },
    {
      category: 'display',
      name: 'Touch & Interactive Displays',
      description: 'Advanced touchscreen solutions with gesture recognition and multi-user support.',
      features: ['10-point Touch', 'Gesture Control', 'Anti-glare', 'High Brightness'],
    },
    {
      category: 'display',
      name: 'Custom Display Solutions',
      description: 'Tailored display systems designed to meet specific project requirements and applications.',
      features: ['Custom Design', 'Full Support', 'Quick Prototyping', 'Scalable'],
    },
    {
      category: 'wearable',
      name: 'Smart Health Wearables',
      description: 'Advanced health monitoring devices with real-time data tracking and AI-powered insights.',
      features: ['Heart Rate', 'SpO2 Monitoring', 'Sleep Tracking', 'AI Analytics'],
    },
    {
      category: 'wearable',
      name: 'Fitness Embedded Devices',
      description: 'Precision fitness tracking with advanced sensors and long battery life.',
      features: ['Multi-sport', 'GPS Tracking', '30-day Battery', 'Water Resistant'],
    },
    {
      category: 'wearable',
      name: 'IoT-enabled Wearables',
      description: 'Connected wearables with seamless IoT integration for smart ecosystems.',
      features: ['5G Ready', 'Cloud Sync', 'Voice Control', 'Smart Alerts'],
    },
    {
      category: 'wearable',
      name: 'Sensor-based Wearable Systems',
      description: 'Advanced sensor arrays for precise biometric and environmental monitoring.',
      features: ['Multi-sensor', 'Real-time Data', 'Low Latency', 'High Accuracy'],
    },
    {
      category: 'fashion',
      name: 'Smart Clothing',
      description: 'Intelligent apparel with embedded sensors and connectivity for enhanced lifestyle.',
      features: ['Washable Tech', 'Comfort Fit', 'Biometric Sensors', 'Style Meets Tech'],
    },
    {
      category: 'fashion',
      name: 'Display-integrated Fashion',
      description: 'Fashion accessories featuring flexible displays and dynamic visual elements.',
      features: ['Flexible OLED', 'Custom Patterns', 'App Control', 'Long Battery'],
    },
    {
      category: 'fashion',
      name: 'LED & Interactive Apparel',
      description: 'Wearable technology with programmable LED systems and interactive features.',
      features: ['RGB LEDs', 'Music Sync', 'Gesture Control', 'Durable Design'],
    },
    {
      category: 'fashion',
      name: 'Tech-enhanced Lifestyle Products',
      description: 'Everyday products enhanced with smart technology for modern living.',
      features: ['Smart Integration', 'Voice Assistant', 'Energy Efficient', 'Premium Quality'],
    },
    {
      category: 'ai',
      name: 'AI-powered Embedded Devices',
      description: 'Intelligent embedded systems with on-device AI processing capabilities.',
      features: ['Edge AI', 'Real-time Processing', 'Low Power', 'Neural Engine'],
    },
    {
      category: 'ai',
      name: 'AI Agentic Systems',
      description: 'Autonomous intelligent agents for complex decision-making and automation.',
      features: ['Autonomous', 'Learning Capable', 'Multi-task', 'Adaptive'],
    },
    {
      category: 'ai',
      name: 'Edge AI Solutions',
      description: 'Powerful AI processing at the edge with minimal latency and enhanced privacy.',
      features: ['On-device AI', 'Privacy First', 'Ultra-low Latency', 'Offline Capable'],
    },
    {
      category: 'ai',
      name: 'Intelligent Automation Modules',
      description: 'Smart automation systems powered by AI for industrial and commercial applications.',
      features: ['Predictive', 'Self-optimizing', 'Integration Ready', 'Scalable'],
    },
  ];

  const customSolutions = [
    {
      title: 'Custom PCB Design',
      description: 'End-to-end PCB design and manufacturing for your specific requirements.',
    },
    {
      title: 'Firmware Development',
      description: 'Expert firmware development for embedded systems and microcontrollers.',
    },
    {
      title: 'Hardware-Software Co-Design',
      description: 'Integrated approach to hardware and software development for optimal performance.',
    },
    {
      title: 'End-to-End Product Engineering',
      description: 'Complete product development from concept to manufacturing.',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions across Display Technologies, Wearables, Embedded Fashion, and AI Systems
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={`${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] text-white'
                    : 'border-gray-300 text-gray-700 hover:border-[#4db5c0]'
                } transition-all duration-300`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#4db5c0]/10 text-[#1a5f7a] mb-4">
                      {categories.find(c => c.id === product.category)?.name}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#1a5f7a] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Custom Embedded Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored engineering services for your unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customSolutions.map((solution, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] mx-auto mb-4 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Our engineering team can design and develop products tailored to your specific needs
          </p>
          <Button
            size="lg"
            className="bg-white text-[#1a5f7a] hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Contact Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
