import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/aireb_logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="px-3 z-10">
      <nav className="container mx-auto px-1 sm:!px-2 lg:px-12">
        <div className="flex items-start justify-between h-36 pt-8">
          {/* Mobile Menu Button */}
          {/* <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          > */}
          {/* <button
            className="text-foreground p-2 "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}

          {/* Button */}
          <Button asChild className="max-sm:size-sm">
            <Link to="/contact">
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
              <span className="group-hover:text-white tracking-wide">MENU</span>
            </Link>
          </Button>

          {/* Logo */}
          {/* <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">DesignCo</span>
          </Link> */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="max-sm:w-36" />
          </Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div> */}

          {/* CTA Button */}
          {/* <div className="hidden md:block"> */}
          {/* Button */}
          <Button asChild className="max-sm:hidden">
            <Link to="/contact">
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-black rounded-full z-50 group-hover:bg-white"></span>
              <span className="text-lg leading-3 group-hover:text-white tracking-wide">
                CONTACT
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          // <div className="md:hidden py-6 animate-fade-in border-t border-border">
          <div className="py-6 animate-fade-in border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base font-medium transition-colors py-2",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              {/* <Button asChild className="mt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { X } from "lucide-react";
// import logo from "@/assets/aireb_logo.png";
// import btnIcon from "@/assets/icons/btn_icon.png";

// const leftMenu = ["Home", "Services", "Industries", "Resources", "About Us"];

// const services = Array.from(
//   { length: 12 },
//   () => "Expert Web Development Services"
// );

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setMenuOpen(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <header className="relative z-40">
//       {/* TOP BAR */}
//       <div className="container mx-auto px-4 lg:px-12">
//         <div className="flex items-start justify-between h-36 pt-8">
//           {/* MENU BUTTON */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className={`relative  px-6 py-2 text-sm tracking-wide ${
//               menuOpen ? "bg-primary text-white" : "bg-white text-black"
//             } `}>
//             MENU
//             <span className="absolute top-2 right-2 size-1.5 bg-black rounded-full" />
//           </button>

//           {/* LOGO */}
//           <Link to="/" className="flex items-center">
//             <img src={logo} alt="Aireb Solutions" className="max-sm:w-36" />
//           </Link>

//           {/* CONTACT BUTTON */}
//           <Link
//             to="/contact"
//             className="hidden sm:flex relative bg-white text-black px-6 py-2 text-sm tracking-wide">
//             CONTACT
//             <span className="absolute top-2 right-2 size-1.5 bg-black rounded-full" />
//           </Link>
//         </div>
//       </div>

//       {/* MEGA MENU OVERLAY */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
//           <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-xl bg-gradient-to-r from-[#050b2e] to-[#0B23C8] p-10">
//             {/* CLOSE */}
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="absolute top-6 right-6 text-white">
//               <X size={28} />
//             </button>

//             {/* GRID */}
//             <div className="grid grid-cols-12 gap-10 text-white">
//               {/* LEFT NAV */}
//               <div className="col-span-3 flex flex-col gap-6">
//                 {leftMenu.map((item) => (
//                   <button
//                     key={item}
//                     className={`text-left px-4 py-2 rounded-md transition ${
//                       item === "Services" ? "bg-blue-600" : "hover:bg-white/10"
//                     }`}>
//                     {item}
//                   </button>
//                 ))}

//                 <Link
//                   to="/contact"
//                   className="mt-8 flex items-center gap-2 bg-blue-600 px-4 py-2 w-fit">
//                   CONTACT
//                   <img src={btnIcon} alt="" className="w-3 h-3" />
//                 </Link>
//               </div>

//               {/* SERVICES GRID */}
//               <div className="col-span-7 grid grid-cols-3 gap-y-6 text-sm">
//                 {services.map((service, i) => (
//                   <p key={i} className="cursor-pointer hover:underline">
//                     {service}
//                   </p>
//                 ))}
//               </div>

//               {/* ENGAGEMENT MODELS */}
//               <div className="col-span-2 border-l border-white/30 pl-6">
//                 <p className="font-medium mb-4">Engagement Models</p>

//                 <div className="flex flex-col gap-3 text-xs">
//                   <span className="bg-blue-600 px-3 py-1 rounded">
//                     Project Based Delivery
//                   </span>
//                   <span className="border border-white px-3 py-1 rounded">
//                     Dedicated Team
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
