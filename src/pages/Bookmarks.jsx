import React, { useContext } from "react";
import { AppContext } from "../context/context";

const Bookmarks = () => {
  const { events } = useContext(AppContext);
  return (
    <div>
      <div>
        <p className="pb-3 mt-12 text-xl font-medium text-zinc-700 border-b">
          My Event Bookmarks
        </p>
        <div>
          {events.slice(0, 3).map((item, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img className="w-28 bg-indigo-50" src={item.poster} alt="" />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-md">{item.category}</p>
                <p className="mt-6 font-medium">Address:</p>
                <p>
                  {item.address.line1} - {item.city}
                </p>
                <div className="mt-6 flex flex-auto">
                  <p className="font-medium">Date & Time</p>
                  <span className="font-sm">
                    : {item.date} | {item.time}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end mb-4">
                <button className="border rounded-md px-12 py-2 mb-2 text-white bg-primary hover:scale-105 transition-all">
                  Buy Now
                </button>
                <button className="border rounded-md px-12 py-2 hover:scale-105 transition-all">
                  Remove Bookmark
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
