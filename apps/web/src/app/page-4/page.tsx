import Layout from "@/components/Layout";

export default function Page4() {
  const processSteps = [
    {
      icon: "fas fa-lightbulb",
      title: "Input",
      description: "Product or offer",
      position: "top-5 left-96",
    },
    {
      icon: "fas fa-chess",
      title: "Strategy",
      description: "Market approach",
      position: "top-25 right-48",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Creative",
      description: "Funnels & assets",
      position: "bottom-25 right-48",
    },
    {
      icon: "fas fa-rocket",
      title: "Launch",
      description: "Multi-channel deployment",
      position: "bottom-5 left-96",
    },
    {
      icon: "fas fa-chart-line",
      title: "Optimize",
      description: "Continuous improvement",
      position: "top-25 left-48",
    },
  ];

  const benefits = [
    {
      icon: "fas fa-tachometer-alt",
      metric: "10x faster",
      description: "Creative testing",
    },
    {
      icon: "fas fa-bullseye",
      metric: "30-50%",
      description: "CAC reduction",
    },
    {
      icon: "fas fa-brain",
      metric: "80%",
      description: "Fewer decisions",
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
              The AI Engine for Venture Builders
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
          </div>

          {/* Introduction */}
          <p className="text-blue-200 text-xl mb-8 max-w-4xl">
            Lyberty is the central AI engine that automates your entire growth
            engine, from ideation to optimization. It transforms strategic
            thinking into execution so you can focus on your core vision.
          </p>

          {/* Process Flow Diagram */}
          <div className="relative flex-grow flex items-center justify-center">
            {/* Central AI Engine */}
            <div className="central-engine absolute rounded-full w-48 h-48 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-brain text-blue-400 text-4xl mb-2"></i>
                <h3 className="text-white text-xl font-semibold">AI Engine</h3>
                <p className="text-blue-300 text-sm mt-1">Automating Growth</p>
              </div>
            </div>

            {/* Process Steps in a Circle */}
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-card absolute rounded-lg p-4 w-44 ${step.position}`}
              >
                <div className="flex items-center mb-2">
                  <div className="icon-container p-2 rounded-full mr-3">
                    <i className={`${step.icon} text-white`}></i>
                  </div>
                  <h4 className="text-white text-lg font-medium">
                    {step.title}
                  </h4>
                </div>
                <p className="text-blue-200 text-sm">{step.description}</p>
              </div>
            ))}

            {/* Connecting Arrows */}
            <div
              className="arrow absolute"
              style={{ top: "70px", left: "440px", transform: "rotate(30deg)" }}
            ></div>
            <div
              className="arrow absolute"
              style={{
                top: "140px",
                right: "240px",
                transform: "rotate(90deg)",
              }}
            ></div>
            <div
              className="arrow absolute"
              style={{
                bottom: "140px",
                right: "240px",
                transform: "rotate(270deg)",
              }}
            ></div>
            <div
              className="arrow absolute"
              style={{
                bottom: "70px",
                left: "440px",
                transform: "rotate(210deg)",
              }}
            ></div>
            <div
              className="arrow absolute"
              style={{ top: "140px", left: "240px", transform: "rotate(0deg)" }}
            ></div>
          </div>

          {/* Benefits */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-3 text-blue-400">
                  <i className={`${benefit.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-white font-medium">{benefit.metric}</h4>
                  <p className="text-blue-200 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            <div className="text-blue-300 text-sm">
              <span>4/14</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
