import Navbar from "../components/Navbar";
import video from "../assets/vid.mp4";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Welcome from "./Welcome";
import About from "./About";
import Services from "./Services";
import Working from "./Working";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

const Home = () => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
      setVideoHeight(window.innerHeight - height);
    }
  }, []);

  const sections = [
    { component: Welcome, name: "welcome" },
    { component: AboutUs, name: "aboutus" },
    { component: About, name: "about" },
    { component: Services, name: "services" },
    { component: Working, name: "working" },
    { component: Testimonials, name: "testimonials" },
    { component: FAQ, name: "faq" },
    { component: Contact, name: "contact" },
  ];

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute("href");
        const hash = href.substring(1);

        console.log("[Click] href:", href);
        console.log("[Click] hash:", hash);

        const sectionIndex = sections.findIndex(({ name }) => {
          console.log("[Component Check] Section name:", name);
          return name === hash;
        });

        console.log("[Result] sectionIndex:", sectionIndex);

        if (sectionIndex !== -1) {
          const targetPosition =
            navbarHeight + videoHeight + sectionIndex * (videoHeight + 55);

          console.log("[Scroll] Scrolling to position:", targetPosition);

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        } else {
          console.warn("[Scroll] Section not found for hash:", hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [navbarHeight, videoHeight, sections]);

  return (
    <>
      {/* Navbar */}
      <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      {/* Background Video */}
      <div
        className="fixed left-0 right-0 overflow-hidden z-10"
        style={{ top: navbarHeight, height: videoHeight }}
      >
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Scrollable Content */}
      <div
        className="relative z-20"
        style={{
          paddingTop: navbarHeight + videoHeight,
          minHeight: `${sections.length * 100}vh`,
        }}
      >
        {sections.map(({ component: Component, name }, idx) => (
          <section
            key={idx}
            id={name}
            className="sticky"
            style={{
              height: videoHeight + 55,
              top: 0,
              zIndex: 20 + idx,
            }}
          >
            <Component navbarHeight={navbarHeight} />
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
