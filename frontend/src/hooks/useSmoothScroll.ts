import { useEffect } from "react";
import { smoothScroll } from "@/lib/smooth-scroll";
import { gsapConfig } from "@/lib/gsap-config";

type UseSmoothScrollOptions = {
  enableGsap?: boolean;
  lenisConfig?: any;
};

export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const { enableGsap = false, lenisConfig = {} } = options;

  useEffect(() => {
    // Initialize smooth scrolling
    smoothScroll.init(lenisConfig);

    // Initialize GSAP if enabled
    if (enableGsap) {
      gsapConfig.init();
    }

    // Add resize listener
    const handleResize = () => {
      smoothScroll.resize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      smoothScroll.destroy();
      if (enableGsap) {
        gsapConfig.destroy();
      }
    };
  }, [enableGsap, lenisConfig]);

  // Return utilities for programmatic control
  return {
    scrollTo: smoothScroll.scrollTo.bind(smoothScroll),
    forceUpdate: smoothScroll.forceUpdate.bind(smoothScroll),
    resize: smoothScroll.resize.bind(smoothScroll),
    getInstance: smoothScroll.getInstance.bind(smoothScroll),
    getGsap: gsapConfig.getGsap.bind(gsapConfig),
    getScrollTrigger: gsapConfig.getScrollTrigger.bind(gsapConfig),
    refreshScrollTrigger: gsapConfig.refreshAll.bind(gsapConfig),
  };
};
