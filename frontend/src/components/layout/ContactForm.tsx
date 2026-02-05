// import { useState } from "react";
// import contactImage from "@/assets/contact-image.png";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// /* ================= MAIN ================= */
// export default function ContactForm() {
//   const [phone, setPhone] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);

//   return (
//     <section className="bg-black text-white relative">
//       {/* ================= DESKTOP VIEW ================= */}
//       <div className=" flex items-center justify-center px-4 sm:px-8 lg:px-[58px] pt-16 sm:pt-20 lg:pt-[123px] pb-12 sm:pb-16 lg:pb-[68px]">
//         <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[92px]">
//             <h1 className="font-stoke font-normal text-[32px] sm:text-[40px] lg:text-[48px] leading-tight sm:leading-snug lg:leading-[64px]">
//               Make every pixel <br /> pay for itself!
//             </h1>

//             <FormComponent
//               phone={phone}
//               setPhone={setPhone}
//               onSuccess={() => setShowSuccess(true)}
//             />
//           </div>

//           <div className="hidden lg:flex justify-end items-center h-full">
//             <div className="w-full max-w-[370px] h-[500px] rounded-xl overflow-hidden">
//               <img
//                 src={contactImage}
//                 alt="Contact"
//                 className="w-full h-full object-fill"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= SUCCESS POPUP ================= */}
//       {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
//     </section>
//   );
// }

// /* ================= FORM ================= */
// function FormComponent({ phone, setPhone, onSuccess }) {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//     privacyAgreed: false,
//   });

