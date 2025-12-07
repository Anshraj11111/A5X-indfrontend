import { motion } from "framer-motion";

export default function AgencyPage() {
  const whatsappNumber = "917389391711"; // replace with your number (country code + number)
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I would like to discuss an agency project"
  )}`;

  const tiles = [
    {
      title: "Product Strategy & Roadmap",
      desc:
        "We help hardware+software teams define product-market fit, prioritize features and build a phased roadmap that balances speed with robustness.",
      bullets: [
        "Discovery workshops & stakeholder interviews",
        "Technical feasibility and risk assessment",
        "Roadmap with measurable milestones",
      ],
    },
    {
      title: "Design & UX for Robotics",
      desc:
        "Operator-focused dashboards, field UIs and mobile apps designed for reliability and low cognitive load during high-pressure operations.",
      bullets: [
        "Dashboard UX & visual telemetry",
        "Prototyping + usability testing with real operators",
        "Design systems for cross-platform consistency",
      ],
    },
    {
      title: "Systems Engineering & Integration",
      desc:
        "Embedded firmware, cloud APIs and controls engineering — we design the interfaces that let hardware and software work together reliably at scale.",
      bullets: [
        "Embedded + cloud architecture",
        "Telemetry, OTA and observability",
        "CI/CD for hardware-in-the-loop testing",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Basic Starter",
      price: "₹5,999",
      period: "/month",
      features: [
        "1-page landing website",
        "4 posts",
        "2 reels",
        "Basic automation",
        "Basic report",
      ],
    },
    {
      name: "Growth Boost",
      price: "₹11,999",
      period: "/month",
      popular: true,
      features: [
        "3-page website",
        "8 posts",
        "4 reels",
        "CRM + WhatsApp automation",
        "1 platform handling",
        "Monthly report",
      ],
    },
    {
      name: "Premium Dominator",
      price: "₹19,999",
      period: "/month",
      features: [
        "5-page branded website",
        "12–15 posts",
        "8 reels/vlogs",
        "Full automation suite",
        "Multi-platform handling",
        "Paid ad campaign setup",
        "Analytics dashboard",
      ],
    },
  ];

  const addOns = [
    { name: "Google My Business Setup", price: "₹2,499" },
    { name: "Paid Ad Management", price: "₹3,000/month (ad budget extra)" },
    { name: "Professional Video Shoot", price: "₹4,999 per session" },
    { name: "Business Logo & Branding Kit", price: "₹2,999" },
    { name: "Chatbot Integration", price: "₹1,499" },
  ];

  return (
    <main className="pt-24 bg-[#020409] text-white min-h-screen">
      <section className="relative bg-[#041018] py-20 md:py-28 border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#0ff] mb-4">Agency</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto">
            Full-service Robotics & Tech Agency
          </h1>
          <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Product strategy, operator-first UX, and systems engineering to bring robotics and automation products to market.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#050812]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiles.map((t) => (
              <motion.article
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="h-full flex flex-col rounded-2xl bg-gradient-to-br from-[#0a1420] to-[#020409] border border-[#0ff]/20 p-8 hover:border-[#0ff]/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300"
              >
                <div className="text-[#0ff] text-xs uppercase tracking-[0.3em] font-bold">Service</div>
                <h3 className="mt-5 text-xl md:text-2xl font-bold leading-snug">{t.title}</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed flex-grow">{t.desc}</p>

                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#0ff] flex-shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-[#06f] to-[#0ff] text-black font-semibold text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
                  aria-label={`Contact about ${t.title} on WhatsApp`}
                >
                  Contact on WhatsApp
                </a>
              </motion.article>
            ))}
          </div>

          {/* ========= PRICING SECTION ========= */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Monthly Packages
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              Choose the perfect plan to grow your online presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`h-full flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
                    tier.popular
                      ? "border-[#0ff] bg-gradient-to-br from-[#0a1f2e] to-[#020409] shadow-[0_0_40px_rgba(0,255,255,0.25)] hover:shadow-[0_0_50px_rgba(0,255,255,0.35)]"
                      : "border-[#0ff]/20 bg-gradient-to-br from-[#0a1420] to-[#020409] hover:border-[#0ff]/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
                  }`}
                >
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-black bg-[#0ff] px-4 py-1.5 rounded-full font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold leading-snug">{tier.name}</h3>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-[#0ff]">{tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.period}</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-gray-300 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#0ff] flex-shrink-0" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#06f] to-[#0ff] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]"
                        : "bg-[#0ff]/10 text-[#0ff] border border-[#0ff]/30 hover:bg-gradient-to-r hover:from-[#06f] hover:to-[#0ff] hover:text-black hover:scale-105"
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ========= ADD-ONS SECTION ========= */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Optional Add-On Services
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              Enhance your package with premium add-ons tailored to your needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {addOns.map((addon) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col rounded-xl bg-gradient-to-br from-[#0a1420] to-[#020409] border border-[#0ff]/15 p-6 hover:border-[#0ff]/60 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300"
                >
                  <h4 className="font-bold text-center text-sm md:text-base leading-snug flex-grow flex items-center">{addon.name}</h4>
                  <p className="mt-4 text-[#0ff] font-extrabold text-xl text-center">{addon.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 max-w-2xl mx-auto">
              Prefer a quick call? Reach us at <a href="tel:+919876543210" className="text-[#0ff]">+91 8269858259</a> or start a chat on WhatsApp.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href={`tel:+918269858259`}
                className="px-6 py-3 rounded-full border border-[#0ff] text-[#0ff] hover:bg-[#0ff1] transition"
                aria-label="Call us"
              >
                Call Us
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#0ff] text-black font-semibold hover:scale-105 transition"
                aria-label="WhatsApp chat"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


