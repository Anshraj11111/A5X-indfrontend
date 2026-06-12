import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaTools,
  FaMicrochip,
  FaSchool,
  FaRobot,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

export default function Lab() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_URL}/api/lab/modules`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch lab modules");
        }
        
        const data = await response.json();
        setModules(data);
      } catch (err) {
        console.error("Error fetching modules:", err);
        setError("Unable to load lab modules. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="border-b border-[#00AEEF]/20 bg-gradient-to-b from-[#050505] via-[#020508] to-[#060B10] py-20">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            🧪 Robotics, Coding & IoT{" "}
            <span className="text-[#00AEEF]">Foundation Lab</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
            (Class 5 to 12 – Shared School Lab) <br />
            A complete shared, modular and cost-optimized lab setup designed for
            schools — with upgrade-ready planning.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-sm bg-gradient-to-r bg-[#00AEEF] px-5 py-3 font-bold text-[#050A0E]"
            >
              Get Lab Proposal
            </a>

            <a
              href="/projects"
              className="rounded-sm border border-[#00AEEF]/70 bg-transparent px-5 py-3 font-bold text-[#00AEEF]"
            >
              See Projects
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-4 text-center">
              <h3 className="text-2xl font-extrabold text-[#00AEEF]">🔄</h3>
              <p className="text-xs text-gray-400">Pricing Coming Soon</p>
            </div>

            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-4 text-center">
              <h3 className="text-2xl font-extrabold text-[#00AEEF]">5 - 12</h3>
              <p className="text-xs text-gray-400">Supported Grades</p>
            </div>

            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-4 text-center">
              <h3 className="text-2xl font-extrabold text-[#00AEEF]">8+</h3>
              <p className="text-xs text-gray-400">Modules Included</p>
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

          <p className="max-w-4xl text-gray-400 leading-relaxed">
            This Robotics, Coding & IoT Foundation Lab is designed as a{" "}
            <span className="text-[#00AEEF] font-semibold">
              shared, modular lab
            </span>{" "}
            for students from Class 5 to Class 12.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-[#00AEEF]">
                <FaSchool />
                <h3 className="font-extrabold text-lg">Lab Supports</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Supports age-appropriate curriculum
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Covers electronics, robotics, coding & IoT
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Cost-optimized for first-year implementation
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Allows phased upgrades in Year-2 & Year-3
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-[#00AEEF]">
                <FaRobot />
                <h3 className="font-extrabold text-lg">Best Use Case</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Shared lab for all classes
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Students work in pairs / groups
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Components reusable across grades
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Clear upgrade path for advanced learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE BREAKUP */}
      <section className="py-14 bg-[#020508] border-y border-[#00AEEF]/15">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            2. MODULE-WISE COMPONENT BREAKUP
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00AEEF]"></div>
              <p className="mt-4 text-gray-400">Loading lab modules...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="rounded-sm bg-gradient-to-r bg-[#00AEEF] px-5 py-3 font-bold text-[#050A0E]"
              >
                Retry
              </button>
            </div>
          ) : modules.length === 0 ? (
            <p className="text-gray-400 mb-6">
              Complete module-wise breakdown coming soon. Contact us for detailed
              lab specifications and customized pricing.
            </p>
          ) : (
            <>
              <p className="text-gray-400 mb-6">
                Explore our comprehensive lab modules designed for different grade levels.
              </p>

              {/* Module Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module) => (
                  <ModuleCard
                    key={module._id}
                    module={module}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            3. FINAL COST SUMMARY
          </h2>

          <div className="overflow-hidden rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#020508] text-gray-400">
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
                    className="border-t border-[#00AEEF]/10 text-gray-400"
                  >
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4 font-bold text-[#00AEEF]">{row[1]}</td>
                  </tr>
                ))}

                <tr className="border-t border-[#00AEEF]/20 bg-[#020508]">
                  <td className="p-4 font-extrabold text-white">
                    ✅ CUSTOM PRICING
                  </td>
                  <td className="p-4 font-extrabold text-[#00AEEF]">Contact Us</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-[#00AEEF]">
                <FaSchool />
                <h3 className="font-extrabold text-lg">
                  4. IMPLEMENTATION NOTES
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  This is a shared lab for all classes
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Students work in pairs / groups
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  Components are reusable across grades
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="mt-1 text-[#00AEEF]" />
                  AI / Raspberry Pi can be added in Year-2 & Year-3
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/70 p-5">
              <div className="flex items-center gap-3 mb-3 text-[#00AEEF]">
                <FaMicrochip />
                <h3 className="font-extrabold text-lg">
                  5. OFFICIAL STATEMENT
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                "This comprehensive foundation lab covers the complete robotics,
                coding & IoT curriculum for Class 5 to 12 in the first year, with
                a clear upgrade path for advanced learning. Get a customized quote today!"
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-sm bg-gradient-to-r bg-[#00AEEF] px-4 py-2 font-extrabold text-[#050A0E]"
                >
                  Request Proposal
                </a>
                <a
                  href="/workshops"
                  className="rounded-sm border border-[#00AEEF]/70 px-4 py-2 font-extrabold text-[#00AEEF]"
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
          <p className="mt-3 mx-auto max-w-3xl text-gray-400 leading-relaxed">
            We will provide a full proposal including lab item list, training
            plan, curriculum and costing.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-sm bg-gradient-to-r bg-[#00AEEF] px-5 py-3 font-extrabold text-[#050A0E]"
            >
              Talk to A5X Team
            </a>

            <a
              href="/projects"
              className="rounded-sm border border-[#00AEEF]/70 bg-transparent px-5 py-3 font-extrabold text-[#00AEEF]"
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
function ModuleCard({ module }) {
  const { title, subtitle, emoji, classRange, price, components } = module;
  
  // Format the title to include emoji and class range if available
  const displayTitle = `${emoji} ${title}${classRange ? ` (${classRange})` : ''}`;
  
  return (
    <div className="rounded-sm border border-[#00AEEF]/20 bg-[#060B10]/80 p-5 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3 text-[#00AEEF]">
          <FaRobot />
          <h3 className="font-extrabold text-base md:text-lg">{displayTitle}</h3>
        </div>
        {price && (
          <div className="text-[#00AEEF] font-bold text-sm">
            💰 {price}
          </div>
        )}
      </div>

      {components && components.length > 0 ? (
        <>
          <div className="overflow-hidden rounded-sm border border-[#00AEEF]/15">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#020508] text-gray-400">
                <tr>
                  <th className="p-3">Component</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {components
                  .sort((a, b) => a.order - b.order)
                  .map((component) => (
                    <tr key={component._id} className="border-t border-[#00AEEF]/10">
                      <td className="p-3 text-gray-400">{component.name}</td>
                      <td className="p-3 text-gray-400">{component.quantity}</td>
                      <td className="p-3 font-bold text-[#00AEEF]">{component.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {subtitle && (
            <p className="mt-3 text-sm font-extrabold text-[#00AEEF]">{subtitle}</p>
          )}
        </>
      ) : (
        <p className="text-sm text-gray-400">
          {subtitle || "No components available yet."}
        </p>
      )}
    </div>
  );
}
