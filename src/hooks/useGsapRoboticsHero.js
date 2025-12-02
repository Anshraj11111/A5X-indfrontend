import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapRoboticsHero() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitType(".robotics-title", { types: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 80,
        rotateX: -80,
        duration: 0.9,
        stagger: 0.03,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom top",
          toggleActions: "restart none none reverse", // 👈 IMPORTANT
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
