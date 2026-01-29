import React from "react";

export default function APICRMIntegration() {
  const phases = [
    {
      number: "01",
      title: "Consultation & Planning",
      description:
        "Understand your business requirements and CRM needs. Identify third-party tools and platforms to integrate. Define clear objectives and outcomes for the integration.",
    },
    {
      number: "02",
      title: "System Architecture & Design",
      description:
        "Design a scalable architecture for seamless data flow and integration. Plan API integrations to ensure compatibility between all systems.",
    },
    {
      number: "03",
      title: "Development & Customization",
      description:
        "Develop custom API solutions based on your specific business requirements. Customize CRM systems to ensure they align with your operational goals.",
    },
    {
      number: "04",
      title: "Post-Deployment Support & Optimization",
      description:
        "Provide ongoing support to troubleshoot and resolve any issues. Continuously monitor and optimize integrations for performance and scalability.",
    },
    {
      number: "05",
      title: "Deployment & Integration",
      description:
        "Deploy the solution in a controlled environment for initial implementation. Integrate APIs with your CRM and ensure data flows smoothly across systems.",
    },
    {
      number: "06",
      title: "Testing & Quality Assurance",
      description:
        "Conduct thorough testing to ensure seamless data synchronization and integration. Perform load testing and security audits to ensure optimal performance and safety.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className=" px-8 py-20">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-blue-600 text-white text-sm px-4 py-2">
            Our Work Process
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT — Sticky */}
          <div className="lg:sticky lg:top-24 self-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our API and CRM
              <br />
              Integration Development
              <br />
              Cycle
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
              Transform your business by connecting your CRM with powerful tools
              and platforms through Airish Solutions API integration services.
              Let us help you streamline your operations, enhance customer
              experiences, and drive business growth.
            </p>
          </div>

          {/* RIGHT — Natural Scroll Column */}
          <div className="flex flex-col gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-blue-950/20
                border border-blue-800/30 p-8 rounded-lg
                hover:border-blue-600/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-blue-400 font-bold text-lg">
                    {phase.number}
                  </span>

                  <svg
                    className="w-6 h-6 text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {phase.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
