import SectionHeading from "../SectionHeading";
import MembershipCard from "../MembershipCard";
import logo from "../../assets/logo1.png";

const defaultMemberships = [
  {
    name: "Monthly Block",
    price: "600",
    period: "Month",
    description:
      "Ideal for self-driven athletes seeking world-class equipment and premium access.",
    features: [
      "24/7 Facility Keycard Access",
      "Full Gym Floor & Olympic Platform Use",
      "1 Complimentary Biometric Scan / Month",
      "1 Cryotherapy or Sauna Session / Week",
      "Body Temple App Integration",
    ],
  },
  {
    name: "Quarterly Forge",
    price: "1,649",
    period: "Quarter",
    description:
      "Perfect for deep conditioning, hypertrophy planning, and active recovery focus.",
    features: [
      "24/7 Facility Keycard Access",
      "Full Gym Floor & Olympic Platform Use",
      "3 Biometric Scans (Full posture assessment)",
      "Unlimited Recovery Lounge (Cryo & Sauna)",
      "1 Custom Nutrition Structure / Quarter",
    ],
  },
  {
    name: "Annual Legacy",
    price: "16,799",
    period: "Year",
    isPopular: true,
    description:
      "The ultimate transformation track. Priority coach access, unlimited recovery, and full support.",
    features: [
      "24/7 Facility Keycard Access",
      "Full Gym Floor & Olympic Platform Use",
      "Monthly 1-on-1 Biometrics & Coaching Sync",
      "Unlimited Recovery Suite (Contrast, Cryo, Sauna)",
      "Continuous Macro/Diet Updates & Meal Delivery Discounts",
      "5 Monthly Guest Passes & Priority Lift Booking",
    ],
  },
];

function MembershipSection({ memberships }) {
  const displayPlans =
    memberships && memberships.length > 0 ? memberships : defaultMemberships;

  return (
    <section
      id="membership"
      className="reveal relative px-6 py-28 lg:px-12 bg-[#090909] overflow-hidden"
    >
      {/* Background watermark logo */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[700px] h-[700px] opacity-[0.035] pointer-events-none select-none z-0">
        <img src={logo} className="w-full h-full object-contain filter invert" alt="" />
      </div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionHeading
            eyebrow="Membership"
            title="Choose Your Progression"
          />
          <p className="max-w-md mt-4 text-sm text-white/60 leading-relaxed">
            Select a program that matches your goals. No signup fees, no hidden
            billing locks. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {displayPlans.map((plan) => (
            <MembershipCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipSection;
