import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import Jenkins from "@/assets/devops-assets/tech-stack/jenkins.svg?react";
import Gitlab from "@/assets/devops-assets/tech-stack/gitlab.svg?react";
import Github from "@/assets/devops-assets/tech-stack/github.svg?react";
import Bitbucket from "@/assets/devops-assets/tech-stack/bitbucket.svg?react";
import Terraform from "@/assets/devops-assets/tech-stack/terraform.svg?react";
import Ansible from "@/assets/devops-assets/tech-stack/ansible.svg?react";
import Pulumi from "@/assets/devops-assets/tech-stack/pulumi.svg?react";
import AwsCloud from "@/assets/devops-assets/tech-stack/aws.svg?react";
import Docker from "@/assets/devops-assets/tech-stack/docker.svg?react";
import Kubernetes from "@/assets/devops-assets/tech-stack/kubernetes.svg?react";
import Amazon from "@/assets/devops-assets/tech-stack/amazon.svg?react";
import Helm from "@/assets/devops-assets/tech-stack/helm.svg?react";
import Grafana from "@/assets/devops-assets/tech-stack/grafana.svg?react";
import Elastic from "@/assets/devops-assets/tech-stack/elastic.svg?react";
import Prometheus from "@/assets/devops-assets/tech-stack/prometheus.svg?react";
import Datadog from "@/assets/devops-assets/tech-stack/datadog.svg?react";
import Aws from "@/assets/devops-assets/tech-stack/aws-1.svg?react";
import Google from "@/assets/devops-assets/tech-stack/google.svg?react";
import Microsoft from "@/assets/devops-assets/tech-stack/microsoft.svg?react";
import Alibaba from "@/assets/devops-assets/tech-stack/alibaba.svg?react";
import Snyk from "@/assets/devops-assets/tech-stack/snyk.svg?react";
import SecurityHub from "@/assets/devops-assets/tech-stack/securityhub.svg?react";
import Vault from "@/assets/devops-assets/tech-stack/vault.svg?react";
import Sonarqube from "@/assets/devops-assets/tech-stack/sonarqube.svg?react";

const tabs = [
  {
    id: "cicd",
    label: "CI/CD",
    logos: [
      { src: <Jenkins /> },
      { src: <Gitlab /> },
      { src: <Github /> },
      { src: <Bitbucket /> },
    ],
  },
  {
    id: "iac",
    label: "IaC",
    logos: [
      { src: <Terraform /> },
      { src: <Ansible /> },
      { src: <Pulumi /> },
      { src: <AwsCloud /> },
    ],
  },
  {
    id: "containers",
    label: "Containers",
    logos: [
      { src: <Docker /> },
      { src: <Kubernetes /> },
      { src: <Helm /> },
      { src: <Amazon /> },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    logos: [
      { src: <Prometheus /> },
      { src: <Grafana /> },
      { src: <Datadog /> },
      { src: <Elastic /> },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Providers",
    logos: [
      { src: <Aws /> },
      { src: <Google /> },
      { src: <Microsoft /> },
      { src: <Alibaba /> },
    ],
  },
  {
    id: "security",
    label: "Security",
    logos: [
      { src: <Vault /> },
      { src: <Sonarqube /> },
      { src: <Snyk /> },
      { src: <SecurityHub /> },
    ],
  },
];

// ── Logo Slide Item ───────────────────────────────────────────────
const LogoItem = ({ logo }) => (
  <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:scale-110 w-full justify-center">
    {/* Replace this div with <img src={logo.src} /> for real logos */}
    {logo.src}
  </div>
);

// ── Main Component ────────────────────────────────────────────────
const TechStack = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="relative w-full bg-white  overflow-hidden ">
      <div className="container px-6 lg:px-8 py-16 lg:py-24">
        {/* ── Background decorative rings ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c7d2fe] pointer-events-none opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#c7d2fe] pointer-events-none opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
          }}
        />

        {/* ── Heading ── */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center mb-10 gap-3"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className=" font-stoke text-h2 font-bold text-primary">
            Tech Stack We Use
          </h2>
          <p className=" font-outfit text-p text-black  leading-relaxed">
            At Airebsolution, we use modern technologies to build
            high-performance DevOps ecosystems.
          </p>
        </motion.div>

        {/* ── Tabs ── */}
        <div className="relative z-10 flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-xl font-outfit text-lg font-semibold border transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-primary text-white border-gray-200 "
                  : "bg-white text-black border-gray-200 hover:border-primary hover:text-primary"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Swiper Marquee ── */}
        <div className="relative z-10 ">
          {/* Left fade mask */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, white, transparent)",
            }}
          />
          {/* Right fade mask */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, white, transparent)",
            }}
          />

          {/* key={activeTab} forces Swiper to fully remount on tab change */}
          <Swiper
            key={activeTab}
            modules={[Autoplay, FreeMode]}
            simulateTouch={false}
            slidesPerView="auto"
            spaceBetween={0}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            freeMode={true}
            className="w-full logo-swiper">
            {/* Duplicate slides for seamless loop */}
            {[
              ...currentTab.logos,
              ...currentTab.logos,
              ...currentTab.logos,
            ].map((logo, i) => (
              <SwiperSlide
                key={`${logo.src}-${i}`}
                style={{ width: "auto" }}
                className="!w-auto">
                <div className="px-8 ">
                  <LogoItem logo={logo} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
