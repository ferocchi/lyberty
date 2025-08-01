import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

export default function Contact() {
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
            Get in <span className="tagline">Touch</span>
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Ready to transform your entrepreneurial journey? Let's start a
            conversation.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-4"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Let's Build Together
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mb-8"></div>

              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                Whether you're just starting your entrepreneurial journey or
                looking to scale your existing venture, we're here to help you
                succeed.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="icon-container p-3 rounded-full">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-blue-200">hello@lyberty.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="icon-container p-3 rounded-full">
                    <i className="fas fa-phone text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-blue-200">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="icon-container p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-blue-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-discord text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="feature-card rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-white font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-white font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-white font-medium mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 glow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
