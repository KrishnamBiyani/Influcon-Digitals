import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import bgCard from "../assets/services-bgcard.png";
import bulb from "../assets/services-handbulb.png";
import comment from "../assets/services-handcomments.png";
import puzzle from "../assets/services-handpuzzle.png";

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
        <div className="pt-[18px] md:pt-[35px] flex flex-col items-center justify-center text-center px-4">
          {/* Title */}
          <h1 className="text-md sm:text-xl md:text-4xl font-bold text-[#035BFF] drop-shadow-lg z-20 mb-6">
            Our <span className="underline decoration-[#035BFF]">Services</span>
          </h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl z-10">
            {[
              { title: "Branding & Identity", img: "branding.png" },
              { title: "Social Media Marketing", img: "social.png" },
              { title: "Web Development", img: "web.png" },
              { title: "Visual Media", img: "visual.png" },
              { title: "Marketing 360", img: "marketing.png" },
              { title: "SEO & Paid Performance", img: "seo.png" },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white shadow-xl  rounded-md overflow-hidden w-[210px] h-[225px] mx-auto border-[3px] border-white p-2"
              >
                <div
                  className="h-[75%] bg-black flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${bgCard})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={bgPaper}
                    alt={service.title}
                    className="w-[50%] h-auto object-contain"
                  />
                </div>
                <div className="h-[25%] bg-white text-md font-bold text-[#035BFF] flex items-center justify-center px-2 text-center">
                  {service.title}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative hands/elements (optional, based on your layout) */}
          <div className="absolute left-0 bottom-[30%] z-0 hidden xl:block xl:w-100 rotate-18 -ml-10">
            <img src={comment} alt="hand left" />
          </div>
          <div className="absolute right-0 -top-5 z-0 hidden xl:block xl:w-95 -rotate-25 -mr-20">
            <img src={puzzle} alt="hand right" />
          </div>
          <div className="absolute right-5 -bottom-2 z-0 hidden xl:block xl:w-58 ">
            <img src={bulb} alt="hand right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
