import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import RoboticsShowcase from "../components/RoboticsShowcase";
import Workshops from "../components/Workshop";
import TeamPreview from "../components/TeamSection";
import ContactCTA from "../components/ContactCTA";

import usePWAInstall from "../hooks/usePWAInstall";

export default function Home() {
  const { isInstallable, installApp } = usePWAInstall();
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios =
      /iphone|ipad|ipod/.test(userAgent) &&
      !window.matchMedia("(display-mode: standalone)").matches;

    setIsIOS(ios);
  }, []);

  // Show popup after 2.5 seconds
  useEffect(() => {
    if (isInstallable || isIOS) {
      const timer = setTimeout(() => {
        setShowInstallPopup(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isInstallable, isIOS]);

  return (
    <main className="bg-black text-white relative">
      <Hero />

      {/* Services preview */}
      <section className="py-20 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            What We Do
          </h2>
          <p className="text-gray-400 text-center mt-3 max-w-2xl mx-auto">
            Robotics, industrial automation, AI systems and hands-on workshops — built for results.
          </p>
          <div className="mt-10">
            <Services />
          </div>
        </div>
      </section>

      {/* Robotics showcase */}
      <section className="py-20 bg-[#05080E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <RoboticsShowcase />
        </div>
      </section>

      <ContactCTA />

      {/* ================= PWA INSTALL POPUP ================= */}
      {showInstallPopup && (
        <div className="fixed bottom-4 left-4 right-4 z-[9999]">
          <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold">
                Install A5X App 🚀
              </h4>
              <p className="text-gray-400 text-sm">
                Get faster access & app-like experience
              </p>
            </div>

            <div className="flex gap-3">
              {!isIOS && isInstallable && (
                <button
                  onClick={installApp}
                  className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300 transition"
                >
                  Install
                </button>
              )}

              {isIOS && (
                <span className="text-gray-300 text-sm">
                  Tap <b>Share</b> → <b>Add to Home Screen</b>
                </span>
              )}

              <button
                onClick={() => setShowInstallPopup(false)}
                className="text-gray-400 hover:text-white transition"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
