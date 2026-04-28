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

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    privacyAgreed: "",
  });
  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    clearError(name);
  };

  const submitForm = async () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      privacyAgreed: "",
    };

    let hasError = false;

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      hasError = true;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
      hasError = true;
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
      hasError = true;
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Invalid phone number";
      hasError = true;
    }

    if (!service) {
      newErrors.service = "Please select a service";
      hasError = true;
    }

    if (!form.privacyAgreed) {
      newErrors.privacyAgreed = "You must agree to privacy policy";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      privacyAgreed: "",
    });

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phoneNumber", phone);
      formData.append("service", service);
      formData.append("message", form.message);
      formData.append("privacyAgreed", String(form.privacyAgreed));

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
            error={errors.fullName}
          />

          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address*"
            error={errors.email}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs sm:text-sm text-white">Phone number</label>
          <div
            className={`mt-1 rounded-md bg-[#0E2142] border px-2 py-1 ${
              errors.phone ? "border-red-500" : "border-primary"
            }`}>
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                clearError("phone");
              }}
              className="phone-input-custom"
              countrySelectComponent={CountrySelect}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-[11px] sm:text-xs mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Service Dropdown */}
        <div>
          <ServiceDropdown
            value={service}
            onChange={(value) => {
              setService(value);
              clearError("service");
            }}
            error={errors.service}
          />
          {errors.service && (
            <p className="text-red-500 text-[11px] sm:text-xs mt-1">
              {errors.service}
            </p>
          )}
        </div>
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
        <div>
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
          {errors.privacyAgreed && (
            <p className="text-red-500 text-[11px] sm:text-xs mt-1">
              {errors.privacyAgreed}
            </p>
          )}
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

function Input({ label, name, value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="text-xs sm:text-sm">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 w-full bg-[#0E2142] text-[#F8F8F8] placeholder:text-[#F8F8F8] rounded-[8px] border px-3 sm:px-[14px] py-2 sm:py-[10px] text-xs sm:text-sm outline-none transition ${
          error ? "border-red-500" : "border-primary"
        }`}
      />
      {error && (
        <p className="text-red-500 text-[11px] sm:text-xs mt-1">{error}</p>
      )}
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
function ServiceDropdown({ value, onChange, error }) {
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
        className={`mt-1 w-full flex items-center justify-between text-left rounded-[8px]
bg-[#0E2142] border
px-3 sm:px-[14px] py-2 sm:py-[10px] text-xs sm:text-sm text-[#F8F8F8]
focus:outline-none ${error ? "border-red-500" : "border-primary"}`}>
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
