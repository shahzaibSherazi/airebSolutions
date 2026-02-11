import React, { useState } from "react";

const TechnologiesShowcase = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const technologies = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Vue.js", icon: "💚" },
      { name: "Angular", icon: "🅰️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Next.js", icon: "▲" },
      { name: "Svelte", icon: "✨" },
      { name: "Nuxt.js", icon: "🟢" },
      { name: "Gatsby", icon: "💜" },
      { name: "Vite", icon: "⚡" },
      { name: "Webpack", icon: "📦" },
      { name: "Babel", icon: "🔀" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "PHP", icon: "🐘" },
      { name: "Ruby", icon: "💎" },
      { name: "Go", icon: "🔷" },
      { name: "C#", icon: "🔷" },
      { name: "Rust", icon: "🦀" },
      { name: "Kotlin", icon: "🟠" },
      { name: "Scala", icon: "🧪" },
      { name: "Perl", icon: "🐪" },
      { name: "Swift", icon: "🐦" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      { name: "Firebase", icon: "🔥" },
      { name: "Cassandra", icon: "📊" },
      { name: "Elasticsearch", icon: "🔍" },
      { name: "SQLite", icon: "🗄️" },
      { name: "MariaDB", icon: "🐬" },
      { name: "Oracle", icon: "🏢" },
      { name: "DynamoDB", icon: "⚡" },
      { name: "Neo4j", icon: "🕸️" },
    ],
    devops: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Jenkins", icon: "🤖" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🌐" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Ansible", icon: "⚙️" },
      { name: "GitLab CI/CD", icon: "🦊" },
      { name: "Prometheus", icon: "📈" },
      { name: "Grafana", icon: "📊" },
      { name: "Nginx", icon: "🟢" },
    ],
    operating: [
      { name: "Linux", icon: "🐧" },
      { name: "Windows", icon: "🪟" },
      { name: "macOS", icon: "🍎" },
      { name: "Ubuntu", icon: "🟠" },
      { name: "CentOS", icon: "💜" },
      { name: "Debian", icon: "🔴" },
      { name: "Fedora", icon: "🔵" },
      { name: "Arch Linux", icon: "🎯" },
      { name: "Red Hat", icon: "🎩" },
      { name: "Alpine Linux", icon: "🏔️" },
      { name: "Kali Linux", icon: "🐉" },
      { name: "FreeBSD", icon: "👹" },
    ],
    ecommerce: [
      { name: "Shopify", icon: "🛍️" },
      { name: "WooCommerce", icon: "🛒" },
      { name: "Magento", icon: "🔶" },
      { name: "Stripe", icon: "💳" },
      { name: "PayPal", icon: "💰" },
      { name: "BigCommerce", icon: "📦" },
      { name: "Square", icon: "⬜" },
      { name: "SquareSpace", icon: "⬛" },
      { name: "Salesforce Commerce", icon: "☁️" },
      { name: "OpenCart", icon: "🛒" },
      { name: "PrestaShop", icon: "🛍️" },
      { name: "Wix", icon: "🎨" },
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend Development" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOPS" },
    { id: "operating", label: "Operating Systems" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  return (
    <div className=" bg-black text-textColor px-4 md:px-12 lg:px-24 lg:py-24 md:py-20 py-16 ">
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[56px] font-stoke font-bold text-center mb-8 sm:mb-14">
          Technologies we use
        </h1>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-[38px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 sm:py-4 text-sm font-outfit border border-[#D9D9D9]  font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gradient-to-b from-[#1A1A1A] to-[#1C1C1C]"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies[activeTab].map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#242424] to-[#141414] border-025 border-white p-2 sm:p-[15px] flex sm:flex-row flex-col items-center justify-center text-center sm:text-start sm:justify-start  gap-2 hover:bg-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-zinc-700">
              <div className="text-3xl sm:text-4xl">{tech.icon}</div>
              <span className="text-xs sm:text-sm font-medium font-outfit text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesShowcase;
