import { useRef, useState } from "react";
import { toast } from "sonner";
import contactImage from "@/assets/contact-image.webp";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
/* ================= MAIN ================= */
export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section
      id="contact-form"
      className="bg-black text-white relative  flex items-center">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="container w-full flex lg:flex-row justify-center lg:justify-between gap-8 py-16 lg:py-24">
        <div className="flex flex-col w-full md:max-w-[576px] gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h1 className="font-stoke font-normal text-h2 lg:text-start text-center leading-[1.3]">
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

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    privacyAgreed: "",
  });

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLButtonElement>(null);
  const privacyRef = useRef<HTMLInputElement>(null);
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

  // ================= SCROLL + FOCUS FUNCTION =================

  const scrollToError = (field) => {
    const refMap = {
      fullName: fullNameRef,
      email: emailRef,
      phone: phoneRef,
      service: serviceRef,
      privacyAgreed: privacyRef,
    };

    const targetRef = refMap[field];

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        targetRef.current?.focus?.();
      }, 400);
    }
  };

  const submitForm = async () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      privacyAgreed: "",
    };
    let firstErrorField = "";
    let hasError = false;

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      firstErrorField ||= "fullName";
      hasError = true;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      firstErrorField ||= "email";
      hasError = true;
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
      firstErrorField ||= "email";
      hasError = true;
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
      firstErrorField ||= "phone";
      hasError = true;
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Invalid phone number";
      firstErrorField ||= "phone";
      hasError = true;
    }

    if (!service) {
      newErrors.service = "Please select a service";
      firstErrorField ||= "service";
      hasError = true;
    }

    if (!form.privacyAgreed) {
      newErrors.privacyAgreed = "You must agree to privacy policy";
      firstErrorField ||= "privacyAgreed";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      // ================= AUTO SCROLL TO FIRST ERROR =================
      scrollToError(firstErrorField);
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

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phoneNumber: phone,
      service: service,
      message: form.message.trim(),
      privacyAgreed: form.privacyAgreed,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
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
      } else {
        toast.error(data.message || "Something went wrong.");
        console.log("error", data);
      }
    } catch (error) {
      console.log("error", error);
      console.error("Submit error:", error);
      toast.error("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #629DFF 0%, #0B0B0B 100%)",
      }}
      className="w-full md:max-w-[576px] px-[9px] py-[10px] contact_form relative">
      <div className="px-3 sm:px-4 md:px-[18px] py-4   bg-black">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <Input
            inputRef={fullNameRef}
            label="Your Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your Name*"
            error={errors.fullName}
          />

          <Input
            inputRef={emailRef}
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
            ref={phoneRef}
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
          <div className="min-h-[10px] mt-1">
            <p
              className={`text-red-500 text-[11px] sm:text-xs transition-opacity duration-200 ${
                errors.phone ? "opacity-100" : "opacity-0"
              }`}>
              {errors.phone || "placeholder"}
            </p>
          </div>
        </div>

        {/* Service Dropdown */}
        <div>
          <ServiceDropdown
            buttonRef={serviceRef}
            value={service}
            onChange={(value) => {
              setService(value);
              clearError("service");
            }}
            error={errors.service}
          />
          <div className="min-h-[10px] mt-1">
            <p
              className={`text-red-500 text-[11px] sm:text-xs transition-opacity duration-200 ${
                errors.service ? "opacity-100" : "opacity-0"
              }`}>
              {errors.service || "placeholder"}
            </p>
          </div>
        </div>
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
        <div>
          <div className="flex items-start gap-2 text-[10px] sm:text-xs opacity-80">
            <input
              ref={privacyRef}
              type="checkbox"
              name="privacyAgreed"
              checked={form.privacyAgreed}
              onChange={handleChange}
              className="accent-primary mt-0.5"
            />
            <span>You agree to our friendly privacy policy.</span>
          </div>
          <div className="min-h-[10px] mb-1">
            <p
              className={`text-red-500 text-[11px] sm:text-xs transition-opacity duration-200 ${
                errors.privacyAgreed ? "opacity-100" : "opacity-0"
              }`}>
              {errors.privacyAgreed || "placeholder"}
            </p>
          </div>
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
function Input({ label, name, value, onChange, placeholder, error, inputRef }) {
  return (
    <div>
      <label className="text-xs sm:text-sm">{label}</label>
      <input
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 w-full bg-[#0E2142] text-[#F8F8F8] placeholder:text-[#F8F8F8] rounded-[8px] border px-3 sm:px-[14px] py-2 sm:py-[10px] text-xs sm:text-sm outline-none transition ${
          error ? "border-red-500" : "border-primary"
        }`}
      />
      <div className="min-h-[10px] mt-1">
        <p
          className={`text-red-500 text-[11px] sm:text-xs transition-opacity duration-200 ${
            error ? "opacity-100" : "opacity-0"
          }`}>
          {error || "placeholder"}
        </p>
      </div>
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
function ServiceDropdown({ value, onChange, error, buttonRef }) {
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
        ref={buttonRef}
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