//   const [service, setService] = useState("");

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const submitForm = async () => {
//     if (!form.privacyAgreed) {
//       alert("Please agree to the privacy policy.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/contact/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: form.fullName,
//           email: form.email,
//           phoneNumber: phone,
//           service,
//           message: form.message,
//           privacyAgreed: form.privacyAgreed,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         onSuccess();
//         setForm({
//           fullName: "",
//           email: "",
//           message: "",
//           privacyAgreed: false,
//         });
//         setPhone("");
//         setService("");
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Server error. Please try later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         background: "linear-gradient(180deg, #629DFF 0%, #0B0B0B 100%)",
//       }}
//       className="w-full max-w-full lg:max-w-[537px] px-[9px] py-[10px] contact_form  relative">
//       {/* <span className="contactForm_corner contactForm_bottom-right" /> */}

//       <div className="px-4 sm:px-[18px] py-8 sm:py-[42px] space-y-5 sm:space-y-[26px] bg-black">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//           <Input
//             label="Your Name"
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             placeholder="Your Name*"
//           />
//           <Input
//             label="Email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email Address*"
//           />
//         </div>

//         <div>
//           <label className="text-sm opacity-80">Phone number</label>
//           <div className="mt-1 rounded-md bg-gradient-to-b from-[#407BFF] to-primary border border-primary px-2 py-1">
//             <PhoneInput
//               international
//               defaultCountry="US"
//               value={phone}
//               onChange={setPhone}
//               className="phone-input-custom"
//               countrySelectComponent={CountrySelect}
//             />
//           </div>
//         </div>

//         <ServiceDropdown value={service} onChange={setService} />

//         <div>
//           <label className="text-sm opacity-80">
//             Project Details (optional)
//           </label>
//           <textarea
//             rows={4}
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Leave us a message..."
//             className="mt-1 w-full placeholder:text-[#F8F8F8] rounded-md bg-gradient-to-b from-[#407BFF] to-primary border border-primary px-3 py-2 text-sm outline-none resize-none"
//           />
//         </div>

//         <div className="flex items-start gap-2 text-xs opacity-80">
//           <input
//             type="checkbox"
//             name="privacyAgreed"
//             checked={form.privacyAgreed}
//             onChange={handleChange}
//             className="accent-primary mt-1"
//           />
//           <span>You agree to our friendly privacy policy.</span>
//         </div>

//         <button
//           type="button"
//           onClick={submitForm}
//           disabled={loading}
//           className="w-full rounded-xl bg-textColor hover:bg-primary hover:text-textColor text-black py-3 text-sm font-semibold font-outfit  transition disabled:opacity-50">
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ================= SUCCESS MODAL ================= */
// function SuccessModal({ onClose }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//       <div className="bg-[#0B0B0B] border border-neonBlue rounded-2xl px-8 py-10 text-center w-[90%] max-w-[420px]">
//         <h2 className="text-2xl font-semibold mb-3">
//           Message Sent Successfully 🎉
//         </h2>
//         <p className="text-sm opacity-80 mb-6">
//           Thank you for contacting Aireb Solutions. Our team will get back to
//           you shortly.
//         </p>
//         <button
//           onClick={onClose}
//           className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold hover:brightness-110 transition">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ================= INPUT ================= */
// function Input({ label, name, value, onChange, placeholder }) {
//   return (
//     <div>
//       <label className="text-sm sm:text-base">{label}</label>
//       <input
//         type="text"
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="mt-[6px] w-full text-[#F8F8F8] placeholder:text-[#F8F8F8] rounded-[8px] bg-gradient-to-b from-[#407BFF] to-primary border border-primary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-[14px] py-[10px] text-sm outline-none"
//       />
//     </div>
//   );
// }

// /* ================= COUNTRY SELECT ================= */
// function CountrySelect({ value, onChange, options }) {
//   return (
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="custom-country-select">
//       {options.map((option, i) => (
//         <option key={i} value={option.value}>
//           {option.value}
//         </option>
//       ))}
//     </select>
//   );
// }

// function ServiceDropdown({ value, onChange }) {
//   const [open, setOpen] = useState(false);

//   const services = [
//     "Web Application Development",
//     "Mobile App Development",
//     "UI / UX Design",
//     "E-commerce Development",
//     "Custom Software Solutions",
//   ];

//   return (
//     <div className="relative">
//       <label className="text-sm sm:text-base">Select Service</label>

//       {/* Trigger */}
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="mt-[6px] w-full flex items-center justify-between text-left rounded-[8px]
//         bg-gradient-to-b from-[#407BFF] to-primary border border-primary
//         px-[14px] py-[10px] text-sm text-[#F8F8F8] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]
//         focus:outline-none">
//         <span className={value ? "text-white" : "text-[#F8F8F8]"}>
//           {value || "Choose a service"}
//         </span>

//         {/* Right Icon */}
//         <svg
//           className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute z-20 mt-2 w-full rounded-xl bg-[#0B0B0B] border border-primary overflow-hidden shadow-xl">
//           {services.map((item, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => {
//                 onChange(item);
//                 setOpen(false);
//               }}
//               className="w-full px-4 py-3 text-left text-sm text-white hover:bg-blue-600/20 transition">
//               {item}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import contactImage from "@/assets/contact-image.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

/* ================= MAIN ================= */
export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="bg-black text-white relative min-h-screen flex items-center">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="w-full flex items-center justify-center px-4 sm:px-8 lg:px-[58px] py-8 sm:py-12 lg:py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
            <h1 className="font-stoke font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-snug lg:leading-[64px]">
              Make every pixel <br /> pay for itself!
            </h1>

            <FormComponent
              phone={phone}
              setPhone={setPhone}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>

          <div className="hidden lg:flex justify-end items-center">
            <div className="w-full max-w-[370px] h-[400px] xl:h-[500px] rounded-xl overflow-hidden">
              <img
                src={contactImage}
                alt="Contact"
                className="w-full h-full object-fill"
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
    if (!form.privacyAgreed) {
      alert("Please agree to the privacy policy.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phoneNumber: phone,
          service,
          message: form.message,
          privacyAgreed: form.privacyAgreed,
        }),
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
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
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
      className="w-full max-w-full lg:max-w-[537px] px-[9px] py-[10px] contact_form relative">
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
    <div className="relative">
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
