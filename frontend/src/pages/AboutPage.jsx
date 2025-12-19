import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Heart, Lightbulb, Users2, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries and exploring new technologies',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality & Excellence',
      description: 'Unwavering commitment to delivering the highest standards',
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our mission, every step of the way',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Vision',
      description: 'Building solutions that transform industries worldwide',
    },
  ];

  const timeline = [
    { year: '2010', event: 'Foundation', description: 'Tryxcel Technologies founded by Krishna Raj & Ashutosh' },
    { year: '2013', event: 'Expansion', description: 'Entered AI and embedded systems domain' },
    { year: '2017', event: 'Innovation', description: 'Launched wearable and display technology solutions' },
    { year: '2020', event: 'AI Evolution', description: 'Pioneered AI agentic systems and smart solutions' },
    { year: '2025', event: 'Global Leader', description: 'Recognized as a leader in deep-tech innovation' },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering Excellence Since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded over 15 years ago by visionary engineers Himanshu Choudhary and Sanmukh Srinivash, Tryxcel Technologies LLP began with a simple yet powerful mission: to transform ideas into intelligent reality.
                </p>
                <p>
                  What started as a passion for embedded systems has evolved into a comprehensive technology powerhouse, delivering cutting-edge solutions in AI, embedded engineering, display technologies, and wearable innovations.
                </p>
                <p>
                  Our journey is marked by relentless innovation, unwavering commitment to quality, and a deep understanding of our clients' needs. Today, we stand at the forefront of technological advancement, helping businesses worldwide harness the power of intelligent, future-ready solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a5f7a]/20 to-[#4db5c0]/20 flex items-center justify-center p-8">
                <div className="text-center">
                  <img
                    src="https://customer-assets.emergentagent.com/job_30c33875-34c7-4a27-85e4-66bbc662605d/artifacts/jynyx66u_WhatsApp%20Image%202025-12-13%20at%2016.44.43.jpeg"
                    alt="Tryxcel Technologies"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership & Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary minds driving innovation forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">SS</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Sanmukh Srinivash</h3>
                <p className="text-[#1a5f7a] font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  With deep expertise in embedded systems and AI, Krishna Raj has been the driving force behind Tryxcel's technological innovations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">HC</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Himanshu Choudhary</h3>
                <p className="text-[#1a5f7a] font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  Ashutosh brings strategic vision and business acumen, ensuring Tryxcel remains at the cutting edge of technology and market trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of innovation and excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1a5f7a] to-[#4db5c0] hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                    <div className={index % 2 !== 0 ? 'md:text-left md:pl-12' : ''}>
                      <div className="inline-block bg-gradient-to-r from-[#1a5f7a] to-[#4db5c0] text-white px-4 py-2 rounded-full font-bold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Teaser */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Target className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To engineer intelligent, scalable, and future-ready technologies that seamlessly integrate AI, embedded systems, and design to empower businesses and transform lives.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Eye className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  To become a global leader in AI-driven embedded innovation, redefining how technology interacts with humans, industries, and the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
