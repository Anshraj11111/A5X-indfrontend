import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useGsapSlideIn(selector) {
  useEffect(() => {
    gsap.utils.toArray(selector).forEach(el => {
      gsap.fromTo(el,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "restart none none reverse", // 👈 MAGIC LINE
          },
        }
      );
    });
  }, [selector]);
}
