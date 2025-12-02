import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapServicesCards(containerClass = ".service-card") {
  useLayoutEffect(() => {
    const cards = document.querySelectorAll(containerClass);

    if (!cards.length) return;

    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        }),

      onLeave: batch =>
        gsap.to(batch, {
          opacity: 0,
          y: 40,
          duration: 0.5,
        }),

      onEnterBack: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
        }),

      onLeaveBack: batch =>
        gsap.to(batch, {
          opacity: 0,
          y: -40,
          duration: 0.4,
        }),
    });

    return () => ScrollTrigger.killAll();
  }, []);
}
