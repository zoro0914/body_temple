import SectionHeading from "../SectionHeading";
import TrainerCard from "../TrainerCard";

const defaultTrainers = [
  {
    name: "Mara Voss",
    role: "Athletic Conditioning",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jules Mercer",
    role: "Olympic Lifting / Strength",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lina Cruz",
    role: "Biomechanics / Mobility",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
  },
];

function TrainersSection({ trainers }) {
  const displayTrainers = trainers && trainers.length > 0 ? trainers : defaultTrainers;

  return (
    <section id="trainers" className="reveal px-6 py-28 lg:px-12 bg-[#090909]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Trainers"
            title="Elite Coaching Guild"
          />
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            Our trainers hold advanced degrees in kinesiology and elite sports coaching, bringing sharp technical guidance to every lift and block.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayTrainers.map((trainer) => (
            <TrainerCard
              key={trainer.name}
              name={trainer.name}
              role={trainer.role}
              image={trainer.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainersSection;
