import React from "react";
import tornpage from "../assets/tornPage.png";

const TornPage = () => {
  return (
    <div className="relative border">
      <img
        src={tornpage}
        alt="torn page 1"
        className="absolute top-0  w-full "
      />
      <img
        src={tornpage}
        alt="torn page 2"
        className="absolute top-3  w-full"
      />
      <img
        src={tornpage}
        alt="torn page 3"
        className="absolute top-6  w-full"
      />
    </div>
  );
};

export default TornPage;
