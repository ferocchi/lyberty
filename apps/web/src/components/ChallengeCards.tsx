"use client";

import React from "react";

interface ChallengeCardProps {
  icon: string;
  title: string;
  description: string;
  detail: string;
  detailIcon: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  icon,
  title,
  description,
  detail,
  detailIcon,
}) => {
  return (
    <div className="challenge-card rounded-lg p-6 flex flex-col h-full">
      <div className="flex items-start mb-4">
        <div className="icon-container p-3 rounded-full mr-4">
          <i className={`${icon} text-white text-xl`}></i>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <p className="text-blue-200 text-base sm:text-lg flex-grow">
        {description}
      </p>
      <div className="mt-3 flex items-center">
        <i className={`${detailIcon} text-blue-400 mr-2`}></i>
        <span className="text-blue-300 text-sm">{detail}</span>
      </div>
    </div>
  );
};

export default function ChallengeCards() {
  const challenges = [
    {
      icon: "fas fa-puzzle-piece",
      title: "Tool Overload & Disconnection",
      description:
        "Juggling 8-10 disconnected tools for essential functions creates data silos and forces manual integration.",
      detail: "Copy.ai, Webflow, Airtable, Hyros, etc.",
      detailIcon: "fas fa-tools",
    },
    {
      icon: "fas fa-hourglass-half",
      title: "Manual & Inefficient Processes",
      description:
        "Critical strategic loops from GTM to funnel testing are manual, slowing execution and creating inefficiencies.",
      detail: "Time-consuming, error-prone",
      detailIcon: "fas fa-clock",
    },
    {
      icon: "fas fa-chart-network",
      title: "Data & Attribution Chaos",
      description:
        "Data scattered across platforms makes it impossible to determine which marketing efforts drive revenue.",
      detail: "Bloated dashboards, unclear insights",
      detailIcon: "fas fa-database",
    },
    {
      icon: "fas fa-brain",
      title: "Decision Fatigue & Burnout",
      description:
        "Cumulative complexity leads to overwhelming decision fatigue, a primary cause of founder burnout.",
      detail: "72% of founders experience burnout",
      detailIcon: "fas fa-battery-empty",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Building today is broken.
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-2"></div>
          <p className="text-blue-200 text-lg sm:text-xl mt-8 max-w-4xl mx-auto">
            The modern entrepreneurial landscape is fraught with operational
            friction that stifles innovation and drains the passion that fuels
            new ventures. Founders are caught in a web of complexity, managing
            fragmented tools and manual processes.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              detail={challenge.detail}
              detailIcon={challenge.detailIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
