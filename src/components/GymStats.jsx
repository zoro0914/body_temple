import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 15000, suffix: "+", label: "Sq. Ft. Elite Arena" },
  { value: 50, suffix: "+", label: "Certified Master Coaches" },
  { value: 100, suffix: "+", label: "Olympic Lifting Rigs" },
  { value: 12000, suffix: "+", label: "Active Members Forged" },
];

function CountUpStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    // determine increment speed based on the size of the number
    const duration = 1.5; // in seconds
    const totalFrames = 60;
    const increment = Math.ceil(end / totalFrames);
    const stepTime = (duration * 1000) / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 rounded-[1.6rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm text-center shadow-lg hover:border-white/10 transition-colors"
    >
      <div className="font-anton text-5xl sm:text-6xl text-white tracking-wider flex items-center justify-center">
        <span className="text-[#E63946]">{formatNumber(count)}</span>
        <span>{suffix}</span>
      </div>
      <div className="mt-3 text-xs sm:text-sm text-white/60 uppercase tracking-[0.2em] font-medium max-w-[200px]">
        {label}
      </div>
    </div>
  );
}

function GymStats() {
  return (
    <section id="stats" className="relative py-16 px-6 lg:px-12 bg-[#090909]">
      {/* Subtle top/bottom line separators */}
      <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-white/10" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <CountUpStat
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-white/10" />
    </section>
  );
}

export default GymStats;
