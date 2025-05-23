import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/blackboard.png";
import influconCard from "../assets/contact-card.png";
import rocketImage from "../assets/contact-hand.png";
import last from "../assets/contact-last.png";

const Contact = ({ navbarHeight }) => {
  const offsetTop = navbarHeight * 1.2;

  return (
    <div className="w-full min-h-screen relative bg-transparent">
      {/* Top spacer to account for navbar height */}
      <div style={{ height: offsetTop }} />

      {/* Main content area */}
      <div
        className="relative w-full"
        style={{
          minHeight: `calc(100vh - ${offsetTop}px)`,
          backgroundImage: `url(${bgPaper})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          paddingBottom: "160px", // extra space for CTA to fit
        }}
      >
        {/* Torn strips */}
        <div
          className="absolute w-full h-[320px] pointer-events-none overflow-hidden"
          style={{ top: "-160px", zIndex: 10 }}
        >
          {[8, 12, 16].map((topOffset, index) => (
            <img
              key={index}
              src={tornTop}
              alt={`Torn Edge Layer ${index + 1}`}
              className={`min-w-[1024px] max-w-none absolute top-${topOffset} md:top-${
                topOffset - 1
              } left-1/2 -translate-x-1/2 scale-y-[1.25] md:scale-y-[1.75] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="pt-[18px] md:pt-[20px] flex justify-center px-4 max-w-[90rem]">
          <div>
            <img
              src={influconCard}
              alt="Digital Revolution Rocket"
              className="w-32 md:w-48 lg:w-130"
            />
          </div>
          <div className="w-full pt-20">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
              <div className="text-center text-white mb-8 lg:mb-0">
                <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg z-20">
                  Become part of the{" "}
                  <span
                    className="
      relative text-blue-500 mr-2
      after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2.5px] after:bg-white
      before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-8px] before:h-[2.5px] before:bg-white
    "
                  >
                    Digital
                  </span>
                  Revolution
                </h1>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-3xl text-white pl-7 pt-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Navigation</h3>
                <ul className="space-y-3">
                  {[
                    "Service",
                    "Agency",
                    "Case Study",
                    "Resource",
                    "Contact",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">License</h3>
                <ul className="space-y-3">
                  {["Privacy Policy", "Copyright", "Email Address"].map(
                    (item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Contact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-white-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-300">7439918045</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-white-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-300">
                      influcondigitals@gmail.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 mt-1 text-white-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">
                      71, Dover Terrace Ballygunge,
                      <br />
                      Kolkata, West Bengal 700019
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Fixed to Bottom */}
        <div
          className="absolute bottom-0 left-0 w-full bg-opacity-90 z-20 px-4 xl:h-40 2xl:h-30"
          style={{
            backgroundImage: `url(${last})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="h-1 bg-blue-700 "></div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-6  border-t border-white h-full">
            <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-4 md:mb-0">
              Ready to work with us ?
            </h2>
            <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full flex items-center hover:bg-blue-700 transition-colors">
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
          </div>
        </div>
      </div>

      {/* Right-side rocket/hand image */}
      <div className="absolute right-0 top-28 z-0 hidden xl:block xl:w-55 2xl:x-95 overflow-hidden">
        <img
          src={rocketImage}
          alt="hand right"
          className="-rotate-15 translate-x-8"
        />
      </div>
    </div>
  );
};

export default Contact;
