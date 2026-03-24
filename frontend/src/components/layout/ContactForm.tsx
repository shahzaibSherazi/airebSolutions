import { useState } from "react";
import contactImage from "@/assets/contact-image.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
/* ================= MAIN ================= */
export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section
      id="contact-form"
      className="bg-black text-white relative min-h-screen flex items-center">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="w-full flex items-center justify-between px-6 lg:px-8 py-16 lg:py-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h1 className="font-stoke font-normal text-[clamp(24px,4vw,48px)] leading-tight sm:leading-snug lg:leading-[64px]">
                Tell us about your project
              </h1>
            </motion.div>
            <FormComponent
              phone={phone}
              setPhone={setPhone}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>

          <div className="hidden lg:flex justify-end items-center">
            <div className=" overflow-hidden">
              <img
                src={contactImage}
                alt="Contact"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SUCCESS POPUP ================= */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </section>
  );
}

/* ================= FORM ================= */
function FormComponent({ phone, setPhone, onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    privacyAgreed: false,
  });

  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitForm = async () => {
    if (!form.fullName || !form.email) {
      alert("Please fill all required fields.");
      return;
    }

    if (!phone) {
      alert("Please enter phone number.");
      return;
    }

    if (!service) {
      alert("Please select a service.");
      return;
    }

    if (!form.privacyAgreed) {
      alert("Please agree to the privacy policy.");
      return;
    }

    setLoading(true);

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phoneNumber: phone,
      service: service,
      message: form.message.trim(),
      privacyAgreed: form.privacyAgreed,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        onSuccess();

        setForm({
          fullName: "",
          email: "",
          message: "",
          privacyAgreed: false,
        });

        setPhone("");
        setService("");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #629DFF 0%, #0B0B0B 100%)",
      }}
      className="w-full max-w-[576px] px-[9px] py-[10px] contact_form relative">
      <div className="px-3 sm:px-4 md:px-[18px] py-4 sm:py-6 md:py-8 space-y-3 sm:space-y-4 md:space-y-5 bg-black">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <Input
            label="Your Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your Name*"
          />
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address*"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs sm:text-sm opacity-80">Phone number</label>
          <div className="mt-1 rounded-md bg-gradient-to-b from-[#407BFF] to-primary border border-primary px-2 py-1">
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={setPhone}
              className="phone-input-custom"
              countrySelectComponent={CountrySelect}
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <ServiceDropdown value={service} onChange={setService} />

        {/* Message */}
        <div>
          <label className="text-xs sm:text-sm opacity-80">
            Project Details (optional)
          </label>
          <textarea
            rows={3}
            name="message"
            maxLength={1000}
            value={form.message}
            onChange={handleChange}
            placeholder="Leave us a message..."
            className="mt-1 w-full placeholder:text-[#F8F8F8] rounded-md bg-gradient-to-b from-[#407BFF] to-primary border border-primary px-3 py-2 text-xs sm:text-sm outline-none resize-none"
          />
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-2 text-[10px] sm:text-xs opacity-80">
          <input
            type="checkbox"
            name="privacyAgreed"
            checked={form.privacyAgreed}
            onChange={handleChange}
            className="accent-primary mt-0.5"
          />
          <span>You agree to our friendly privacy policy.</span>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={submitForm}
          disabled={loading}
          className="w-full rounded-xl bg-textColor hover:bg-primary hover:text-textColor text-black py-2.5 sm:py-3 text-xs sm:text-sm font-semibold font-outfit transition disabled:opacity-50">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
}

/* ================= SUCCESS MODAL ================= */
function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#0B0B0B] border border-neonBlue rounded-2xl px-6 sm:px-8 py-8 sm:py-10 text-center w-full max-w-[420px]">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Message Sent Successfully 🎉
        </h2>
        <p className="text-xs sm:text-sm opacity-80 mb-6">
          Thank you for contacting Aireb Solutions. Our team will get back to
          you shortly.
        </p>
        <button
          onClick={onClose}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold hover:brightness-110 transition">
          Close
        </button>
      </div>
    </div>
  );
}

/* ================= INPUT ================= */
function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-xs sm:text-sm">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 w-full text-[#F8F8F8] placeholder:text-[#F8F8F8] rounded-[8px] bg-gradient-to-b from-[#407BFF] to-primary border border-primary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-3 sm:px-[14px] py-2 sm:py-[10px] text-xs sm:text-sm outline-none"
      />
    </div>
  );
}

/* ================= COUNTRY SELECT ================= */
function CountrySelect({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="custom-country-select">
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

/* ================= SERVICE DROPDOWN ================= */
function ServiceDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const services = [
    "Web Application Development",
    "Mobile App Development",
    "UI / UX Design",
    "E-commerce Development",
    "Custom Software Solutions",
  ];

  return (
    <div className="relative select-none">
      <label className="text-xs sm:text-sm">Select Service</label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-1 w-full flex items-center justify-between text-left rounded-[8px]
        bg-gradient-to-b from-[#407BFF] to-primary border border-primary
        px-3 sm:px-[14px] py-2 sm:py-[10px] text-xs sm:text-sm text-[#F8F8F8] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
        focus:outline-none">
        <span className={value ? "text-white" : "text-[#F8F8F8]"}>
          {value || "Choose a service"}
        </span>

        {/* Right Icon */}
        <svg
          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-xl bg-[#0B0B0B] border border-primary overflow-hidden shadow-xl max-h-60 overflow-y-auto">
          {services.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm text-white hover:bg-blue-600/20 transition">
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
