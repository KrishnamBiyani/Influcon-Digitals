import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import eyeIcon from "../assets/working-eye.png"; // Replace with your eye icon
import rocketIcon from "../assets/working-rocket.png"; // Replace with your rocket icon
import targetIcon from "../assets/working-target.png"; // Replace with your target/headset icon
import strategyIcon from "../assets/working-repeat.png"; // Replace with your strategy icon
import audience from "../assets/working-audience.png"; // Replace with your audience image
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
        <div className="pt-[18px] md:pt-[40px] flex flex-col items-center justify-center px-4 max-w-5xl mx-auto">
          {/* How We Work Header */}
          <div className="w-full text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-600 mb-2 flex items-center justify-center">
              <span className="mr-2">How</span>
              <span className="underline text-blue-600 font-bold">We work</span>
            </h1>

            <div className="flex items-center justify-center mb-6">
              <p className="text-blue-600 font-bold text-sm md:text-2xl">
                We believe the best ideas don't start with a pitch —{" "}
                <em className="text-blue-600 font-bold">
                  they start with listening
                </em>
                .
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row">
            {/* Left side: Process steps */}
            <div className="w-[75%]  text-blue-600 font-bold px-10">
              <div className="flex mb-10">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <img
                      src={rocketIcon}
                      alt="Strategy Icon"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg">
                    Before we dive into strategies or designs, we take time to
                    understand your brand — where you are now, where you want to
                    go, and what might be standing in the way.
                  </p>
                </div>
              </div>

              <div className="w-full border-l-2 border-blue-600 ml-8 h-10"></div>

              <div className="flex mb-10">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <img
                      src={targetIcon}
                      alt="Target Icon"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg">
                    Once we're aligned, we build a plan that's made just for
                    you. No shortcuts, no trends for the sake of it — just
                    thoughtful work that clicks with your audience and delivers
                    real results.
                  </p>
                </div>
              </div>

              <div className="w-full border-l-2 border-blue-600 ml-8 h-10"></div>

              <div className="flex mb-10">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <img
                      src={strategyIcon}
                      alt="Strategy Icon"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-lg">
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
            className="absolute left-0 top-[0] z-0 hidden md:block md:w-70 ml-30 -mt-5"
          />
        </div>
        <div>
          <img
            src={mobile}
            alt=""
            className="absolute left-0 bottom-[0] z-0 hidden md:block md:w-100 -mb-10"
          />
        </div>
        <div>
          <img
            src={audience}
            alt=""
            className="absolute right-0 top-[15%] z-0 hidden md:block md:w-150 "
          />
        </div>
      </div>
    </div>
  );
};

export default Working;
