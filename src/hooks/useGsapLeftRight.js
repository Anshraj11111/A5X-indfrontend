import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useGsapFromLeft(selector) {
  useEffect(() => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(el,
        { x: -90, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "restart none none reverse",
          },
        }
      );
    });
  }, [selector]);
}

export function useGsapFromRight(selector) {
  useEffect(() => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(el,
        { x: 90, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "restart none none reverse",
          },
        }
      );
    });
  }, [selector]);
}
