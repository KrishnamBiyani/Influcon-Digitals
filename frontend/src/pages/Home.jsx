// import Navbar from "../components/Navbar";
// import video from "../assets/vid.mp4";
// import { useRef, useState, useLayoutEffect } from "react";
// import Welcome from "./Welcome"; // 👈 Import your welcome page

// const sections = [
//   { id: 2, title: "Next Section 2", content: "Scroll down for more 2..." },
//   { id: 3, title: "Next Section 3", content: "Scroll down for more 3..." },
// ];

// const Home = () => {
//   const navbarRef = useRef(null);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [videoHeight, setVideoHeight] = useState(0);

//   useLayoutEffect(() => {
//     if (navbarRef.current) {
//       const height = navbarRef.current.offsetHeight;
//       setNavbarHeight(height);
//       setVideoHeight(window.innerHeight - height);
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-30">
//         <Navbar />
//       </div>

//       {/* Background video */}
//       <div
//         className="fixed left-0 right-0 overflow-hidden z-10"
//         style={{ top: navbarHeight, height: videoHeight }}
//       >
//         <video
//           className="w-full h-full object-cover"
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       {/* Scrollable content */}
//       <div
//         className="relative z-20"
//         style={{
//           paddingTop: navbarHeight + videoHeight,
//           minHeight: `${(sections.length + 1) * 100}vh`, // +1 for WelcomePage
//         }}
//       >
//         {/* Custom Welcome Page inside sticky section */}
//         <section
//           className="sticky"
//           style={{
//             height: videoHeight,
//             top: navbarHeight,
//             zIndex: 20,
//           }}
//         >
//           <Welcome navbarHeight={navbarHeight} />
//         </section>

//         {/* Other scrollable sections */}
//         {sections.map(({ id, title, content }, idx) => (
//           <section
//             key={id}
//             className="sticky flex flex-col justify-center px-8 py-12 bg-white/60 backdrop-blur-md border-b border-gray-300 text-black"
//             style={{
//               height: videoHeight,
//               top: navbarHeight,
//               zIndex: 21 + idx,
//             }}
//           >
//             <h1 className="text-3xl font-bold mb-4">{title}</h1>
//             <p className="text-lg">{content}</p>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Home;

// SECOND

// import Navbar from "../components/Navbar";
// import video from "../assets/vid.mp4";
// import { useRef, useState, useLayoutEffect } from "react";
// import Welcome from "./Welcome";

// const sections = [
//   // Replace Next Section 2 with Welcome component placeholder
//   { id: 2, isWelcome: true },
//   { id: 3, title: "Next Section 3", content: "Scroll down for more 3..." },
// ];

// const Home = () => {
//   const navbarRef = useRef(null);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [videoHeight, setVideoHeight] = useState(0);

//   useLayoutEffect(() => {
//     if (navbarRef.current) {
//       const height = navbarRef.current.offsetHeight;
//       setNavbarHeight(height);
//       setVideoHeight(window.innerHeight - height);
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-30">
//         <Navbar />
//       </div>

//       {/* Background video */}
//       <div
//         className="fixed left-0 right-0 overflow-hidden z-10"
//         style={{ top: navbarHeight, height: videoHeight }}
//       >
//         <video
//           className="w-full h-full object-cover"
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       {/* Scrollable content */}
//       <div
//         className="relative z-20"
//         style={{
//           paddingTop: navbarHeight + videoHeight,
//           minHeight: `${(sections.length + 1) * 100}vh`, // +1 for initial WelcomePage
//         }}
//       >
//         {/* First Welcome Page */}
//         <section
//           className="sticky"
//           style={{
//             height: videoHeight,
//             top: navbarHeight,
//             zIndex: 20,
//           }}
//         >
//           <Welcome navbarHeight={navbarHeight} />
//         </section>

//         {/* Loop through sections */}
//         {sections.map(({ id, isWelcome, title, content }, idx) => {
//           if (isWelcome) {
//             // Render Welcome again in place of Section 2
//             return (
//               <section
//                 key={id}
//                 className="sticky"
//                 style={{
//                   height: videoHeight,
//                   top: navbarHeight,
//                   zIndex: 21 + idx,
//                 }}
//               >
//                 <Welcome navbarHeight={navbarHeight} />
//               </section>
//             );
//           }
//           // Normal sections
//           return (
//             <section
//               key={id}
//               className="sticky flex flex-col justify-center px-8 py-12 bg-white/60 backdrop-blur-md border-b border-gray-300 text-black"
//               style={{
//                 height: videoHeight,
//                 top: navbarHeight,
//                 zIndex: 21 + idx,
//               }}
//             >
//               <h1 className="text-3xl font-bold mb-4">{title}</h1>
//               <p className="text-lg">{content}</p>
//             </section>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Home;

// THIRD

// import Navbar from "../components/Navbar";
// import video from "../assets/vid.mp4";
// import { useRef, useState, useLayoutEffect } from "react";
// import Welcome from "./Welcome"; // 👈 Import your welcome page

// const Home = () => {
//   const navbarRef = useRef(null);
//   const [navbarHeight, setNavbarHeight] = useState(0);
//   const [videoHeight, setVideoHeight] = useState(0);

//   useLayoutEffect(() => {
//     if (navbarRef.current) {
//       const height = navbarRef.current.offsetHeight;
//       setNavbarHeight(height);
//       setVideoHeight(window.innerHeight - height);
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-30">
//         <Navbar />
//       </div>

//       {/* Background video */}
//       <div
//         className="fixed left-0 right-0 overflow-hidden z-10"
//         style={{ top: navbarHeight, height: videoHeight }}
//       >
//         <video
//           className="w-full h-full object-cover"
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       {/* Scrollable content */}
//       <div
//         className="relative z-20"
//         style={{
//           paddingTop: navbarHeight + videoHeight,
//           minHeight: `${3 * 100}vh`, // 3 sections
//         }}
//       >
//         {/* Welcome Page 1 */}
//         <section
//           className="sticky"
//           style={{
//             height: videoHeight,
//             top: navbarHeight,
//             zIndex: 20,
//           }}
//         >
//           <Welcome navbarHeight={navbarHeight} />
//         </section>

//         {/* Welcome Page 2 */}
//         <section
//           className="sticky"
//           style={{
//             height: videoHeight,
//             top: navbarHeight,
//             zIndex: 21,
//           }}
//         >
//           <Welcome navbarHeight={navbarHeight} />
//         </section>

//         {/* Welcome Page 3 */}
//         <section
//           className="sticky"
//           style={{
//             height: videoHeight,
//             top: navbarHeight,
//             zIndex: 22,
//           }}
//         >
//           <Welcome navbarHeight={navbarHeight} />
//         </section>
//       </div>
//     </>
//   );
// };

// export default Home;

// ------------------FOURTH--------------------

import Navbar from "../components/Navbar";
import video from "../assets/vid.mp4";
import { useRef, useState, useLayoutEffect } from "react";
import Welcome from "./Welcome";

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
          minHeight: `300vh`, // for 3 sticky sections
        }}
      >
        {[1, 2, 3].map((_, idx) => (
          <section
            key={idx}
            className="sticky"
            style={{
              height: videoHeight,
              top: 0,
              zIndex: 20 + idx,
            }}
          >
            <Welcome navbarHeight={navbarHeight} />
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
