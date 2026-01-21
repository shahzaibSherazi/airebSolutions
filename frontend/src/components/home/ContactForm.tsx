// import contactImage from "@/assets/contact-image.png";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import checkIcon from "../../assets/icons/check.png";

// export default function ContactForm() {
//   const [phone, setPhone] = useState("");
//   const [showMobileForm, setShowMobileForm] = useState(false);

//   return (
//     <section className="bg-black text-white">
//       {/* ================= DESKTOP VIEW ================= */}
//       <div className="flex items-center justify-center px-[58px] pt-[123px] pb-[68px]">
//         <div className="w-full max-w-7xl grid grid-cols-2 gap-12 items-start">
//           <div className="flex flex-col gap-[92px]">
//             <h1 className="font-stoke font-normal text-[48px] leading-[64px]">
//               Make every pixel <br /> pay for itself!
//             </h1>

//             <Form phone={phone} setPhone={setPhone} />
//           </div>

//           <div className="hidden lg:flex justify-end">
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
//     </section>
//   );
// }

// /* ================= FORM ================= */
// function Form({ phone, setPhone }) {
//   return (
//     <div
//       style={{
//         background: "linear-gradient(180deg, #0B23C8 0%, #0B0B0B 100%)",
//       }}
//       className="w-full max-w-[537px] px-[9px] py-[10px] contactForm_edge relative">
//       {/* ✅ CORNER PRESERVED */}
//       <span className="contactForm_corner contactForm_bottom-right" />

//       <form className="px-[18px] py-[42px] space-y-[26px] bg-black">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           <Input label="Your Name" placeholder="Your Name*" />
//           <Input label="City" placeholder="City*" />
//         </div>

//         <Input label="Email" placeholder="Email Address*" />

//         <div>
//           <label className="text-sm opacity-80">Phone number</label>
//           <div className="mt-1 rounded-md bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue px-2 py-1">
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

//         <div>
//           <label className="text-sm opacity-80">Message</label>
//           <textarea
//             rows={4}
//             placeholder="Leave us a message..."
//             className="mt-1 w-full rounded-md bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue px-3 py-2 text-sm outline-none resize-none"
//           />
//         </div>

//         <div className="flex items-start gap-2 text-xs opacity-80">
//           <input type="checkbox" className="accent-neonBlue mt-1" />
//           <span>You agree to our friendly privacy policy.</span>
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-xl bg-primary py-3 text-sm font-semibold hover:brightness-110 transition">
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// /* ================= INPUT ================= */
// function Input({ label, placeholder }) {
//   return (
//     <div>
//       <label className="font-jakarta">{label}</label>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="mt-[6px] w-full rounded-[8px] bg-gradient-to-b from-neonBlueDark to-black border border-primary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-[14px] py-[10px] text-sm outline-none"
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
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.value}
//         </option>
//       ))}
//     </select>
//   );
// }

import { useState } from "react";
import contactImage from "@/assets/contact-image.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-black text-white">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="flex items-center justify-center px-4 sm:px-8 lg:px-[58px] pt-16 sm:pt-20 lg:pt-[123px] pb-12 sm:pb-16 lg:pb-[68px]">
        <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[92px]">
            <h1 className="font-serif font-normal text-[32px] sm:text-[40px] lg:text-[48px] leading-tight sm:leading-snug lg:leading-[64px]">
              Make every pixel <br /> pay for itself!
            </h1>

            <FormComponent phone={phone} setPhone={setPhone} />
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="w-full max-w-[370px] h-[500px] rounded-xl overflow-hidden">
              <img
                src={contactImage}
                alt="Contact"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FORM ================= */
function FormComponent({ phone, setPhone }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0B23C8 0%, #0B0B0B 100%)",
      }}
      className="w-full max-w-full lg:max-w-[537px] px-[9px] py-[10px] contactForm_edge relative">
      {/* ✅ CORNER PRESERVED */}
      <span className="contactForm_corner contactForm_bottom-right" />

      <div className="px-4 sm:px-[18px] py-8 sm:py-[42px] space-y-5 sm:space-y-[26px] bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <Input label="Your Name" placeholder="Your Name*" />
          <Input label="City" placeholder="City*" />
        </div>

        <Input label="Email" placeholder="Email Address*" />

        <div>
          <label className="text-sm opacity-80">Phone number</label>
          <div className="mt-1 rounded-md bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue px-2 py-1">
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

        <div>
          <label className="text-sm opacity-80">Message</label>
          <textarea
            rows={4}
            placeholder="Leave us a message..."
            className="mt-1 w-full rounded-md bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue px-3 py-2 text-sm outline-none resize-none"
          />
        </div>

        <div className="flex items-start gap-2 text-xs opacity-80">
          <input type="checkbox" className="accent-blue-500 mt-1" />
          <span>You agree to our friendly privacy policy.</span>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold hover:brightness-110 transition">
          Send Message
        </button>
      </div>
    </div>
  );
}

/* ================= INPUT ================= */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm sm:text-base">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-[6px] w-full rounded-[8px] bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] px-[14px] py-[10px] text-sm outline-none"
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
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
