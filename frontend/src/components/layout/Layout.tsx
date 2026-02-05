import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className=" ">{children}</main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Layout;
