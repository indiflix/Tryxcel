import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Compass, Rocket, Globe2, Leaf, Shield, Users } from 'lucide-react';

const MissionVisionPage = () => {
  const roadmap = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Continuous Innovation',
      description: 'Investing in R&D to stay ahead of technological curves and pioneer new solutions',
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: 'Global Expansion',
      description: 'Extending our reach to serve clients worldwide with localized excellence',
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Sustainable Technology',
      description: 'Developing eco-friendly solutions that minimize environmental impact',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enhanced Security',
      description: 'Implementing advanced security measures to protect data and systems',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Talent Development',
      description: 'Nurturing the next generation of engineers and innovators',
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Industry Leadership',
      description: 'Setting standards and best practices in embedded and AI technologies',
    },
  ];

  const principles = [
    {
      title: 'Innovation at Core',
      description: 'We believe innovation is not just about technology - it is about solving real-world problems in creative ways.',
    },
    {
      title: 'Human-Centric Design',
      description: 'Technology should enhance human experience, not complicate it. We design with empathy and purpose.',
    },
    {
      title: 'Ethical AI',
      description: 'As AI pioneers, we commit to developing responsible, transparent, and ethical AI systems.',
    },
    {
      title: 'Quality First',
      description: 'Excellence is not negotiable. Every product, every line of code reflects our commitment to quality.',
    },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mission & Vision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our journey towards technological excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-none bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
              <CardContent className="p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                  <Target className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl leading-relaxed text-white/95">
                  To engineer intelligent, scalable, and future-ready technologies that seamlessly integrate AI, embedded systems, and design to empower businesses and transform lives.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                    <p className="text-white/90">Empower businesses with cutting-edge technology</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                    <p className="text-white/90">Create seamless integration of AI and embedded systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                    <p className="text-white/90">Transform lives through intelligent solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-none bg-gradient-to-br from-[#4db5c0] to-[#1a5f7a] text-white">
              <CardContent className="p-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                  <Eye className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed text-white/95">
                  To become a global leader in AI-driven embedded innovation, redefining how technology interacts with humans, industries, and the future.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                    <p className="text-white/90">Lead the AI-driven embedded innovation landscape</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                    <p className="text-white/90">Redefine human-technology interaction</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                    <p className="text-white/90">Shape the future of industries worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Innovation Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to technology and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#1a5f7a]">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Innovation Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic focus areas for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmap.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Ethics */}
      <section className="py-20 bg-gradient-to-br from-[#1a5f7a] to-[#4db5c0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sustainability & Ethics</h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                We believe that technological progress must go hand in hand with environmental responsibility and ethical practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Environmental Commitment</h4>
                    <p className="text-white/80">Designing energy-efficient solutions and minimizing our carbon footprint</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Ethical AI</h4>
                    <p className="text-white/80">Developing AI systems that are transparent, fair, and respect privacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Social Responsibility</h4>
                    <p className="text-white/80">Creating technology that benefits society and promotes inclusivity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center">
                  <Globe2 className="w-32 h-32 mx-auto mb-6" />
                  <p className="text-2xl font-bold">Building a Better Tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Long-term Technology Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We envision a future where intelligent embedded systems seamlessly integrate into every aspect of life—from healthcare and transportation to entertainment and education. Our commitment is to lead this transformation, creating technologies that are not only innovative but also accessible, sustainable, and beneficial for all.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionPage;
