import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/blackboard.png";
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
               scale-y-[1.25] md:scale-y-[1.75] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />

          {/* Layer 2 */}
          <img
            src={tornTop}
            alt="Torn Edge Layer 2"
            className="min-w-[1024px] max-w-none absolute top-12 md:top-7 left-1/2 -translate-x-1/2
               scale-y-[1.25] md:scale-y-[1.75] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />

          {/* Layer 3 */}
          <img
            src={tornTop}
            alt="Torn Edge Layer 3"
            className="min-w-[1024px] max-w-none absolute top-16 md:top-14 left-1/2 -translate-x-1/2
               scale-y-[1.25] md:scale-y-[1.75] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />
        </div>

        {/* Content starts after the torn strip */}
        <div className="pt-[18px] md:pt-[50px] flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
          {/* Client Testimonials Header */}
          <div className="w-full text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Client Testimonials
            </h1>
            <div className="w-40 h-1 bg-blue-600 mx-auto"></div>

            {/* Phone with heart icon - positioned to the top right */}
            <div className="absolute hidden xl:block -right-15 top-0 rotate-6 ">
              <img
                src={heartPhone}
                alt="Love Our Service"
                className="w-20 md:w-32 lg:w-80"
              />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 rounded-xl p-6  shadow-xl h-auto md:h-80">
              <div className="flex items-center mb-4">
                <img
                  src={neetoProfile}
                  alt="Neeto Kachalia"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3"
                />
                <span className="font-medium text-gray-800 text-lg">
                  Neeto Kachalia
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl md:text-[1.3rem]">
                How Influcon helped my business go viral.
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                As a leading digital marketing agency, we partnered with
                Influcon Digital to revise their brand presence. The results
                were beyond our expectations and goals.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 rounded-xl p-6   shadow-xl h-auto md:h-80">
              <div className="flex items-center mb-4">
                <img
                  src={adityaProfile}
                  alt="Aditya Sharma"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3"
                />
                <span className="font-medium text-gray-800 text-lg">
                  Aditya Sharma
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl md:text-[1.3rem]">
                How DigitalBoost transformed my startup's reach.
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                As a premier digital marketing firm, we collaborated with
                InfluCon to enhance online visibility. Our partnership led to
                exceptional growth and market results.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-100 rounded-xl p-6   shadow-xl h-auto md:h-80">
              <div className="flex items-center mb-4">
                <img
                  src={riyaProfile}
                  alt="Riya Malhotra"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3"
                />
                <span className="font-medium text-gray-800 text-lg">
                  Riya Malhotra
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl md:text-[1.3rem]">
                How my brand skyrocketed with Influcon's expertise.
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                As a top-tier digital marketing agency, we collaborated with
                Influcon Digi to amplify their market presence. The results
                achieved exceeded our expectations and goals.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center mb-12">
            <h2 className="text-2xl md:text-5xl font-bold text-white mr-6">
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
              <img src={megaphone} alt="Megaphone" className="w-28 lg:w-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
