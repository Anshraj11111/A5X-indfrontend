import React from "react";
import {
  FaCheckCircle,
  FaTools,
  FaMicrochip,
  FaSchool,
  FaRobot,
} from "react-icons/fa";

export default function Lab() {
  return (
    <div className="min-h-screen bg-[#050A0E] text-white">
      {/* HERO */}
      <section className="border-b border-cyan-400/20 bg-gradient-to-b from-[#050A0E] via-[#061016] to-[#0B1E25] py-20">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            🧪 Robotics, Coding & IoT{" "}
            <span className="text-cyan-300">Foundation Lab</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-[#B8C6CC]">
            (Class 5 to 12 – Shared School Lab) <br />
            A complete shared, modular and cost-optimized lab setup designed for
            schools — with upgrade-ready planning.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-2xl bg-gradient-to-r from-cyan-300 to-cyan-200 px-5 py-3 font-bold text-[#050A0E]"
            >
              Get Lab Proposal
            </a>

            <a
              href="/projects"
              className="rounded-2xl border border-cyan-300/70 bg-transparent px-5 py-3 font-bold text-cyan-300"
            >
              See Projects
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-4 text-center">
              <h3 className="text-2xl font-extrabold text-cyan-300">₹50,000</h3>
              <p className="text-xs text-[#B8C6CC]">Total Lab Cost</p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-4 text-center">
              <h3 className="text-2xl font-extrabold text-cyan-300">5 - 12</h3>
              <p className="text-xs text-[#B8C6CC]">Supported Grades</p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-4 text-center">
              <h3 className="text-2xl font-extrabold text-cyan-300">8+</h3>
              <p className="text-xs text-[#B8C6CC]">Modules Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* LAB OVERVIEW */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            1. LAB OVERVIEW
          </h2>

          <p className="max-w-4xl text-[#B8C6CC] leading-relaxed">
            This Robotics, Coding & IoT Foundation Lab is designed as a{" "}
            <span className="text-cyan-300 font-semibold">
              shared, modular lab
            </span>{" "}
            for students from Class 5 to Class 12.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-cyan-300">
                <FaSchool />
                <h3 className="font-extrabold text-lg">Lab Supports</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#B8C6CC]">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Supports age-appropriate curriculum
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Covers electronics, robotics, coding & IoT
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Cost-optimized for first-year implementation
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Allows phased upgrades in Year-2 & Year-3
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-cyan-300">
                <FaRobot />
                <h3 className="font-extrabold text-lg">Best Use Case</h3>
              </div>
              <ul className="space-y-2 text-sm text-[#B8C6CC]">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Shared lab for all classes
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Students work in pairs / groups
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Components reusable across grades
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Clear upgrade path for advanced learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE BREAKUP */}
      <section className="py-14 bg-[#061016] border-y border-cyan-300/15">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            2. MODULE-WISE COMPONENT BREAKUP (WITH PRICE)
          </h2>

          <p className="text-[#B8C6CC] mb-6">
            Below is the complete module-wise breakdown for ₹50,000 foundation
            lab.
          </p>

          {/* Module Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Module A */}
            <ModuleCard
              title="🟢 MODULE A: FOUNDATION ELECTRONICS (Class 5–6)"
              subtitle="Subtotal: ₹4,400"
              items={[
                ["Breadboard", "15", "₹1,200"],
                ["LED (Mixed colors)", "100", "₹500"],
                ["Resistor Kit", "1 set", "₹400"],
                ["Push Buttons", "20", "₹300"],
                ["Buzzers", "10", "₹300"],
                ["Jumper Wires (Mixed)", "200", "₹800"],
                ["Battery Holders", "10", "₹600"],
                ["LDR Sensors", "10", "₹300"],
              ]}
            />

            {/* Module B */}
            <ModuleCard
              title="🟡 MODULE B: ROBOTICS & MOTION (Class 6–8)"
              subtitle="Subtotal: ₹7,500"
              items={[
                ["DC Geared Motors", "10", "₹2,000"],
                ["Robot Chassis with Wheels", "5 sets", "₹2,500"],
                ["Motor Driver (L298N)", "6", "₹1,200"],
                ["Servo Motors", "6", "₹1,800"],
              ]}
            />

            {/* Module C */}
            <ModuleCard
              title="🔵 MODULE C: EMBEDDED SYSTEMS (Class 7–8)"
              subtitle="Subtotal: ₹5,400"
              items={[
                ["Arduino Uno", "12", "₹4,800"],
                ["USB Programming Cables", "12", "₹600"],
              ]}
            />

            {/* Module D */}
            <ModuleCard
              title="🟣 MODULE D: SENSORS & AUTOMATION (Class 7–10)"
              subtitle="Subtotal: ₹4,200"
              items={[
                ["Ultrasonic Sensors", "6", "₹1,200"],
                ["IR Sensors", "6", "₹900"],
                ["DHT11 Sensors", "6", "₹900"],
                ["Gas Sensors", "2", "₹700"],
                ["Soil Moisture Sensors", "2", "₹500"],
              ]}
            />

            {/* Module E */}
            <ModuleCard
              title="🟠 MODULE E: IoT & SMART SYSTEMS (Class 9–10)"
              subtitle="Subtotal: ₹5,200"
              items={[
                ["ESP8266 WiFi Module", "6", "₹1,800"],
                ["Relay Module (4-Channel)", "4", "₹1,600"],
                ["RTC Module", "2", "₹600"],
                ["OLED Display", "2", "₹1,200"],
              ]}
            />

            {/* Module F */}
            <ModuleCard
              title="🔴 MODULE F: DISPLAY & OUTPUT"
              subtitle="Subtotal: ₹1,000"
              items={[["LCD 16×2 Display", "4", "₹1,000"]]}
            />

            {/* Module G */}
            <ModuleCard
              title="⚫ MODULE G: TOOLS, POWER & INFRASTRUCTURE"
              subtitle="Subtotal: ₹8,500"
              items={[
                ["Multimeter", "2", "₹1,600"],
                ["Soldering Kit", "1", "₹1,200"],
                ["Tool Kit", "1", "₹1,500"],
                ["Power Adapters / SMPS", "4", "₹1,500"],
                ["Extension Boards", "2", "₹1,200"],
                ["Storage Boxes", "4", "₹1,500"],
              ]}
            />

            {/* Module H */}
            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/80 p-5 shadow-xl">
              <div className="flex items-center gap-3 mb-3 text-cyan-300">
                <FaTools />
                <h3 className="font-extrabold text-base md:text-lg">
                  🔹 MODULE H: SPARES & CONTINGENCY
                </h3>
              </div>

              <div className="overflow-hidden rounded-xl border border-cyan-300/15">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#061016] text-[#B8C6CC]">
                    <tr>
                      <th className="p-3">Item</th>
                      <th className="p-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-cyan-300/10">
                      <td className="p-3">Spare components & buffer stock</td>
                      <td className="p-3 font-bold text-cyan-300">₹4,400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            3. FINAL COST SUMMARY
          </h2>

          <div className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#061016] text-[#B8C6CC]">
                <tr>
                  <th className="p-4">Category</th>
                  <th className="p-4">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Foundation Electronics", "₹4,400"],
                  ["Robotics & Motion", "₹7,500"],
                  ["Embedded Systems", "₹5,400"],
                  ["Sensors & Automation", "₹4,200"],
                  ["IoT & Smart Systems", "₹5,200"],
                  ["Display & Output", "₹1,000"],
                  ["Tools & Infrastructure", "₹8,500"],
                  ["Spares & Buffer", "₹4,400"],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-cyan-300/10 text-[#B8C6CC]"
                  >
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 font-bold text-cyan-300">{row[1]}</td>
                  </tr>
                ))}

                <tr className="border-t border-cyan-300/20 bg-[#061016]">
                  <td className="p-4 font-extrabold text-white">
                    ✅ TOTAL LAB COST
                  </td>
                  <td className="p-4 font-extrabold text-cyan-300">₹50,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-cyan-300">
                <FaSchool />
                <h3 className="font-extrabold text-lg">
                  4. IMPLEMENTATION NOTES
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[#B8C6CC]">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  This is a shared lab for all classes
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Students work in pairs / groups
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  Components are reusable across grades
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-cyan-300" />
                  AI / Raspberry Pi can be added in Year-2 & Year-3
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-cyan-300">
                <FaMicrochip />
                <h3 className="font-extrabold text-lg">
                  5. OFFICIAL STATEMENT
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[#B8C6CC]">
                “This ₹50,000 foundation lab covers the complete robotics,
                coding & IoT curriculum for Class 5 to 12 in the first year, with
                a clear upgrade path for advanced learning.”
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-2xl bg-gradient-to-r from-cyan-300 to-cyan-200 px-4 py-2 font-extrabold text-[#050A0E]"
                >
                  Request Proposal
                </a>
                <a
                  href="/workshops"
                  className="rounded-2xl border border-cyan-300/70 px-4 py-2 font-extrabold text-cyan-300"
                >
                  Explore Workshops
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Want a Complete Lab Setup for Your School?
          </h2>
          <p className="mt-3 mx-auto max-w-3xl text-[#B8C6CC] leading-relaxed">
            We will provide a full proposal including lab item list, training
            plan, curriculum and costing.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-2xl bg-gradient-to-r from-cyan-300 to-cyan-200 px-5 py-3 font-extrabold text-[#050A0E]"
            >
              Talk to A5X Team
            </a>

            <a
              href="/projects"
              className="rounded-2xl border border-cyan-300/70 bg-transparent px-5 py-3 font-extrabold text-cyan-300"
            >
              See Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ✅ Module Card Component */
function ModuleCard({ title, subtitle, items }) {
  return (
    <div className="rounded-2xl border border-cyan-300/20 bg-[#0B1E25]/80 p-5 shadow-xl">
      <div className="flex items-center gap-3 mb-3 text-cyan-300">
        <FaRobot />
        <h3 className="font-extrabold text-base md:text-lg">{title}</h3>
      </div>

      <div className="overflow-hidden rounded-xl border border-cyan-300/15">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#061016] text-[#B8C6CC]">
            <tr>
              <th className="p-3">Component</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, idx) => (
              <tr key={idx} className="border-t border-cyan-300/10">
                <td className="p-3 text-[#B8C6CC]">{it[0]}</td>
                <td className="p-3 text-[#B8C6CC]">{it[1]}</td>
                <td className="p-3 font-bold text-cyan-300">{it[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-sm font-extrabold text-cyan-300">{subtitle}</p>
    </div>
  );
}
