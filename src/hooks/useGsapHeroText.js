import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapHeroText() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // SPLIT ALL TEXT
      // Only split the first line (non-gradient) to avoid breaking bg-clip text
      const title = new SplitType(".hero-title span:first-child", { types: "chars" });
      const subtitle = new SplitType(".hero-subtext", { types: "words" });

      // TITLE ANIMATION (letters stagger)
      gsap.from(title.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.03,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true
        }
      });

      // SUBTITLE
      gsap.from(subtitle.words, {
        opacity: 0,
        y: 25,
        stagger: 0.05,
        duration: 0.9,
        delay: 0.2,
        ease: "power2.out",
      });

      // Buttons and stats use CSS for appearance to avoid flash/hide issues.
      // Keep animations for title/subtitle only to prevent interfering with CTA visibility.

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
