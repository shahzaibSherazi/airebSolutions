import { Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SelectIcon from "@/assets/contact-us/select-file.svg?react";
import { toast } from "sonner";

export default function ContactUsHero() {
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section
      id="contact-us"
      className="heros_height relative w-full flex items-center justify-center overflow-hidden  ">
      {/* Subtle bottom gradient */}
      <div
        style={{
          background: "linear-gradient(180deg, #02070F 40.26%, #102545 100%)",
        }}
        className="absolute inset-0 "
      />

      <div className="container relative z-10  w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-2 lg:px-8 py-6">
        {/* ───────── LEFT CONTENT ───────── */}
        <div className="">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary text-white font-outfit font-bold text-sm px-4 py-2 rounded-[5px] mb-8">
            <span className="w-2 h-2 bg-[#6FD3FF] rounded-full"></span>
            Accepting new projects
          </div>

          {/* Heading */}
          <h2 className="text-white font-stoke font-light text-[clamp(16px,4vw,42px)] leading-tight mb-6">
            Our Team is <br />
            <span className="font-extrabold font-outfit text-[clamp(18px,4.5vw,52px)]">
              Always ready.
            </span>
          </h2>

          {/* Description */}
          <p className="text-white font-outfit font-light text-[clamp(14px,2vw,20px)] leading-relaxed mb-10 max-w-md">
            Tell us about your company and project goals. Our team will review
            your details and get back to you with the next steps.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-start sm:items-center gap-6 text-white text-sm">
            <div className="flex items-center gap-2 font-outfit font-medium text-[clamp(14px,2vw,20px)]">
              <Mail size={16} className="text-[#6FD3FF]" />
              sales@airebsolutions.com
            </div>

            <div className="flex items-center gap-2 font-outfit font-medium text-[clamp(14px,2vw,20px)]">
              <Phone size={16} className="text-[#6FD3FF]" />
              +1 (307) 456-7721
            </div>
          </div>
        </div>

        <FormComponent
          phone={phone}
          setPhone={setPhone}
          onSuccess={() => setShowSuccess(true)}
        />
      </div>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </section>
  );
}

function FormComponent({ phone, setPhone, onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    privacyAgreed: false,
  });

  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitForm = async () => {
    if (!form.fullName || !form.email) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!isValidEmail(form.email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!phone) {
      toast.error("Please enter phone number.");
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      toast.error("Invalid phone number for selected country");
      return;
    }
    if (!service) {
      toast.error("Please select a service.");
      return;
    }

    if (!form.privacyAgreed) {
      toast.error("Please agree to the privacy policy.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phoneNumber", phone);
      formData.append("service", service);
      formData.append("message", form.message);
      formData.append("privacyAgreed", String(form.privacyAgreed));

      // ✅ optional file
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact/submit`,
        {
          method: "POST",
          body: formData, // ❗ no headers
        },
      );

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
        setFile(null); // reset file
      } else {
        toast.error("Network error. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0E2142] shrink-0 lg:max-w-[537px] px-[9px] py-[10px] contact_form relative">
      <div className="px-3 sm:px-4 md:px-[18px] py-[clamp(14px,2.8vh,32px)] space-y-[clamp(10px,1.8vh,24px)]">
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
          <label className="text-xs sm:text-sm text-white">Phone number</label>
          <div className="mt-1 rounded-md bg-[#0E2142] border border-primary px-2 py-1">
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
        <div className="relative">
          <label className="text-xs sm:text-sm text-white">
            Project Details (optional)
          </label>
          <textarea
            rows={3}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Leave us a message..."
            className="mt-1 w-full placeholder:text-[#F8F8F8] rounded-md bg-[#0E2142] border border-primary px-3 py-2 text-xs sm:text-sm outline-none resize-none"
          />
          <SelectIcon
            onClick={() => fileInputRef.current.click()}
            className="absolute top-10 right-3 w-4 h-4 opacity-80 cursor-pointer hover:opacity-100 transition"
          />{" "}
          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          {file && <p className="text-xs text-green-400">{file.name}</p>}
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
          className="w-full rounded-xl bg-primary hover:bg-white hover:text-black text-white py-2.5 sm:py-3 text-xs sm:text-sm font-semibold font-outfit transition disabled:opacity-50">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
}

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#0B0B0B] border border-neonBlue rounded-2xl px-6 sm:px-8 py-8 sm:py-10 text-center w-full max-w-[420px]">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Message Sent Successfully
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
        className="mt-1 w-full bg-[#0E2142] text-[#F8F8F8] placeholder:text-[#F8F8F8] rounded-[8px]  border border-primary px-3 sm:px-[14px] py-2 sm:py-[10px] text-xs sm:text-sm outline-none"
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
    <div className="relative">
      <label className="text-xs sm:text-sm">Select Service</label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-1 w-full flex items-center justify-between text-left rounded-[8px]
        bg-[#0E2142] border border-primary
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
