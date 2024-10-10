import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* --left side-- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Tickets <br />
          Of Your Favorite Event
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-m font-light">
          <img className="w-28" src={assets.event_planning} alt="" />
          <p>
            Simply browse through our extensive list of trending events,
            <br className="hidden sm:block" />
            book your tickets hassle-free and even bookmark them
          </p>
        </div>
        <a
          onClick={() => {
            navigate("/events");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Browse events <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* --right side-- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.band_concert}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
