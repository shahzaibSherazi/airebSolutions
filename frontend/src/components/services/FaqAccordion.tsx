import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const faqs = [
    {
      question: "What is a software service?",
      answer:
        "A software service refers to a system or application provided to users via the internet (usually through a subscription or licensing model). Examples include cloud-based platforms, software-as-a-service (SaaS), web applications, and more. It allows businesses or individuals to access software tools without the need for extensive hardware or installation processes.",
    },
    {
      question: "How does the pricing work?",
      answer:
        "Our pricing is based on a subscription model with different tiers depending on your needs. We offer monthly and annual billing options with discounts for annual commitments. All plans include basic features, while higher tiers offer advanced functionality and priority support.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support through email, chat, and phone. All plans include basic support, while premium plans offer dedicated account managers and faster response times. We also have an extensive knowledge base and video tutorials available.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. When you cancel, you'll continue to have access to the service until the end of your current billing period.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We take data security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices including regular security audits, two-factor authentication, and comply with GDPR and other data protection regulations.",
    },
    {
      question: "What is a software service?",
      answer:
        "A software service refers to a system or application provided to users via the internet (usually through a subscription or licensing model). Examples include cloud-based platforms, software-as-a-service (SaaS), web applications, and more. It allows businesses or individuals to access software tools without the need for extensive hardware or installation processes.",
    },
  ];

  const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  // Split into two independent columns
  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex  gap-3 bg-[#001FEF] text-white pl-6 pr-3 py-[5px]   text-lg font-outfit font-normal mb-3">
            PEOPLE USUALLY ASK
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit leading-[56px] font-normal">
            Your Questions
            <br />
            Answered!
          </h1>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((faq, i) => {
              const realIndex = i * 2;
              const isOpen = openIndexes.includes(realIndex);
              return (
                <AccordionItem
                  key={realIndex}
                  faq={faq}
                  isOpen={isOpen}
                  onClick={() => toggle(realIndex)}
                />
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((faq, i) => {
              const realIndex = i * 2 + 1;
              const isOpen = openIndexes.includes(realIndex);
              return (
                <AccordionItem
                  key={realIndex}
                  faq={faq}
                  isOpen={isOpen}
                  onClick={() => toggle(realIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div
    className={`rounded-[5px] border-[0.5px] transition-all duration-300 overflow-hidden ${
      isOpen
        ? "bg-gradient-to-br from-[#051057] to-[#030933] border-blue-800"
        : "bg-zinc-900 border-zinc-800"
    }`}>
    <button
      onClick={onClick}
      className="w-full px-5 py-3 flex justify-between items-center text-left hover:bg-opacity-80 transition-all">
      <h3 className=" font-outfit font-bold text-[22px] pr-4">
        {faq.question}
      </h3>
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 bg-white text-blue-900 ">
        {isOpen ? <ChevronUp size={23} /> : <ChevronDown size={23} />}
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96  py-3" : "max-h-0"
      }`}>
      <div className="px-6 pb-6 text-white text-base font-normal font-outfit leading-[22px]">
        {faq.answer}
      </div>
    </div>
  </div>
);

export default FAQAccordion;
