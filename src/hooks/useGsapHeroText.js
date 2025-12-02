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
      const title = new SplitType(".hero-title", { types: "chars" });
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

      // BUTTON
      gsap.from(".hero-btn", {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        delay: 0.6,
        ease: "back.out(1.6)",
      });

      // STATS
      gsap.from(".hero-stat", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.2,
        delay: 0.2,
        ease: "power2.out",
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
