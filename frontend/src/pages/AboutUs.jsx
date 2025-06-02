import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/blackboard.png";
import handLeft from "../assets/aboutUs-hand.png"; // The pointing hand on left
import arrowBottomRight from "../assets/aboutUs-arrow.png"; // The arrow on bottom right
import notebookTop from "../assets/aboutUs-notebook.png"; // The notebook/paper on top right

const AboutUs = ({ navbarHeight }) => {
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
        <div className="pt-[18px] md:pt-[40px] flex flex-col items-center justify-center px-4 max-w-5xl mx-auto">
          {/* About Us Header */}
          <div className="w-full text-center">
            <h1 className="text-md sm:text-xl md:text-5xl font-bold text-white drop-shadow-lg z-20 mb-6">
              <span
                className="relative inline-block
             after:content-['']
             after:absolute after:left-0 after:right-10 after:-bottom-1 after:h-1 after:bg-blue-600
             before:content-['']
             before:absolute before:left-0 before:right-0 before:-bottom-3 before:h-1 before:bg-blue-600"
              >
                <span className="no-underline">About</span>
              </span>
              <span> Us</span>
            </h1>
          </div>

          <div className="w-full flex flex-col lg:flex-row">
            {/* Left side: Main content */}
            <div className="w-[75%] px-10 ">
              <div className="text-white  mb-6">
                <div className="w-[85%] mb-2">
                  <em>
                    <p className="text-white leading-[1.2] font-bold text-sm md:text-3xl">
                      "We are the{" "}
                      <span className="text-[#FFEF13] font-black">
                        <strong>DIGITAL CHARGE</strong>
                      </span>{" "}
                      that your{" "}
                      <span className="text-[#137CFE] font-black">BRAND</span>{" "}
                      needs"
                    </p>
                  </em>
                </div>

                <p className="font-medium leading-[1.2] md:text-xl">
                  Influcon Digitals is where{" "}
                  <span className="text-[#FFEF13] font-bold">bold ideas</span>{" "}
                  meet{" "}
                  <span className="text-[#FFEF13] font-bold">
                    powerful execution
                  </span>
                  . We're a next-gen digital agency built for brands that don't
                  just want to fit in — they want to stand out.
                </p>
                <p className="font-medium leading-[1.2] md:text-xl">
                  From scroll-stopping content to razor-sharp strategies, we
                  help businesses grow loud and proud in a crowded digital
                  world. Whether you're launching a brand, scaling up your
                  socials, or redefining your online identity, we bring the
                  firepower to make your story unforgettable. Our crew is made
                  up of creators, designers, strategists, and digital wizards
                  who live and breathe the internet.{" "}
                  <span className="text-[#FFEF13] font-bold">
                    We don't do cookie-cutter. We do custom-crafted,
                    data-backed, results-driven creativity.
                  </span>
                </p>
              </div>

              {/* Welcome text */}
              <div className="mb-8">
                <p className="text-white md:text-2xl font-medium">
                  Welcome to{" "}
                  <span className="font-bold">Influcon Digitals.</span>
                </p>
              </div>

              {/* Final Quote */}
            </div>
          </div>
        </div>

        <div className="absolute left-10 top-[0] z-0 hidden xl:block xl:w-88 2xl:w-100  -rotate-10">
          <img
            src={handLeft}
            alt="hand left"
            className="relative left-[-35%]"
          />
        </div>
        <div>
          <img
            src={arrowBottomRight}
            alt="Arrow"
            className="absolute xl:right-45 xl:bottom-5 2xl:right-75 2xl:bottom-0 z-1 hidden xl:block xl:w-85 2xl:w-55"
          />
        </div>
        <div>
          <img
            src={notebookTop}
            alt="Notebook"
            className="absolute right-0 -top-7 z-0 hidden xl:block xl:w-145 2xl:w-w-135"
          />
        </div>
        <div className="absolute text-white text-2xl md:text-3xl font-bold italic xl:bottom-40 xl:left-115 2xl:bottom-15 2xl:left-118 ">
          "Where influence meets conversion."
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
