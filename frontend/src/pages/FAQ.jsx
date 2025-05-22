import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import handshakeImage from "../assets/FAQ-handshake.png";

const FAQ = ({ navbarHeight }) => {
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
        <div className=" pt-[18px] md:pt-[50px] flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Header, Description, and Contact */}
            <div className="w-full lg:w-1/2 ">
              {/* Header */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Digital Marketing FAQs
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                Find clear, insightful answers to the most common questions
                about digital marketing. Our comprehensive educational resource
                covers everything from frequently asked questions to help our
                clients.
              </p>

              {/* Contact Button */}
              <button className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full text-lg mb-8 hover:bg-blue-700 transition-colors">
                CONTACT US
              </button>

              {/* Handshake Image */}
              <div className="justify-center lg:justify-start border lg:block hidden">
                <img
                  src={handshakeImage}
                  alt="Business Handshake with Laptop"
                  className="w-full"
                />
              </div>
            </div>

            {/* Right Side - FAQs and Contact Form */}
            <div className="w-full lg:w-1/2 mt-6">
              {/* Top Right Text */}

              {/* FAQ Questions */}
              <div className="space-y-4 mb-8">
                {/* FAQ 1 */}
                <div className="border-b border-t border-gray-400 pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">
                      Why is digital marketing important for my business?
                    </h3>
                    <span className="text-2xl font-bold">+</span>
                  </div>
                  <p className="text-sm  mt-2">
                    Digital marketing allows businesses to reach and engage with
                    a broader audience, generate leads, drive website traffic,
                    increase brand awareness, and ultimately grow their customer
                    base through targeted marketing efforts, and enables
                    businesses to adapt to changing consumer behavior and market
                    trends.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="border-b border-gray-400 pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">
                      How can digital marketing help improve my website's
                      visibility?
                    </h3>
                    <span className="text-2xl font-bold">+</span>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="border-b border-gray-400 pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-medium">
                      How long does it take to see results from digital
                      marketing efforts?
                    </h3>
                    <span className="text-2xl font-bold">+</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-lg p-6">
                <textarea
                  placeholder="Type message here......"
                  className="w-full h-24 bg-transparent border-none text-white placeholder-gray-400 resize-none focus:outline-none"
                />
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-blue-400">
                    We will answer your questions via email within 48 hours.
                  </p>
                  <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full flex items-center hover:bg-blue-700 transition-colors">
                    Send Message
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
          </div>
        </div>

        <div className="absolute text-left mb-8 top-7 right-0">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 ">
            TOGETHER
          </h2>
          <h5 className="text-lg md:text-2xl">WE CAN MAKE A</h5>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800 ">
            DIFFERENCE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
