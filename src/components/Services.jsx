// frontend/src/components/Services.jsx
import useGsapServicesCards from "../hooks/useGsapServicesCards";

const services = [
  {
    title: "Automation Solutions",
    desc: "Sensors, PLCs, embedded control & full robotic systems — we design end-to-end automation.",
    tag: "Industrial",
  },
  {
    title: "Website Development",
    desc: "Fast, secure and animated websites, dashboards, landing pages & custom technical portals.",
    tag: "Digital",
  },
  {
    title: "Social Media Engagement",
    desc: "Tech-centric content, brand engineering and campaigns designed for robotics audiences.",
    tag: "Branding",
  },
];

export default function Services() {
  // hook runs automatically
  useGsapServicesCards(".service-card");

  return (
    <section className="bg-[#050608] text-white py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <p className="text-sm tracking-[0.35em] text-[#0ff] uppercase mb-3">
          Services
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Engineering + Digital solutions
          <span className="block text-gray-400 text-xl md:text-2xl mt-2">
            Built for robotics, automation & tech brands.
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s => (
            <div
              key={s.title}
              className="service-card opacity-0 translate-y-[40px]
                         relative p-8 rounded-2xl cursor-pointer
                         border border-white/10 select-none
                         bg-gradient-to-br from-[#0c0f13] to-[#050506]
                         hover:shadow-[0_0_45px_#0ff3]
                         transition-all duration-300"
            >
              <span className="text-[12px] uppercase tracking-[0.25em] text-[#0ff]">
                {s.tag}
              </span>

              <h3 className="mt-3 text-xl md:text-2xl font-semibold">
                {s.title}
              </h3>

              <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
                {s.desc}
              </p>

              <button className="mt-6 text-sm font-medium text-[#0ff] hover:text-white hover:underline">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
