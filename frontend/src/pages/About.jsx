import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/blackboard.png";
import showLogo from "../assets/about-logo.png";
import laptopImage from "../assets/about-laptop.png";
import micIcon from "../assets/about-mic.png";
import booksStack from "../assets/about-books.png";
import ratingHand from "../assets/about-thumb.png";

const About = ({ navbarHeight }) => {
  const offsetTop = navbarHeight * 1.2;

  return (
    <div className="w-full min-h-screen relative bg-transparent">
      {/* Top transparent spacer */}
      <div style={{ height: offsetTop }} />

      {/* Paper area from below spacer to bottom */}
      <div
        className="relative w-full h-full"
        style={{
          minHeight: `calc(100vh - ${offsetTop}px)`,
          backgroundImage: `url(${bgPaper})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Torn strips pulled slightly above paper edge */}
        <div
          className="absolute w-full h-[320px] pointer-events-none overflow-hidden"
          style={{ top: "-160px", zIndex: 10 }}
        >
          {/* Layer 1 */}
          <img
            src={tornTop}
            alt="Torn Edge Layer 1"
            className="min-w-[1024px] max-w-none absolute top-8 md:top-0 left-1/2 -translate-x-1/2
               scale-y-[1.25] md:scale-y-[1.68] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />

          {/* Layer 2 */}
          <img
            src={tornTop}
            alt="Torn Edge Layer 2"
            className="min-w-[1024px] max-w-none absolute top-12 md:top-7 left-1/2 -translate-x-1/2
               scale-y-[1.25] md:scale-y-[1.68] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />

          {/* Layer 3 */}
          <img
            src={tornTop}
            alt="Torn Edge Layer 3"
            className="min-w-[1024px] max-w-none absolute top-16 md:top-14 left-1/2 -translate-x-1/2
               scale-y-[1.25] md:scale-y-[1.68] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />
        </div>

        {/* Content starts after the torn strip */}
        <div className="pt-[18px] md:pt-[15px] flex flex-col items-center justify-center text-center px-4">
          <div className="">
            <h1 className=" text-[21px] sm:text-xl md:text-5xl font-bold text-white drop-shadow-lg z-20 flex items-center space-x-2">
              {/* Custom underline for "Check us" */}
              <span
                className="relative inline-block
                   after:content-['']
                   after:absolute after:left-0 after:right-3 after:-bottom-1 after:h-1 after:bg-blue-600
                   before:content-['']
                   before:absolute before:left-0 before:right-10 before:-bottom-3 before:h-1 before:bg-blue-600"
              >
                <span className="no-underline">Check Us</span>
              </span>

              <span>out on the</span>

              <img
                src={showLogo}
                alt="The Arun Mukherjee Show Logo"
                className="w-28 sm:w-35 md:w-38 inline-block"
              />
            </h1>
          </div>

          <div className=" flex flex-col md:flex-row  max-w-[1400px]">
            {/* Left: Laptop Image */}
            <div className="realtive w-full hidden lg:block lg:w-[50%] ">
              <img
                src={laptopImage}
                alt="Podcast Laptop"
                className=" w-[80%] -mt-27.5 ml-35"
              />
              <img
                src={micIcon}
                alt=""
                className="absolute hidden md:block md:w-40 2xl:w-50 md:bottom-30 2xl:bottom-0 md:left-92 2xl:left-97"
              />
            </div>

            {/* Right: Description */}
            <div className="text-left text-[0.75rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.8rem] 2xl:text-[0.9rem] text-white max-w-7xl xl:w-[38%] 2xl:w-[50%] font-bold leading-[1.4]">
              <p className="mb-4">
                In this episode of The Arun Mukherjee Show, we sit down with the
                22-year-old founders of InfluCon Digitals, a fast-growing
                digital marketing, web development, and software & app
                development company based in Kolkata. These young entrepreneurs,
                Raunak Mitra and Surjyabho Deb, not only run a thriving agency
                with a team of 15 people but also own and manage the backend
                support for this very podcast!
              </p>

              <p className="">We dive deep into:</p>
              <ul className="list-disc list-inside ml-4 my-3">
                <li>
                  Their entrepreneurial journey and how they started so young
                </li>
                <li>
                  Managing operations, clients, and revenue in a competitive
                  industry
                </li>
                <li>Why most agencies fail and how to avoid common pitfalls</li>
                <li>How they led a 15-member team while staying innovative</li>
                <li>
                  Tips for surviving and thriving in a hyper-competitive digital
                  market
                </li>
              </ul>

              <p className="mt-4">
                If you're an aspiring entrepreneur, a business owner, or someone
                curious about what it takes to build a successful agency in
                today's fast-paced world—this episode is a must-watch!
              </p>

              {/* Book Image at Bottom-Left */}
              <img
                src={booksStack}
                alt="Books"
                className="absolute bottom-0 left-5 hidden md:block md:w-[250px] 2xl:w-[240px] z-10"
              />

              {/* Hand/Thumb Image at Middle-Right */}
            </div>
          </div>
          <div className="absolute xl:right-0 xl:top-35 2xl:right-0 2xl:bottom-20 z-0 hidden xl:block xl:w-85 2xl:x-95  overflow-hidden">
            <img
              src={ratingHand}
              alt="hand right"
              className="-rotate-8 translate-x-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
