import Layout from "@/components/Layout";

export default function Page1() {
  return (
    <Layout>
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-16">
          {/* Logo/Title Area */}
          <h1 className="text-7xl font-bold text-white mb-4">
            Lyberty<span className="text-blue-400">™</span>
          </h1>

          {/* Tagline */}
          <h2 className="tagline text-4xl font-semibold mb-8">
            Automate the Venture. Amplify the Vision.
          </h2>

          {/* Subheadline */}
          <p className="text-white text-2xl mb-12 opacity-90">
            The AI Engine for Builders Who Think Bigger
          </p>

          {/* Animated Process Flow */}
          <div className="animation-container mt-8">
            <div className="animation-text text-xl text-blue-300">
              <i className="fas fa-lightbulb mr-2"></i> Strategy
            </div>
            <div className="animation-text text-xl text-blue-300">
              <i className="fas fa-filter mr-2"></i> Funnel
            </div>
            <div className="animation-text text-xl text-blue-300">
              <i className="fas fa-rocket mr-2"></i> Launch
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 right-10 flex items-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-blue-500 mr-4"></div>
            <span className="text-blue-300 text-sm">2025</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
