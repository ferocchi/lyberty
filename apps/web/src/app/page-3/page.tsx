import Layout from "@/components/Layout";

export default function Page3() {
  const aspirations = [
    {
      icon: "fas fa-impact",
      title: "Build Impactful Products",
      description: "Create meaningful solutions that transform lives",
    },
    {
      icon: "fas fa-users",
      title: "Connect with Customers",
      description: "Build authentic relationships and community",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Creative Freedom",
      description: "Experience the joy of creation and innovation",
    },
  ];

  const realities = [
    {
      icon: "fas fa-chart-line",
      title: "Drowned in Noise",
      description: "Overwhelmed by operational complexity",
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Disconnected Tools",
      description: "Fragmented ecosystem forcing manual integration",
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "Dashboard Overwhelm",
      description: "Bloated, confusing interfaces obscuring insights",
      hasImage: true,
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
              We didn't start companies to stare at dashboards.
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
          </div>

          {/* Introduction */}
          <p className="text-blue-200 text-xl mb-8 max-w-4xl">
            The entrepreneurial journey is driven by a desire for creation,
            connection, and autonomy. Instead, founders are drowning in
            operational complexity, replaced by the drudgery of managing
            dashboards and reconciling data.
          </p>

          {/* Split Content */}
          <div className="flex flex-col lg:flex-row flex-grow gap-8">
            {/* Left Side: What We Wanted */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">
                What We Wanted
              </h2>
              {aspirations.map((aspiration, index) => (
                <div
                  key={index}
                  className="aspiration-card rounded-lg p-6 mb-4 flex items-start"
                >
                  <div className="icon-container-aspiration p-3 rounded-full mr-4 flex-shrink-0">
                    <i className={`${aspiration.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {aspiration.title}
                    </h3>
                    <p className="text-green-200">{aspiration.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: What We Got */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">
                What We Got
              </h2>
              {realities.map((reality, index) => (
                <div
                  key={index}
                  className="reality-card rounded-lg p-6 mb-4 flex items-start"
                >
                  <div className="icon-container-reality p-3 rounded-full mr-4 flex-shrink-0">
                    <i className={`${reality.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {reality.title}
                    </h3>
                    <p className="text-red-200">{reality.description}</p>
                  </div>
                  {reality.hasImage && (
                    <img
                      alt="Dashboard overwhelm"
                      className="dashboard-image h-24 w-40 object-cover ml-4"
                      src="https://picture-search.skywork.ai/aippt/image/sheet/0b505877b0b6f9705ba63b9b246b128f.jpg"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            <div className="text-blue-300 text-sm">
              <span>3/14</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
