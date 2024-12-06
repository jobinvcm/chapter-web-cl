"use client";

import { CheckCircle, Zap, Shield, Smartphone, Globe, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";

const FeaturesPage = () => {
  const features = [
    {
      title: "Lightning Fast Performance",
      description: "Our platform is optimized for speed and efficiency, ensuring your work flows smoothly without interruption.",
      icon: Zap
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security protocols protect your data with state-of-the-art encryption and monitoring.",
      icon: Shield
    },
    {
      title: "Mobile Responsive",
      description: "Access your workspace from any device with our fully responsive design and native mobile apps.",
      icon: Smartphone
    },
    {
      title: "Global Accessibility",
      description: "Connect from anywhere in the world with our distributed network of servers ensuring low-latency access.",
      icon: Globe
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools and shared workspaces.",
      icon: Users
    },
    {
      title: "Automated Workflows",
      description: "Streamline your processes with customizable automation tools and integrations.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Powerful Features
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover all the tools and features that make our platform the perfect solution for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of satisfied users who have transformed their workflow with our platform.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;