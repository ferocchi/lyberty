import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://picture-search.skywork.ai/aippt/image/sheet/709700fe3eb3d3aa0170c6d92620871c.jpg"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="tagline">Lyberty</span>
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            We're building the future of entrepreneurial success through
            intelligent automation and unified platforms.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-4"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                We believe that every entrepreneur deserves the tools and
                systems that allow them to focus on what they do best: building,
                innovating, and growing their vision.
              </p>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Lyberty was born from the frustration of watching brilliant
                founders get bogged down by operational complexity, tool
                fragmentation, and manual processes that drain their energy and
                slow their progress.
              </p>
              <p className="text-blue-200 text-lg leading-relaxed">
                Our platform combines cutting-edge AI technology with intuitive
                design to create the ultimate entrepreneurial operating system.
              </p>
            </div>
            <div className="feature-card rounded-lg p-8">
              <div className="icon-container p-4 rounded-full mb-6 w-16 h-16 flex items-center justify-center">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Empowering Builders
              </h3>
              <p className="text-blue-200 text-base leading-relaxed">
                We're not just building software—we're building the foundation
                for the next generation of successful ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card rounded-lg p-8 text-center">
              <div className="icon-container p-4 rounded-full mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Innovation First
              </h3>
              <p className="text-blue-200 text-base leading-relaxed">
                We constantly push the boundaries of what's possible, always
                looking for new ways to solve old problems.
              </p>
            </div>

            <div className="feature-card rounded-lg p-8 text-center">
              <div className="icon-container p-4 rounded-full mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Community Driven
              </h3>
              <p className="text-blue-200 text-base leading-relaxed">
                We build with our community, for our community. Every feature
                and decision is guided by real user needs.
              </p>
            </div>

            <div className="feature-card rounded-lg p-8 text-center">
              <div className="icon-container p-4 rounded-full mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Trust & Security
              </h3>
              <p className="text-blue-200 text-base leading-relaxed">
                We understand that your data and operations are critical.
                Security and reliability are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
