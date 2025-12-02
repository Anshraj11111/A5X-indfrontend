import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapContactCTA() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {

      // Split lines
      const title = new SplitType(".cta-title", { types: "lines" });
      gsap.from(title.lines, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      const sub = new SplitType(".cta-subtext", { types: "lines" });
      gsap.from(sub.lines, {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          toggleActions: "play none none none",
        }
      });

      // 👇 Buttons visible forever
      gsap.from(".cta-btn", {
        scale: 0.85,
        y: 18,
        duration: 0.45,
        ease: "back.out(1.4)",
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 84%",
          toggleActions: "play none none none",
        }
      });

      gsap.from(".cta-point", {
        opacity: 0,
        y: 14,
        duration: 0.4,
        stagger: 0.12,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          toggleActions: "play none none none",
        }
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
