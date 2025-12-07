import Hero from "../components/Hero";
import Services from "../components/Services";
import RoboticsShowcase from "../components/RoboticsShowcase";
import Workshops from "../components/Workshop";
import TeamPreview from "../components/TeamSection";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />

      {/* Services preview */}
      <section className="py-20 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">What We Do</h2>
          <p className="text-gray-400 text-center mt-3 max-w-2xl mx-auto">Robotics, industrial automation, AI systems and hands-on workshops — built for results.</p>
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
    </main>
  );
}
