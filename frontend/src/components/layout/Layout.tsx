import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import { gsapConfig } from "@/lib/gsap-config";

interface LayoutProps {
  children: ReactNode;
  enableSmoothScroll?: boolean;
}

const Layout = ({ children, enableSmoothScroll = false }: LayoutProps) => {
  useEffect(() => {
    if (enableSmoothScroll) {
      gsapConfig.init();
    }

    return () => {
      if (enableSmoothScroll) {
        gsapConfig.destroy();
      }
    };
  }, [enableSmoothScroll]);
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="">{children}</main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Layout;
