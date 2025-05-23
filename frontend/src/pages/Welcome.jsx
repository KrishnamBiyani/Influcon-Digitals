import tornTop from "../assets/tornPage.png";
import bgPaper from "../assets/white-bg.png";
import monitor from "../assets/welcome-monitor.png";
import speaker from "../assets/welcome-speaker.png";

const Welcome = ({ navbarHeight }) => {
  const offsetTop = navbarHeight * 1.2;

  return (
    <div className="w-full min-h-screen relative bg-transparent">
      {/* Spacer to offset for fixed navbar */}
      <div style={{ height: offsetTop }} />
      {/* Paper background area */}
      <div
        className="relative w-full h-full"
        style={{
          minHeight: `calc(100vh - ${offsetTop}px)`,
          backgroundImage: `linear-gradient(rgba(217, 232, 246, 0.5), rgba(217, 232, 246, 0.5)),url(${bgPaper})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Torn paper edge */}
        <div
          className="absolute w-full h-[320px] pointer-events-none overflow-hidden"
          style={{ top: "-160px", zIndex: 10 }}
        >
          {/* Torn edge layers for depth */}
          <img
            src={tornTop}
            alt="Torn Edge Layer 1"
            className="min-w-[1024px] max-w-none absolute top-8 md:top-0 left-1/2 -translate-x-1/2
              scale-y-[1.25] md:scale-y-[1.68] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />
          <img
            src={tornTop}
            alt="Torn Edge Layer 2"
            className="min-w-[1024px] max-w-none absolute top-12 md:top-7 left-1/2 -translate-x-1/2
              scale-y-[1.25] md:scale-y-[1.68] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />
          <img
            src={tornTop}
            alt="Torn Edge Layer 3"
            className="min-w-[1024px] max-w-none absolute top-16 md:top-14 left-1/2 -translate-x-1/2
              scale-y-[1.25] md:scale-y-[1.68] scale-x-[1] md:scale-x-[1.05] rotate-[1deg] pointer-events-none select-none"
          />
        </div>

        {/* Main Content */}
        <div className="pt-[75px] md:pt-[65px] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold text-blue-700 drop-shadow-lg z-20">
            Welcome to <span className="double-underline mr-2">InfluCon</span>
            <span className="double-underline">Digitals</span>
          </h1>

          {/* Monitor image and description */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-5">
            <p className="text-sm md:text-xl text-gray-800 font-medium max-w-2xl z-20 text-left">
              Your <strong>Growth Partner</strong> in the Digital Era
              <br />
              At InfluCon Digitals, we don’t just <strong>
                build brands
              </strong>{" "}
              — <em>we grow them</em>.
              <br />
              Based in the heart of Kolkata, we are a full-service digital
              marketing and web development agency helping businesses scale,
              connect, and thrive in the digital world.
            </p>
            <img
              src={monitor}
              alt="Monitor"
              className="hidden md:block w-[220px]"
            />
          </div>

          {/* Speaker image and stats */}
          <div className="mt-1 flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src={speaker}
              alt="Speaker"
              className="hidden md:block w-[240px]"
            />
            <div className="text-left">
              <p className="text-sm md:text-xl text-gray-800 font-medium max-w-2xl z-20">
                From launching bold start-ups to elevating established brands,
                we bring strategy, <strong>creativity</strong>, and{" "}
                <strong>performance</strong> together to create campaigns that
                convert and designs that leave <em>lasting impressions</em>.
              </p>
              <div className="flex space-x-5 md:space-x-8 mt-4 text-blue-700 font-bold text-2xl md:text-4xl">
                <div>
                  <p>20+</p>
                  <p className="text-base md:text-2xl font-medium">Clients</p>
                </div>
                <div>
                  <p>100+</p>
                  <p className="text-base md:text-2xl font-medium">Projects</p>
                </div>
                <div>
                  <p>1000+</p>
                  <p className="text-base md:text-2xl font-medium">Creatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End of Paper Content */}
    </div>
  );
};

export default Welcome;
