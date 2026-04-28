import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoothScroll } from "./smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

class GsapConfig {
  private cleanup?: () => void;

  init() {
    const lenis = smoothScroll.init();
    if (!lenis) return;

    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    this.cleanup = () => {
      lenis.off("scroll", update);
      gsap.ticker.remove(ticker);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      smoothScroll.destroy();
    };
  }

  destroy() {
    this.cleanup?.();
    this.cleanup = undefined;
  }
}

export const gsapConfig = new GsapConfig();
