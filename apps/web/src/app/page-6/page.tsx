import Layout from "@/components/Layout";

export default function Page6() {
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
              Page 6 - Coming Soon
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mt-2"></div>
          </div>

          {/* Content Placeholder */}
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-cog text-blue-400 text-6xl mb-4 animate-spin"></i>
              <p className="text-blue-200 text-xl">
                This page is being transformed from the original HTML
                presentation.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            <div className="text-blue-300 text-sm">
              <span>6/14</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
