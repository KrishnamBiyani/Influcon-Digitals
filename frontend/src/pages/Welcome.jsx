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
        className="relative w-full"
        style={{
          minHeight: `calc(100vh - ${offsetTop}px)`,
          backgroundImage: `url(${bgPaper})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Torn strips pulled slightly above paper edge */}
        <div
          className="absolute w-full h-[160px] pointer-events-none"
          style={{ top: "-80px", zIndex: 10 }}
        >
          <img
            src={tornTop}
            alt="Torn Edge Layer 1"
            className="w-full absolute -top-1 left-0 scale-y-200 scale-x-105
            rotate-1 overflow-x-hidden"
          />
          <img
            src={tornTop}
            alt="Torn Edge Layer 2"
            className="w-full absolute top-4 left-0  scale-y-200 scale-x-105
            rotate-1 overflow-x-hidden"
          />
          <img
            src={tornTop}
            alt="Torn Edge Layer 3"
            className="w-full absolute top-11 left-0  scale-y-200 scale-x-105 rotate-1 overflow-x-hidden"
          />
        </div>

        {/* Content starts after the torn strip */}
        <div className="pt-[95px] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 drop-shadow-lg z-20">
            Welcome to{" "}
            <span className="underline underline-offset-4">
              InfluCon Digitals
            </span>
          </h1>
          <div className=" mt-1 flex gap-4 px-2 justify-center items-center">
            <p className="mt-4 mb-8 text-md md:text-lg text-gray-800 font-medium max-w-2xl z-20 text-left">
              Your <strong>Growth Partner</strong> in the Digital Era
              <br />
              At InfluCon Digitals, we don’t just <strong>build brands</strong>—
              <em>we grow them</em>.<br />
              Based in the heart of Kolkata, we are a full-service digital
              marketing and web development agency helping businesses scale,
              connect, and thrive in the digital world.
            </p>
            <img src={monitor} alt="" className="w-55" />
          </div>
          <div className="flex pr-7 gap-2 justify-center ">
            <img src={speaker} alt="" className="w-60" />
            <div>
              <p className="mt-4 mb-8 text-md md:text-lg text-gray-800 font-medium max-w-2xl z-20 text-left">
                From launching bold start-ups to elevating established brands,
                we bring strategy, <strong>creativity</strong>, and{" "}
                <strong>performance</strong> together to create campaigns that
                convert and designs that leave <em>lasting impressions</em>.
              </p>
              <div className="flex space-x-8  text-blue-700 font-bold text-4xl">
                <div>
                  <p>20+</p>
                  <p className=" font-medium text-2xl">Clients</p>
                </div>
                <div>
                  <p>100+</p>
                  <p className=" font-medium text-2xl">Projects</p>
                </div>
                <div>
                  <p>1000+</p>
                  <p className=" font-medium text-2xl">Creatives</p>
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
