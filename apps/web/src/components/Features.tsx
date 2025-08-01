"use client";

import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient,
}) => {
  return (
    <div className="feature-card rounded-lg p-8 flex flex-col items-center text-center">
      <div className={`${gradient} p-4 rounded-full mb-6`}>
        <i className={`${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="font-subheadline-md text-white mb-4">{title}</h3>
      <p className="text-blue-200 font-body leading-relaxed">{description}</p>
    </div>
  );
};

export default function Features() {
  const features = [
    {
      icon: "fas fa-robot",
      title: "AI-Powered Automation",
      description:
        "Intelligent automation that handles repetitive tasks and streamlines your workflow, letting you focus on what matters most.",
      gradient: "icon-container",
    },
    {
      icon: "fas fa-chart-line",
      title: "Unified Analytics",
      description:
        "Consolidated data from all your tools in one dashboard, providing clear insights and actionable intelligence.",
      gradient: "icon-container",
    },
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast",
      description:
        "Optimized performance that keeps your operations running smoothly without the typical delays and bottlenecks.",
      gradient: "icon-container",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Enterprise Security",
      description:
        "Bank-level security protocols ensure your data and operations are protected at every level.",
      gradient: "icon-container",
    },
    {
      icon: "fas fa-plug",
      title: "Seamless Integration",
      description:
        "Connect all your existing tools and platforms without disruption to your current workflow.",
      gradient: "icon-container",
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description:
        "Built-in collaboration tools that keep your team aligned and moving forward together.",
      gradient: "icon-container",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-white mb-4">
            Built for the Future
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-2"></div>
          <p className="text-blue-200 font-subheadline mt-8 max-w-3xl mx-auto">
            Lyberty combines cutting-edge AI technology with intuitive design to
            create the ultimate platform for modern entrepreneurs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 font-subheadline font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 glow">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
