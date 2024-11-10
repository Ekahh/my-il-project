import React from "react";
import { useNavigate } from "react-router-dom";

function CardPanduan({ plants = [] }) {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    window.scrollTo(0, 0);
    navigate(route);
  };

  return (
    <div className="flex flex-wrap justify-center w-full">
      {plants.map((plant, index) => (
        <div
          key={index}
          className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-96 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 border"
          style={{ borderColor: "#91A079", borderWidth: "1px" }}
        >
          <img
            className="w-full h-40 object-cover"
            src={plant.image || "https://via.placeholder.com/150"}
            alt={plant.name || "Plant"}
          />
          <div className="p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-black text-center">
              {plant.name || "Unknown Plant"}
            </h2>
            <p className="mt-2 text-gray-600 text-sm h-20 overflow-hidden">
              {plant.careInstructions || "No care instructions available."}
            </p>
            <button
              onClick={() => handleNavigate("/tips-login")}
              className="mt-4 font-bold py-2 px-4 rounded bg-[#6D7E5E] border-2 border-[#91A079] text-white hover:bg-[#91A079] transition duration-300"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPanduan;
