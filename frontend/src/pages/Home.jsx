import Navbar from "../components/Navbar";
import video from "../assets/vid.mp4";
import { useRef, useState, useLayoutEffect } from "react";
import Welcome from "./Welcome";
import About from "./About";
import Services from "./Services";
import Working from "./Working";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";

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
    Welcome,
    About,
    Services,
    Working,
    Testimonials,
    FAQ,
    Contact,
  ];

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
        {sections.map((Component, idx) => (
          <section
            key={idx}
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
