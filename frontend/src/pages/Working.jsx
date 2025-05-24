import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import eyeIcon from "../assets/working-eye.png";
import rocketIcon from "../assets/working-rocket.png";
import targetIcon from "../assets/working-target.png";
import strategyIcon from "../assets/working-repeat.png";
import audience from "../assets/working-audience.png";
import mobile from "../assets/working-mobile.png";

const Working = ({ navbarHeight }) => {
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
        <div className="pt-[18px] md:pt-[40px] flex flex-col items-center justify-center px-4 max-w-5xl mx-auto">
          {/* How We Work Header */}
          <div className="w-full text-center">
            <h1 className="text-md sm:text-xl md:text-5xl font-bold text-[#035BFF] drop-shadow-lg z-20 mb-6">
              How <span className="double-underline">We Work</span>
            </h1>

            <div className="flex items-center justify-center mb-6">
              <p className="text-blue-600 font-bold text-sm md:text-2xl">
                We believe the best ideas don't start with a pitch —{" "}
                <em className="text-blue-600 font-black">
                  they start with listening
                </em>
                .
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row">
            {/* Left side: Process steps */}
            <div className="w-[75%]  font-bold px-20">
              <div className="flex ">
                <div className="flex-shrink-0 mr-4 pt-1">
                  <div className="bg-blue-600 rounded-full w-12 h-12 md:w-15 md:h-15 flex items-center justify-center">
                    <img
                      src={rocketIcon}
                      alt="Strategy Icon"
                      className="w-6 h-6 md:w-8 md:h-8 filter invert"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg font-normal leading-[1.2] text-[#005AE0]">
                    Before we dive into strategies or designs, we take time to
                    understand your brand — where you are now, where you want to
                    go, and what might be standing in the way.
                  </p>
                </div>
              </div>

              <div className="w-full border-l-2 border-blue-600 ml-7 h-20"></div>

              <div className="flex ">
                <div className="flex-shrink-0 mr-4 pt-1">
                  <div className="bg-blue-600 rounded-full p-4 w-12 h-12 md:w-15 md:h-15 flex items-center justify-center">
                    <img
                      src={targetIcon}
                      alt="Target Icon"
                      className="w-6 h-6 md:w-8 md:h-8 filter invert"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg font-normal leading-[1.2] text-[#005AE0]">
                    Once we're aligned, we build a plan that's made just for
                    you. No shortcuts, no trends for the sake of it — just
                    thoughtful work that clicks with your audience and delivers
                    real results.
                  </p>
                </div>
              </div>

              <div className="w-full border-l-2 border-blue-600 ml-7 h-20"></div>

              <div className="flex mb-10">
                <div className="flex-shrink-0 mr-4 pt-1">
                  <div className="bg-blue-600 rounded-full p-4 w-12 h-12 md:w-15 md:h-15 flex items-center justify-center">
                    <img
                      src={strategyIcon}
                      alt="Strategy Icon"
                      className="w-6 h-6 md:w-8 md:h-8 filter invert"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg font-normal leading-[1.2] text-[#005AE0]">
                    Once we're aligned, we build a plan that's made just for
                    you. No shortcuts, no trends for the sake of it — just
                    thoughtful work that clicks with your audience and delivers
                    real results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={eyeIcon}
            alt=""
            className="absolute left-0 top-[0] z-0 hidden xl:block 2xl:w-60 2xl:ml-30 2xl:mt-5 xl:w-55 xl:ml-25"
          />
        </div>
        <div>
          <img
            src={mobile}
            alt=""
            className="absolute left-0 bottom-0 z-0 hidden xl:block xl:w-90 "
          />
        </div>
        <div>
          <img
            src={audience}
            alt=""
            className="absolute right-0 top-[12%] z-0 hidden xl:block xl:w-135"
          />
        </div>
      </div>
    </div>
  );
};

export default Working;
