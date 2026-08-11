import { motion } from "framer-motion";
import { FaClock, FaDumbbell, FaHeartPulse, FaAppleWhole } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: <FaClock className="text-2xl text-[#E63946]" />,
    title: "24/7 Unlimited Access",
    desc: "Train on your schedule. Seamless biometrics and secure keycard entry at any hour, day or night.",
  },
  {
    icon: <FaDumbbell className="text-2xl text-[#E63946]" />,
    title: "Olympic-Grade Equipment",
    desc: "Train with Eleiko barbells, Hammer Strength rigs, custom heavy iron up to 150 lbs, and dual athletic turf lanes.",
  },
  {
    icon: <FaHeartPulse className="text-2xl text-[#E63946]" />,
    title: "Elite Recovery Suite",
    desc: "Access localized cryo chambers, premium contrast baths, custom infrared saunas, and active compression gear.",
  },
  {
    icon: <FaAppleWhole className="text-2xl text-[#E63946]" />,
    title: "Custom Nutrition Support",
    desc: "Fully individualized meal structures, post-session shakes, and seamless doorstep healthy meal deliveries.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="reveal relative py-28 px-6 lg:px-12 bg-[#090909]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(230,57,70,0.1),_transparent_35%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Engineered for Peak Human Potential"
          />
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            We provide the tools, coaching, and recovery protocols that separate elite performers from standard routines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="p-8 rounded-[1.8rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent shadow-xl hover:border-[#E63946]/35 transition-colors duration-300 relative group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#E63946]/0 to-transparent group-hover:via-[#E63946]/50 transition-all duration-500" />
              
              {/* Icon Container */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.02] border border-white/10 group-hover:bg-[#E63946]/10 group-hover:border-[#E63946]/20 transition-all duration-300">
                {feat.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="font-anton text-xl uppercase tracking-wider text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
