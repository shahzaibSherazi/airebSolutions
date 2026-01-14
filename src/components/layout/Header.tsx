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
            <img src={logo} alt="Logo" className="max-sm:w-36"
            />
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
                  <span className="text-lg leading-3 group-hover:text-white tracking-wide">CONTACT</span>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
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