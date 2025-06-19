import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import bgCard from "../assets/services-bgcard.png";
import bulb from "../assets/services-handbulb.png";
import comment from "../assets/services-handcomments.png";
import puzzle from "../assets/services-handpuzzle.png";
import branding from "../assets/services-branding.png";
import social from "../assets/services-social.png";
import web from "../assets/services-web.png";
import media from "../assets/services-media.png";
import marketing from "../assets/services-marketing.png";
import seo from "../assets/services-seo.png";

const Services = ({ navbarHeight }) => {
  const offsetTop = navbarHeight * 1.2;

  return (
    <div className="w-full min-h-screen relative bg-transparent ">
      {/* Top transparent spacer */}
      <div style={{ height: offsetTop }} />

      {/* Paper area from below spacer to bottom */}
      <div
        className="relative w-full h-full"
        style={{
          minHeight: `calc(100vh - ${offsetTop}px)`,
          backgroundImage: `linear-gradient(rgba(217, 232, 246, 0.5), rgba(217, 232, 246, 0.5)),url(${bgPaper})`,
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
          <h1 className="text-2xl sm:text-xl md:text-5xl font-bold text-[#035BFF] drop-shadow-lg z-20 mb-6">
            Our <span className="double-underline">Services</span>
          </h1>

          {/* Services Grid */}
          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl z-10">
            {[
              { title: "Branding & Identity", img: branding },
              { title: "Social Media Marketing", img: social },
              { title: "Web Development", img: web },
              { title: "Visual Media", img: media },
              { title: "Marketing 360", img: marketing },
              { title: "SEO & Paid Performance", img: seo },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white shadow-xl rounded-md overflow-hidden
        w-[150px] h-[190px] sm:w-[182px] sm:h-[221px]
        mx-auto border-[3px] border-white p-2"
                style={{
                  boxShadow: "-2px 2px 4px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div
                  className="h-[82%] bg-black flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${bgCard})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-[50%] h-auto object-contain"
                  />
                </div>
                <div className="h-[22%] bg-white text-[0.6rem] sm:text-sm font-bold text-[#137CFE] flex items-center justify-center px-2 text-center">
                  {service.title}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative hands/elements (optional, based on your layout) */}
          <div className="absolute left-10 bottom-[20%] z-0 hidden xl:block xl:w-80 2xl:w-100 rotate-18 ">
            <img
              src={comment}
              alt="hand left"
              className="relative left-[-35%]"
            />
          </div>
          <div className="absolute right-0 top-5 z-0 hidden xl:block xl:w-75 2xl:x-95  overflow-hidden">
            <img
              src={puzzle}
              alt="hand right"
              className="-rotate-25 translate-x-12"
            />
          </div>
          <div className="absolute right-5 bottom-2 z-0 hidden xl:block xl:w-58 ">
            <img
              src={bulb}
              alt="hand right"
              className="relative bottom-[-40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
