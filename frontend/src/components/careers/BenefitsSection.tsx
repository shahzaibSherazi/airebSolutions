import React, { useState } from "react";
import { Globe, TrendingUp, Users, FileText, Download } from "lucide-react";
import GlobIcon from "@/assets/careers/global.svg?react";
import GrowthIcon from "@/assets/careers/growth.svg?react";
import CultureIcon from "@/assets/careers/culture.svg?react";
import LgPdfIcon from "@/assets/careers/lg-pdf.png";
import SmPdfIcon from "@/assets/careers/sm-pdf.svg?react";

const benefits = [
  {
    icon: <GlobIcon />,
    title: "Work on Global Projects",
    desc: "Collaborate with international clients across software, call-center, and travel-tech industries.",
  },
  {
    icon: <GrowthIcon />,
    title: "Continuous Learning & Growth",
    desc: "Access to training programs, mentorship, and real-world project experience.",
  },
  {
    icon: <CultureIcon />,
    title: "Supportive Team Culture",
    desc: "You're more than your title — your ideas and creativity truly matter.",
  },
];

const BenefitsSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleDownload = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    // Simulate API call / email capture
    await new Promise((r) => setTimeout(r, 1200));

    // Create a dummy PDF download (in real use, replace with actual PDF URL)
    const pdfUrl = "/presentation.pdf"; // replace with your actual PDF path or API endpoint
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aireb-Solutions-Benefits.pdf";
    link.click();

    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="relative w-full bg-[#02070F] text-white">
      {/* ── Header ── */}
      <div className="container  px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-10">
          <button className="bg-primary text-white font-outfit text-[clamp(12px,1.8vw,18px)] font-medium px-4 py-1.5 mb-6">
            Benefits
          </button>
          <h2 className="font-stoke text-h2 font-normal mb-4">
            We Get You Covered!
          </h2>
          <p className="font-outfit text-[clamp(12px,1.8vw,18px)] font-medium  leading-relaxed">
            We're here to support your well-being and make sure you have
            everything <br className="hidden lg:block" /> you need to thrive at
            work and in life!
          </p>
        </div>

        {/* ── 3 Benefit Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between p-8 min-h-[280px]"
                style={{
                  background:
                    "linear-gradient(48.3deg, #02070F 45.56%, #103775 100%)",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  // Border via outline trick since border-image doesn't work with border-radius
                  outline: "1px solid transparent",
                  borderImage:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4285F4 50.96%, #000000 100%) 1",
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4285F4 50.96%, #000000 100%)",
                  borderImageSlice: 1,
                }}>
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-sm">
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-outfit text-textColor line-clamp-2 overflow-hidden font-medium text-[clamp(14px,2vw,24px)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-outfit text-textColor line-clamp-2 overflow-hidden font-normal text-[clamp(12px,1.6vw,16px)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── PDF Download Card ── */}
        <div
          className="relative w-full rounded-lg overflow-hidden px-8 sm:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(90.51deg, #02070F 0.4%, #4285F4 51.16%, #02070F 99.6%)",
            border: "1px solid",
            borderImageSource:
              "linear-gradient(270deg, #4285F4 0%, #000000 50%, #4285F4 100%)",
            borderImageSlice: 1,
          }}>
          {/* Left: text + input */}
          <div className="flex flex-col gap-4 flex-1 ">
            <div>
              <h3 className="font-stoke text-h2 font-normal leading-tight mb-2">
                Download our presentation
                <br />
                for candidates
              </h3>
              <p className="font-outfit font-medium text-[clamp(12px,1.6vw,18px)]">
                Download the pdf presentation to learn more about our benefits.
              </p>
            </div>

            {/* Email input + button */}
            <div className="flex items-stretch gap-2 mt-2 max-w-lg">
              <input
                type="email"
                placeholder="Enter Your e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                className="flex-1 bg-primary border border-white  rounded-[5px] px-4 py-3 text-sm font-outfit text-white placeholder-white/40 outline-none focus:border-[#4285F4] transition-colors"
              />
              <button
                onClick={handleDownload}
                disabled={status === "loading"}
                className="flex items-center gap-2 bg-primary rounded-[5px] border border-white px-5 py-3 text-[clamp(12px,1.6vw,18px)] font-outfit font-medium text-white hover:bg-[#4285F4]/20 transition-all disabled:opacity-60">
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Download PDF
                    <SmPdfIcon />
                  </>
                )}
              </button>
            </div>

            {/* Status messages */}
            {status === "error" && (
              <p className="font-outfit text-xs text-red-400">
                Please enter a valid email address.
              </p>
            )}
            {status === "success" && (
              <p className="font-outfit text-xs text-green-400">
                ✓ Thank you! Your download has started.
              </p>
            )}
          </div>

          {/* Right: PDF icon */}
          <div className="hidden sm:flex items-center justify-center opacity-80">
            <div className="w-32 h-36 flex items-center justify-center relative">
              <img src={LgPdfIcon} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
