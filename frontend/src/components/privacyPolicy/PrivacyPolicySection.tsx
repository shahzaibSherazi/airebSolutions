import React from "react";

const sections = [
  {
    title: "Information That We Collect",
    color: "white",
    content: (
      <>
        <p className="font-outfit text-white font-light text-[clmap(12px,1.8vw,18px)] leading-relaxed mb-3">
          When you use our website, you consent to our collection and use of
          your personal information as described in this privacy policy. The
          type of information that we might collect is:
        </p>
        <ul className="space-y-1">
          {[
            "Your name and job title",
            "Your postcode, address details, and email address",
            "Your preferences and interests",
            "Any additional information that you provide us with if you register for certain services, newsletters, events, press releases, surveys, special offers, webinars, and alerts.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 text-sm font-outfit text-white font-light text-[clmap(12px,1.8vw,18px)] leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-white shrink-0" />
              <p className="font-outfit text-white font-light text-[clamp(12px,1.8vw,18px)]">
                {" "}
                {item}
              </p>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "How Cookies Are Used",
    color: "blue",
    content: (
      <>
        {[
          "Any information that we obtain from you is used to understand your requirements better and provide you with an improved service. This includes:",
          "Informing you about special offers, new products, and added value information to the email address that you have provided.",
          "We may contact you for market research purposes to enable us to improve our products and services.",
          "You have the option to opt out of any emails that we send you by clicking the unsubscribe button.",
          "Any information that you provide us with will be securely retained, and we have many safeguarding tools in place to ensure that there is no unauthorised access or disclosure of your data.",
        ].map((para, i) => (
          <p
            key={i}
            className=" text-white font-outfit font-light text-[clmap(12px,1.8vw,18px)] leading-relaxed">
            {para}
          </p>
        ))}
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    color: "white",
    content: (
      <>
        {[
          "Cookies are small files that are placed on your computer's hard drive once you have given them permission to do so. Cookies help to analyse website traffic and inform you when you visit a particular site. They also help to tailor information to your needs and requirements by gathering and retaining information about your preferences.",
          "The cookies on our site help to differentiate you from other customers so that we can tailor your experience with you more effectively.",
          "In summary, cookies help us provide you with a better website by identifying which pages you find useful and which you do not. A cookie does not give us access to your computer or any other personal information about you other than the data that you have already chosen to share with us.",
        ].map((para, i) => (
          <p
            key={i}
            className="font-outfit text-white font-light text-[clmap(12px,1.8vw,18px)] leading-relaxed">
            {para}
          </p>
        ))}
      </>
    ),
  },
  {
    title: "Controlling Your Personal Data",
    color: "white",
    content: (
      <p className="font-outfit text-white font-light text-[clmap(12px,1.8vw,18px)] leading-relaxed">
        We will not sell, distribute, or lease your personal information to
        third parties unless we have your permission or are required by law to
        do so. From time to time, we may use your personal information to send
        you promotional information about third parties which we think will be
        useful to you but only if you have given us previous permission to do
        so.
      </p>
    ),
  },
  {
    title: "Links To External Websites",
    color: "blue",
    content: (
      <p className="font-outfit text-white font-light text-[clmap(12px,1.8vw,18px)] leading-relaxed">
        Please note that we are not responsible for the practices employed by
        websites linked to or from our website, and we have no control over
        their content. Links to other websites are provided as added-value
        information to topics that may be useful to our website visitors. When
        you use a link to go from our website to another website, our Privacy
        Policy is no longer valid. You will need to refer to the privacy policy
        of that website to make yourself aware of their statement.
      </p>
    ),
  },
];

const PrivacyPolicySection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#02070F] text-white px-6 lg:px-8 py-16 lg:py-24">
      {/* Page Title */}
      <h1 className="font-stoke text-[clamp(38px,5vw,56px)] font-normal mb-10 lg:mb-14">
        Privacy &amp; Policy
      </h1>

      {/* Sections */}
      <div className="flex flex-col gap-10 lg:gap-14">
        {sections.map((section, index) => (
          <div key={index}>
            {/* Section Title */}
            <h2
              className="text-[clamp(14px,2vw,24px)] font-bold font-outfit mb-3"
              style={{
                color: section.color === "blue" ? "#4285F4" : "#ffffff",
              }}>
              {section.title}
            </h2>

            {/* Section Content */}
            <div className="flex flex-col gap-2 font-outfit font-light text-[clamp(12px,1.8vw,18px)]">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
