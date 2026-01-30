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
              <h3 className="text-2xl font-extrabold text-cyan-300">🔄</h3>
              <p className="text-xs text-[#B8C6CC]">Pricing Coming Soon</p>
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
            2. MODULE-WISE COMPONENT BREAKUP
          </h2>

          <p className="text-[#B8C6CC] mb-6">
            Complete module-wise breakdown coming soon. Contact us for detailed
            lab specifications and customized pricing.
          </p>

          {/* Module Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Module A */}
            <ModuleCard
              title="🟢 MODULE A: FOUNDATION ELECTRONICS (Class 5–6)"
              subtitle="Detailed breakdown coming soon"
              items={[
                ["Breadboard", "15", "Coming Soon"],
                ["LED (Mixed colors)", "100", "Coming Soon"],
                ["Resistor Kit", "1 set", "Coming Soon"],
                ["Push Buttons", "20", "Coming Soon"],
                ["Buzzers", "10", "Coming Soon"],
                ["Jumper Wires (Mixed)", "200", "Coming Soon"],
                ["Battery Holders", "10", "Coming Soon"],
                ["LDR Sensors", "10", "Coming Soon"],
              ]}
            />

            {/* Module B */}
            <ModuleCard
              title="🟡 MODULE B: ROBOTICS & MOTION (Class 6–8)"
              subtitle="Detailed breakdown coming soon"
              items={[
                ["DC Geared Motors", "10", "Coming Soon"],
                ["Robot Chassis with Wheels", "5 sets", "Coming Soon"],
                ["Motor Driver (L298N)", "6", "Coming Soon"],
                ["Servo Motors", "6", "Coming Soon"],
              ]}
            />

            {/* Module C */}
            <ModuleCard
              title="🔵 MODULE C: EMBEDDED SYSTEMS (Class 7–8)"
              subtitle="Detailed breakdown coming soon"
              items={[
                ["Arduino Uno", "12", "Coming Soon"],
                ["USB Programming Cables", "12", "Coming Soon"],
              ]}
            />

            {/* Module D */}
            <ModuleCard
              title="🟣 MODULE D: SENSORS & AUTOMATION (Class 7–10)"
              subtitle="Detailed breakdown coming soon"
              items={[
                ["Ultrasonic Sensors", "6", "Coming Soon"],
                ["IR Sensors", "6", "Coming Soon"],
                ["DHT11 Sensors", "6", "Coming Soon"],
                ["Gas Sensors", "2", "Coming Soon"],
                ["Soil Moisture Sensors", "2", "Coming Soon"],
              ]}
            />

            {/* Module E */}
            <ModuleCard
              title="🟠 MODULE E: IoT & SMART SYSTEMS (Class 9–10)"
              subtitle="Detailed breakdown coming soon"
              items={[
                ["ESP8266 WiFi Module", "6", "Coming Soon"],
                ["Relay Module (4-Channel)", "4", "Coming Soon"],
                ["RTC Module", "2", "Coming Soon"],
                ["OLED Display", "2", "Coming Soon"],
              ]}
            />

            {/* Module F */}
            <ModuleCard
              title="🔴 MODULE F: DISPLAY & OUTPUT"
              subtitle="Detailed breakdown coming soon"
              items={[["LCD 16×2 Display", "4", "Coming Soon"]]}
            />

            {/* Module G */}
            <ModuleCard
              title="⚫ MODULE G: TOOLS, POWER & INFRASTRUCTURE"
              subtitle="Detailed breakdown coming soon"
              items={[
                ["Multimeter", "2", "Coming Soon"],
                ["Soldering Kit", "1", "Coming Soon"],
                ["Tool Kit", "1", "Coming Soon"],
                ["Power Adapters / SMPS", "4", "Coming Soon"],
                ["Extension Boards", "2", "Coming Soon"],
                ["Storage Boxes", "4", "Coming Soon"],
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
                      <td className="p-3 font-bold text-cyan-300">Coming Soon</td>
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
                  ["Foundation Electronics", "Coming Soon"],
                  ["Robotics & Motion", "Coming Soon"],
                  ["Embedded Systems", "Coming Soon"],
                  ["Sensors & Automation", "Coming Soon"],
                  ["IoT & Smart Systems", "Coming Soon"],
                  ["Display & Output", "Coming Soon"],
                  ["Tools & Infrastructure", "Coming Soon"],
                  ["Spares & Buffer", "Coming Soon"],
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
                    ✅ CUSTOM PRICING
                  </td>
                  <td className="p-4 font-extrabold text-cyan-300">Contact Us</td>
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
                "This comprehensive foundation lab covers the complete robotics,
                coding & IoT curriculum for Class 5 to 12 in the first year, with
                a clear upgrade path for advanced learning. Get a customized quote today!"
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
