import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TrendingEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => {
        console.log(response.data); // Check the API response here
        setEvents(response.data); // Adjust this based on the response structure
        setFilterEve(response.data); // Initially, set all events as filtered events
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Trending Events</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trending events.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {events.slice(0, 5).map((item, index) => (
          <div
            onClick={() => navigate("/event/" + item.id)}
            className="overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-50 rounded-xl" src={item.poster} />
            <div className="p-4">
              <div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <div className="flex justify-between items-center gap-2 text-gray-600 text-sm text-center">
                  <p>{item.city}</p>
                  <p>Rs.{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/events");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default TrendingEvents;
