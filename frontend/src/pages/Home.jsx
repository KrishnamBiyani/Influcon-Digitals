import Navbar from "../components/Navbar";
import video from "../assets/vid.mp4";
import { useRef, useState, useLayoutEffect } from "react";

const sections = [
  { id: 1, title: "Next Section 1", content: "Scroll down for more 1..." },
  { id: 2, title: "Next Section 2", content: "Scroll down for more 2..." },
  { id: 3, title: "Next Section 3", content: "Scroll down for more 3..." },
];

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

  return (
    <>
      <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-30 ">
        <Navbar />
      </div>

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

      {/* Scrollable Sections */}
      <div
        className="relative"
        style={{
          paddingTop: navbarHeight + videoHeight,
          minHeight: `${(sections.length + 1) * 100}vh`,
        }}
      >
        {sections.map(({ id, title, content }, idx) => (
          <section
            key={id}
            className="sticky flex flex-col justify-center px-8 py-12 bg-white/60 backdrop-blur-md border-b border-gray-300 text-black"
            style={{
              height: videoHeight,
              top: navbarHeight,
              zIndex: 20 + idx,
            }}
          >
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg">{content}</p>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
