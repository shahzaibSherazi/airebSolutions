import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoothScroll } from "./smooth-scroll";

class GsapConfig {
  private isInitialized = false;

  // Initialize GSAP with Lenis integration
  init() {
    if (this.isInitialized) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize smooth scroll first
    const lenis = smoothScroll.init();

    if (!lenis) {
      console.warn(
        "Smooth scroll not initialized (accessibility preference or error)",
      );
      return;
    }

    // Connect Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker for synchronization
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's lag smoothing for better sync
    gsap.ticker.lagSmoothing(0);

    // Update ScrollTrigger when window resizes
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
      smoothScroll.resize(); // Call resize on Lenis
    });

    this.isInitialized = true;
    console.log("GSAP with Lenis initialized successfully");
  }

  // Create a ScrollTrigger with Lenis integration
  createScrollTrigger(config: any) {
    if (!this.isInitialized) {
      console.warn("GSAP not initialized. Call init() first.");
      return null;
    }

    return ScrollTrigger.create({
      ...config,
      scroller: document.body, // Point to body since Lenis controls scrolling
    });
  }

  // Refresh all ScrollTriggers (useful after DOM changes)
  refreshAll() {
    ScrollTrigger.refresh();
  }

  // Clean up
  destroy() {
    if (this.isInitialized) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove((time) => {
        const lenis = smoothScroll.getInstance();
        if (lenis) lenis.raf(time * 1000);
      });

      smoothScroll.destroy();
      this.isInitialized = false;
    }
  }

  // Get ScrollTrigger instance
  getScrollTrigger() {
    return ScrollTrigger;
  }

  // Get GSAP instance
  getGsap() {
    return gsap;
  }
}

// Export singleton instance
export const gsapConfig = new GsapConfig();
