import Layout from "@/components/Layout";

export default function Page2() {
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
    <Layout>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
        {/* Blueprint Lines Overlay */}
        <div className="blueprint-lines"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-16 py-12">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white">
              Building today is broken.
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
          </div>

          {/* Introduction */}
          <p className="text-blue-200 text-xl mb-8 max-w-4xl">
            The modern entrepreneurial landscape is fraught with operational
            friction that stifles innovation and drains the passion that fuels
            new ventures. Founders are caught in a web of complexity, managing
            fragmented tools and manual processes.
          </p>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="challenge-card rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <div className="icon-container p-3 rounded-full mr-4">
                    <i className={`${challenge.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {challenge.title}
                  </h3>
                </div>
                <p className="text-blue-200 text-lg flex-grow">
                  {challenge.description}
                </p>
                <div className="mt-3 flex items-center">
                  <i
                    className={`${challenge.detailIcon} text-blue-400 mr-2`}
                  ></i>
                  <span className="text-blue-300 text-sm">
                    {challenge.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            <div className="text-blue-300 text-sm">
              <span>2/14</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
