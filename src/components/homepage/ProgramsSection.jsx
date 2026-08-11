import { FaDumbbell, FaFire, FaBolt, FaUserCheck } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import ProgramCard from "../ProgramCard";

const defaultPrograms = [
  {
    title: "Strength & Conditioning",
    description: "Precision-led strength block focusing on mechanics, power output, and heavy load progression.",
    icon: <FaDumbbell />,
  },
  {
    title: "High-Intensity Conditioning",
    description: "High-output metabolic sessions built around elite conditioning and fast muscle recovery protocols.",
    icon: <FaFire />,
  },
  {
    title: "CrossFit & Athletic Blocks",
    description: "Adaptive team-based workouts designed to increase functional range of motion and total body agility.",
    icon: <FaBolt />,
  },
  {
    title: "1-on-1 Elite Coaching",
    description: "Completely private, biometric-driven sessions mapped around your nutrition and posture baseline.",
    icon: <FaUserCheck />,
  },
];

function ProgramsSection({ programs }) {
  // Use passed programs if available, otherwise fallback to our premium defined programs
  const displayPrograms = programs && programs.length > 0 
    ? programs.map((p, idx) => ({ ...p, icon: defaultPrograms[idx]?.icon || <FaDumbbell /> }))
    : defaultPrograms;

  return (
    <section id="programs" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading eyebrow="Programs" title="Crafted for Growth" />
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            Our training blocks are designed by sports scientists and certified coaches to maximize muscle hypertrophy and metabolic conditioning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {displayPrograms.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
