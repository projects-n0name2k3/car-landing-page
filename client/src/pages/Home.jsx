import React, { useState } from "react";
import { sedan, suv, offroad, roadster } from "../utils/data";
import SelectCarType from "../components/SelectCarType";
import CarView from "../components/CarView";

const Home = () => {
  const [activeData, setActiveData] = useState(sedan);
  const handleGetActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-[#010101]">
      <div className="flex flex-col items-center justify-center gap-4  lg:max-w-[1440px] max-w-[360px] mx-auto">
        <SelectCarType handleGetActiveData={handleGetActiveData} />
        <div className="w-full flex justify-between lg:items-center text-white">
          <CarView activeData={activeData} />
        </div>
        <button className="uppercase text-white font-bold tracking-widest px-8 py-4  lg:p-4 border-2 border-white font-header rounded-2xl mt-8 hover:opacity-60">
          explore
        </button>
      </div>
    </div>
  );
};

export default Home;
