import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import black from "../assets/blackboard.png";
import handshakeImage from "../assets/FAQ-handshake.png";
import text from "../assets/FAQ-text.png";

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
        <div className=" pt-[18px] md:pt-[50px] flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Header, Description, and Contact */}
            <div className="w-full xl:w-[42%] 2xl:w-[45%] ">
              {/* Header */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Digital Marketing FAQs
              </h1>

              {/* Description */}
              <p className="text-base md:text-base mb-6 leading-[1.8] text-[#005AE0] font-medium">
                As a leading digital marketing agency, we are dedicated to
                providing comprehensive educational resources and answering
                frequently asked questions to help our clients.
              </p>

              {/* Contact Button */}
              <button
                className="text-white font-medium py-2 px-6 rounded-full flex items-center transition-colors hover:bg-blue-700 mb-8"
                style={{
                  background: "rgba(19, 124, 254, 1)", // custom darker blue
                  boxShadow: `inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 4px 0px 4px rgba(0, 0, 0, 0.25)`,
                }}
              >
                CONTACT US
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

            {/* Right Side - FAQs and Contact Form */}
            <div className=" w-full xl:w-[45%] 2xl:w-[48%] mt-6">
              {/* FAQ Questions */}
              <div className="space-y-4 mb-8">
                {/* FAQ 1 */}
                <div className="border-b border-t border-gray-400 pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-xl  text-[#010205] font-[700]">
                      Why is digital marketing important for my business?
                    </h3>
                    <span className="text-2xl font-bold">+</span>
                  </div>
                  <p className="text-sm leading-[1.2] mt-2 text-[#878C91]">
                    Digital marketing allows businesses to reach and engage with
                    a wider audience, generate leads, drive website traffic, and
                    increase brand visibility. It provides measurable results,
                    allows for targeted marketing efforts, and enables
                    businesses to adapt and optimize their strategies based on
                    data and insights.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="border-b border-gray-400 pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-xl  text-[#010205] font-[700]">
                      How can digital marketing help improve my website's
                      visibility?
                    </h3>
                    <span className="text-2xl font-bold">+</span>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="border-b border-gray-400 pb-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-xl  text-[#010205] font-[700]">
                      How long does it take to see results from digital
                      marketing efforts?
                    </h3>
                    <span className="text-2xl font-bold">+</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="rounded-lg p-6"
                style={{ backgroundImage: `url(${black})` }}
              >
                <textarea
                  placeholder="Type message here......"
                  className="w-full h-12 bg-transparent border-none text-white placeholder-gray-400 resize-none focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm font-normal text-[#005AE0]">
                  We will answer your questions via email within 48 hours.
                </p>
                <button
                  className="text-white font-medium py-2 px-6 rounded-full flex items-center transition-colors hover:bg-blue-700"
                  style={{
                    background: "rgba(19, 124, 254, 1)", // custom darker blue
                    boxShadow: `inset 0px 4px 4px rgba(0, 0, 0, 0.25), inset 4px 0px 4px rgba(0, 0, 0, 0.25)`,
                  }}
                >
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
          <div className="absolute right-0 top-12 z-0 hidden xl:block xl:w-50 2xl:w-42  overflow-hidden">
            <img src={text} alt="hand right" className="" />
          </div>
          <div className="absolute xl:left-14 xl:bottom-6 2xl:left-30 2xl:bottom-8 z-0 hidden xl:block xl:w-148 2xl:w-110  overflow-hidden">
            <img src={handshakeImage} alt="hand right" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
