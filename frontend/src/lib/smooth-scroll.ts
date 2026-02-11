// import Lenis from "@studio-freight/lenis";

// class SmoothScroll {
//   private lenis: Lenis | null = null;
//   private animationFrameId: number | null = null;

//   // Default configuration
//   private defaultConfig = {
//     duration: 1.2,
//     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     smoothWheel: true,
//     wheelMultiplier: 1,
//     smoothTouch: false,
//     touchMultiplier: 2,
//     infinite: false,
//   };

//   // Initialize smooth scrolling
//   init(customConfig = {}) {
//     // Check for accessibility preferences
//     if (this.shouldSkipSmoothScroll()) return null;

//     // Merge custom config with defaults
//     const config = { ...this.defaultConfig, ...customConfig };

//     // Create Lenis instance
//     this.lenis = new Lenis(config);

//     // Start animation frame
//     this.startRaf();

//     return this.lenis;
//   }

//   // Start requestAnimationFrame loop
//   private startRaf() {
//     if (!this.lenis) return;

//     const raf = (time: number) => {
//       this.lenis!.raf(time);
//       this.animationFrameId = requestAnimationFrame(raf);
//     };

//     this.animationFrameId = requestAnimationFrame(raf);
//   }

//   // Check if we should skip smooth scrolling (accessibility)
//   private shouldSkipSmoothScroll(): boolean {
//     return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   }

//   // Get Lenis instance
//   getInstance() {
//     return this.lenis;
//   }

//   // Scroll to a target
//   scrollTo(target: string | HTMLElement | number, options?: any) {
//     if (this.lenis) {
//       this.lenis.scrollTo(target, options);
//     }
//   }

//   // Force update - useful after DOM changes
//   forceUpdate() {
//     // Lenis doesn't have an update method, so we need to recalculate
//     if (this.lenis) {
//       // You can resize the instance to force recalc
//       window.dispatchEvent(new Event("resize"));
//     }
//   }

//   // Resize handler (call this on window resize)
//   resize() {
//     if (this.lenis) {
//       // Lenis handles resize internally, but you can trigger it
//       this.lenis.resize();
//     }
//   }

//   // Stop and clean up
//   destroy() {
//     if (this.animationFrameId) {
//       cancelAnimationFrame(this.animationFrameId);
//       this.animationFrameId = null;
//     }

//     if (this.lenis) {
//       this.lenis.destroy();
//       this.lenis = null;
//     }
//   }
// }

// // Export singleton instance
// export const smoothScroll = new SmoothScroll();

import Lenis from "@studio-freight/lenis";

class SmoothScroll {
  private lenis: Lenis | null = null;

  init(config = {}) {
    if (this.lenis) return this.lenis;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return null;
    }

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      ...config,
    });

    return this.lenis;
  }

  raf(time: number) {
    this.lenis?.raf(time);
  }

  destroy() {
    this.lenis?.destroy();
    this.lenis = null;
  }

  getInstance() {
    return this.lenis;
  }
}

export const smoothScroll = new SmoothScroll();
