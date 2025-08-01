"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://picture-search.skywork.ai/aippt/image/sheet/709700fe3eb3d3aa0170c6d92620871c.jpg"
          alt="Background"
        />
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="font-headline-xl text-white mb-4">
          <span className="font-logo">lyberty</span>
          <span className="text-blue-400">™</span>
        </h1>

        {/* Tagline */}
        <h2 className="tagline font-headline-lg font-bold mb-8">
          Automate the Venture. Amplify the Vision.
        </h2>

        {/* Subheadline */}
        <p className="text-white font-subheadline-lg mb-12 opacity-90 max-w-4xl mx-auto">
          The AI Engine for Builders Who Think Bigger
        </p>

        {/* Animated Process Flow */}
        <div className="animation-container mx-auto mt-8">
          <div className="animation-text font-body-lg text-blue-300">
            <i className="fas fa-lightbulb mr-2"></i> Strategy
          </div>
          <div className="animation-text font-body-lg text-blue-300">
            <i className="fas fa-filter mr-2"></i> Funnel
          </div>
          <div className="animation-text font-body-lg text-blue-300">
            <i className="fas fa-rocket mr-2"></i> Launch
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="px-8 py-4 font-subheadline font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 glow">
            Get Started
          </button>
          <button className="px-8 py-4 font-subheadline font-semibold text-blue-300 border border-blue-300/30 rounded-lg hover:bg-blue-300/10 transition-all duration-200">
            Learn More
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 right-10 flex items-center">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent to-blue-500 mr-4"></div>
          <span className="text-blue-300 font-ui">2025</span>
        </div>
      </div>
    </section>
  );
}
