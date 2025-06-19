import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/blackboard.png";
import white from "../assets/white-bg.png";
import heartPhone from "../assets/testimonials-heart.png"; // The phone with heart icon
import megaphone from "../assets/testimonials-speaker.png"; // The megaphone icon
// Profile images for testimonials
import neetoProfile from "../assets/testimonials-neetu.png";
import adityaProfile from "../assets/testimonials-aditya.png";
import riyaProfile from "../assets/testimonials-riya.png";

const Testimonials = ({ navbarHeight }) => {
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
        <div className="pt-[18px] md:pt-[45px] flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
          {/* Client Testimonials Header */}
          <div className="w-full text-center sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white sm:mb-2 mt-5 sm:mt-4">
              <span
                className="relative inline-block
             after:content-['']
             after:absolute after:left-0 after:right-10 after:-bottom-1 after:h-1 after:bg-blue-600
             before:content-['']
             before:absolute before:left-0 before:right-0 before:-bottom-3 before:h-1 before:bg-blue-600"
              >
                <span className="no-underline">Client Test</span>
              </span>

              <span>imonials</span>
            </h1>
          </div>

          {/* Testimonial Cards */}
          <div className="w-[92%] grid grid-cols-1 md:grid-cols-3 -mt-18 gap-4 sm:gap-0 sm:mt-2 z-1 scale-[0.72] sm:scale-100">
            {/* Testimonial 1 */}
            <div
              className="rounded-xl p-5 shadow-xl h-auto xl:h-[270px] xl:w-[360px] md:h-70"
              style={{ backgroundImage: `url(${white})` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={neetoProfile}
                  alt="Neeto Kachalia"
                  className="w-10 h-10 md:w-9 md:h-9 rounded-full mr-3"
                />
                <span className="font-bold text-[#005AE0] text-lg">
                  Neeto Kachalia
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl md:text-xl">
                How Influcon helped my business go viral.
              </h3>
              <p className="text-[#313131] text-base md:text-sm leading-[1.2]">
                As a leading digital marketing agency, we partnered with
                Innovate Corp to elevate their brand presence. Our comprehensive
                strategies have driven remarkable results.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div
              className="rounded-xl p-5 shadow-xl h-auto xl:h-[270px] xl:w-[360px] md:h-70"
              style={{ backgroundImage: `url(${white})` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={adityaProfile}
                  alt="Aditya Sharma"
                  className="w-10 h-10 md:w-9 md:h-9 rounded-full mr-3"
                />
                <span className="font-bold text-[#005AE0] text-lg">
                  Aditya Sharma
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl md:text-xl">
                How DigitalBoost transformed my startup's reach.
              </h3>
              <p className="text-[#313131] text-base md:text-sm leading-[1.2]">
                As a premier digital marketing firm, we collaborated with
                INFLUCON. to enhance their online visibility. Our tailored
                strategies have yielded outstanding outcomes.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div
              className="rounded-xl p-5 shadow-xl h-auto xl:h-[270px] xl:w-[360px] md:h-70"
              style={{ backgroundImage: `url(${white})` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={riyaProfile}
                  alt="Riya Malhotra"
                  className="w-9 h-9 md:w-9 md:h-9 rounded-full mr-3"
                />
                <span className="font-bold text-[#005AE0] text-lg">
                  Riya Malhotra
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl md:text-xl">
                How my brand skyrocketed with Influcon's expertise.
              </h3>
              <p className="text-[#313131] text-base md:text-sm leading-[1.2]">
                As a top-tier digital marketing agency, we collaborated with
                Visionary Tech to amplify their market presence. Our innovative
                strategies have achieved exceptional results.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center ">
            <h2 className="text-2xl md:text-4xl font-bold text-white mr-6">
              Ready to work with us ?
            </h2>
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full flex items-center mt-4 md:mt-0">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Megaphone icon on the right */}
            <div className="hidden xl:block ml-8">
              <img src={megaphone} alt="Megaphone" className="w-28 lg:w-55" />
            </div>
          </div>

          <div className="absolute right-0 top-0 z-0 hidden xl:block xl:w-68 2xl:w-88  overflow-hidden">
            <img
              src={heartPhone}
              alt="hand right"
              className="translate-x-12 -rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
