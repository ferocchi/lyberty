import Layout from "@/components/Layout";

export default function Page5() {
  const topTools = [
    {
      icon: "fas fa-pen-fancy",
      title: "Copy",
      tool: "Copy.ai / Jasper",
      description: "AI-driven copy generation",
    },
    {
      icon: "fas fa-filter",
      title: "Funnels",
      tool: "Webflow / ClickFunnels",
      description: "Convert visitors into leads",
    },
    {
      icon: "fas fa-file-alt",
      title: "Creative Briefs",
      tool: "Notion / Figma",
      description: "Templates for design teams",
    },
  ];

  const bottomTools = [
    {
      icon: "fas fa-chess",
      title: "GTM Strategy",
      tool: "Slides / Consultants",
      description: "Market entry strategies",
    },
    {
      icon: "fas fa-chart-line",
      title: "Tracking",
      tool: "Triple Whale / Hyros",
      description: "Multi-touch attribution",
    },
    {
      icon: "fas fa-tasks",
      title: "Project Mgmt",
      tool: "Airtable / Asana",
      description: "Task management",
    },
  ];

  const benefits = [
    { icon: "fas fa-dollar-sign", text: "Reduced costs" },
    { icon: "fas fa-database", text: "Eliminated silos" },
    { icon: "fas fa-tachometer-alt", text: "Improved efficiency" },
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
              One system instead of 10 tools.
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
          </div>

          {/* Introduction */}
          <p className="text-blue-200 text-xl mb-8 max-w-4xl">
            Lyberty consolidates disparate functions into a single, streamlined
            system, reducing costs and eliminating data silos.
          </p>

          {/* Tools Comparison */}
          <div className="flex flex-col space-y-6 flex-grow">
            {/* Row 1: Top 3 Tools */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {topTools.map((tool, index) => (
                <div key={index} className="tool-card rounded-lg p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <div className="icon-container p-2 rounded-full mr-3">
                      <i className={`${tool.icon} text-white`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-blue-300 text-sm mb-2">{tool.tool}</p>
                  <div className="text-blue-200 text-xs">
                    {tool.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Center: Arrow and Consolidation Image */}
            <div className="flex justify-center items-center relative">
              {/* Left Arrow */}
              <div className="arrow-container w-1/4">
                <div className="arrow"></div>
              </div>
              {/* Consolidation Image */}
              <div className="lyberty-card rounded-lg p-4 flex flex-col items-center justify-center w-1/4">
                <img
                  alt="Microsoft tools grid"
                  className="w-32 h-32 object-cover rounded-lg mb-2 opacity-80"
                  src="https://picture-search.skywork.ai/aippt/image/sheet/e7b534f33da87b4f2d805e1a470d524f.jpg"
                />
                <h3 className="text-xl font-semibold text-white text-center">
                  Lyberty
                </h3>
                <p className="text-blue-300 text-sm text-center mt-1">
                  Unified Platform
                </p>
              </div>
              {/* Right Arrow */}
              <div className="arrow-container w-1/4">
                <div className="arrow"></div>
              </div>
            </div>

            {/* Row 2: Bottom 3 Tools */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {bottomTools.map((tool, index) => (
                <div key={index} className="tool-card rounded-lg p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <div className="icon-container p-2 rounded-full mr-3">
                      <i className={`${tool.icon} text-white`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-blue-300 text-sm mb-2">{tool.tool}</p>
                  <div className="text-blue-200 text-xs">
                    {tool.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-6 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center">
                <i className={`${benefit.icon} text-blue-400 mr-2`}></i>
                <span className="text-blue-200">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            <div className="text-blue-300 text-sm">
              <span>5/14</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
