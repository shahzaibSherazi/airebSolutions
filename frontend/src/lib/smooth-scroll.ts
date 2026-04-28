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
