import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import monitor from "../assets/welcome-monitor.png";
import speaker from "../assets/welcome-speaker.png";

const Welcome = ({ navbarHeight }) => {
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
        <div className="pt-[75px] md:pt-[95px] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold text-blue-700 drop-shadow-lg z-20">
            Welcome to{" "}
            <span className="underline underline-offset-4">
              InfluCon Digitals
            </span>
          </h1>
          <div className="mt-1 flex gap-4 px-2 justify-center items-center">
            <p className="mt-4 mb-8 text-sm md:text-lg text-gray-800 font-medium max-w-2xl z-20 text-left">
              Your <strong>Growth Partner</strong> in the Digital Era
              <br />
              At InfluCon Digitals, we don’t just <strong>build brands</strong>—
              <em>we grow them</em>.<br />
              Based in the heart of Kolkata, we are a full-service digital
              marketing and web development agency helping businesses scale,
              connect, and thrive in the digital world.
            </p>
            <img src={monitor} alt="" className="hidden md:block md:w-55" />
          </div>
          <div className="flex gap-2 px-2 justify-center items-center">
            <img src={speaker} alt="" className="hidden md:block md:w-60" />
            <div>
              <p className="mt-1 mb-1 text-sm md:text-lg text-gray-800 font-medium max-w-2xl z-20 text-left">
                From launching bold start-ups to elevating established brands,
                we bring strategy, <strong>creativity</strong>, and{" "}
                <strong>performance</strong> together to create campaigns that
                convert and designs that leave <em>lasting impressions</em>.
              </p>
              <div className="flex space-x-5 md:space-x-8  text-blue-700 font-bold text-2xl md:text-4xl">
                <div>
                  <p>20+</p>
                  <p className=" font-medium text-[1.2rem] sm:text-xl md:text-2xl">
                    Clients
                  </p>
                </div>
                <div>
                  <p>100+</p>
                  <p className=" font-medium text-[1.2rem] sm:text-xl md:text-2xl">
                    Projects
                  </p>
                </div>
                <div>
                  <p>1000+</p>
                  <p className=" font-medium text-[1.2rem] sm:text-xl md:text-2xl">
                    Creatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
