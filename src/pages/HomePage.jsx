import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GymStats from "../components/GymStats";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import ProgramsSection from "../components/homepage/ProgramsSection";
import MachinesGear from "../components/homepage/MachinesGear";
import TrainersSection from "../components/homepage/TrainersSection";
import GymTour from "../components/GymTour";
import Transformations from "../components/Transformations";
import MembershipSection from "../components/homepage/MembershipSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import GallerySection from "../components/homepage/GallerySection";
import ContactSection from "../components/homepage/ContactSection";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // premium ease out
    });

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // 2. Setup GSAP animations
    const ctx = gsap.context(() => {
      // Cinematic multi-layer parallax for Hero Section
      const hero = heroRef.current;
      if (hero) {
        const layers = hero.querySelectorAll("[data-hero-layer]");
        layers.forEach((layer, index) => {
          gsap.to(layer, {
            yPercent: (index + 1) * -12, // subtle parallax values
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        const veil = hero.querySelector("[data-hero-veil]");
        if (veil) {
          gsap.to(veil, {
            opacity: 1, // Fades completely to black at the end of scroll
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      // Smooth trigger reveals for sections with '.reveal'
      gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // About section dynamic zoom
      if (storyRef.current) {
        gsap.to(storyRef.current, {
          scale: 1.03,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    // 3. Track cursor position for the glowing interactive light overlay
    const handleMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMove);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", handleMove);
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. CINEMATIC PARALLAX HERO */}
      <HeroSection heroRef={heroRef} cursorPosition={cursorPosition} />

      <main className="relative">
        {/* 3. GYM STATS */}
        <GymStats />

        {/* 5. ABOUT */}
        <About storyRef={storyRef} />

        {/* 12. GALLERY */}
        <GallerySection />

        {/* 4. TRAINERS */}
        <TrainersSection />

        {/* 6. PROGRAMS */}
        <ProgramsSection />

        {/* 7. MACHINES & GEAR */}
        <MachinesGear />

        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 8. GYM TOUR */}
        <GymTour />

        {/* 9. TRANSFORMATIONS */}
        <Transformations />

        {/* 10. MEMBERSHIP */}
        <MembershipSection />

        {/* 11. TESTIMONIALS */}
        <TestimonialsSection />


        {/* 13. LOCATION + CONTACT */}
        <ContactSection />

        {/* 14. FAQ */}
        <FAQ />

        {/* 15. FINAL CTA */}
        <FinalCTA />
      </main>

      {/* 16. FOOTER */}
      <Footer />
    </div>
  );
}

export default HomePage;
