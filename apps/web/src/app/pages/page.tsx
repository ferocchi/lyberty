import Layout from "@/components/Layout";
import Link from "next/link";

export default function PagesIndex() {
  const pages = [
    {
      number: 1,
      title: "Cover Slide",
      href: "/page-1",
      description: "Lyberty™ - The AI Engine for Builders Who Think Bigger",
    },
    {
      number: 2,
      title: "Building today is broken",
      href: "/page-2",
      description: "The modern entrepreneurial landscape challenges",
    },
    {
      number: 3,
      title: "We didn't start companies to stare at dashboards",
      href: "/page-3",
      description: "Aspiration vs Reality comparison",
    },
    {
      number: 4,
      title: "The AI Engine for Venture Builders",
      href: "/page-4",
      description: "Process flow and automation benefits",
    },
    {
      number: 5,
      title: "One system instead of 10 tools",
      href: "/page-5",
      description: "Tool consolidation and unification",
    },
    {
      number: 6,
      title: "Coming Soon",
      href: "/page-6",
      description: "Page under development",
    },
    {
      number: 7,
      title: "Coming Soon",
      href: "/page-7",
      description: "Page under development",
    },
    {
      number: 8,
      title: "Coming Soon",
      href: "/page-8",
      description: "Page under development",
    },
    {
      number: 9,
      title: "Coming Soon",
      href: "/page-9",
      description: "Page under development",
    },
    {
      number: 10,
      title: "Coming Soon",
      href: "/page-10",
      description: "Page under development",
    },
    {
      number: 11,
      title: "Coming Soon",
      href: "/page-11",
      description: "Page under development",
    },
    {
      number: 12,
      title: "Coming Soon",
      href: "/page-12",
      description: "Page under development",
    },
    {
      number: 13,
      title: "Coming Soon",
      href: "/page-13",
      description: "Page under development",
    },
    {
      number: 14,
      title: "Coming Soon",
      href: "/page-14",
      description: "Page under development",
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Lyberty Presentation Pages
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mb-4"></div>
            <p className="text-blue-200 text-lg">
              All pages from the original HTML presentation, transformed into
              Next.js components.
            </p>
          </div>

          {/* Pages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.number}
                href={page.href}
                className="feature-card rounded-lg p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="icon-container p-3 rounded-full mr-4">
                    <span className="text-white font-bold text-lg">
                      {page.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {page.title}
                  </h3>
                </div>
                <p className="text-blue-200 text-sm">{page.description}</p>
                <div className="mt-4 flex items-center text-blue-300 text-sm">
                  <i className="fas fa-arrow-right mr-2"></i>
                  View Page
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 glow"
            >
              <i className="fas fa-home mr-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
