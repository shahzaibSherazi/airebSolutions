import contactImage from "@/assets/contact-image.png"; // <-- your image

export default function ContactForm() {
  return (
    <section className=" bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-[14vh]">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-serif font-normal leading-tight">
            Make every pixel <br /> pay for itself!
          </h1>

          {/* Form Container */}
          <div className="w-full max-w-[420px]  border-4 border-neonBlue  p-6">
            <form className="space-y-4">
              {/* Name & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input label="Your Name" placeholder="Your Name*" />
                <Input label="City" placeholder="City*" />
              </div>

              {/* Email */}
              <Input label="Email" placeholder="Email Address*" />

              {/* Phone */}
              <div>
                <label className="text-sm opacity-80">Phone number</label>
                <div className="mt-1 flex items-center rounded-md bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue shadow-neonSoft">
                  <span className="px-3 text-sm opacity-80 whitespace-nowrap">
                    US ▼
                  </span>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-transparent px-2 py-2 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm opacity-80">Message</label>
                <textarea
                  placeholder="Leave us a message..."
                  rows={4}
                  className="mt-1 w-full rounded-md bg-gradient-to-b from-black to-neonBlueDark border border-neonBlue shadow-neonSoft px-3 py-2 text-sm outline-none resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 text-xs opacity-80">
                <input type="checkbox" className="accent-neonBlue mt-1" />
                <span>You agree to our friendly privacy policy.</span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold hover:brightness-110 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (Only on large screens) */}
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
    </section>
  );
}

/* Input Component */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm opacity-80">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 w-full rounded-md bg-gradient-to-b from-neonBlueDark to-black border border-neonBlue shadow-neonSoft px-3 py-2 text-sm outline-none"
      />
    </div>
  );
}
