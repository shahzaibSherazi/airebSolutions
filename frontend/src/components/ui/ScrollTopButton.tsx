import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScrollTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // hide on hero (top section)
      if (scrollY < 600) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={handleScrollTop}
      className={` group
        fixed right-6 bottom-1 -translate-y-1/2
        w-12 h-12 rounded-full border border-white/40
        flex items-center justify-center text-white
        hover:bg-white hover:text-black transition-all z-[999]
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}
      `}>
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-2 transition-all duration-300" />
    </button>
  );
};

export default ScrollTopButton;
