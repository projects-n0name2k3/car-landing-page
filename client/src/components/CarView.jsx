import React from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { PiEngine, PiLightningLight, PiGasCanThin } from "react-icons/pi";
import { BsSpeedometer2, BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
const CarView = ({ activeData }) => {
  return (
    <div className="carousel w-full lg:mt-28 mt-12 relative">
      {activeData.map((data, index) => (
        <div
          key={index}
          id={`slide1${index + 1}`}
          className="carousel-item relative w-full grid place-items-center z-20"
        >
          <span className="hidden lg:block font-roboto font-thin text-xl lg:text-2xl tracking-widest select-none">
            {data.name}
          </span>
          <div className="flex items-center justify-between">
            <div className="w-[150px] h-[300px]  lg:flex flex-col justify-center gap-8 font-roboto hidden pt-28">
              <div className="flex items-center  gap-3">
                <BsSpeedometer2 size={40} />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Top Speed</span>
                  <span className="font-bold">{data.speed} Km/h</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PiLightningLight size={40} />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Peak Power</span>
                  <span className="font-bold">{data.power} HP</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PiEngine size={40} />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Engine</span>
                  <span
                    className={`font-bold ${
                      data.engine.includes("Motors") && "text-xs"
                    }`}
                  >
                    {data.engine}
                  </span>
                </div>
              </div>
            </div>
            <img
              src={data.image}
              className="lg:w-[600px] lg:h-[400px]  w-[300px] h-[200px]"
            />
            <div className="w-[150px] h-[300px]  lg:flex flex-col justify-center gap-8 font-roboto hidden pt-28">
              <div className="flex items-center  gap-3">
                <BsFuelPump size={40} />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Fuel Type</span>
                  <span className="font-bold">{data.fuel}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PiGasCanThin size={40} />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Tank Fuel</span>
                  <span className="font-bold">
                    {data.tank} {data.fuel === "Electric" ? "KwH" : "L"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GiGearStickPattern size={40} />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Gear</span>
                  <span className="font-bold">{data.gear}</span>
                </div>
              </div>
            </div>
          </div>
          <span className="lg:hidden font-roboto font-thin text-lg lg:text-2xl tracking-widest select-none">
            {data.name}
          </span>
          <div className="w-full flex  justify-between items-center font-roboto lg:hidden mt-4">
            <div className="flex items-center  gap-3">
              <BsSpeedometer2 size={24} />
              <div className="flex flex-col gap-1">
                <span className="text-sm">Top Speed</span>
                <span className="font-bold">{data.speed} Km/h</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PiLightningLight size={24} />
              <div className="flex flex-col gap-1">
                <span className="text-sm">Peak Power</span>
                <span className="font-bold">{data.power} HP</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PiEngine size={24} />
              <div className="flex flex-col gap-1">
                <span className="text-sm">Engine</span>
                <span
                  className={`font-bold ${
                    data.engine.includes("Motors") && "text-xs"
                  }`}
                >
                  {data.engine}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide1${index === 0 ? activeData.length : index}`}
              className="btn btn-circle bg-transparent border-2 border-white hover:bg-transparent hover:border-2 hover:border-white"
            >
              ❮
            </a>
            <a
              href={`#slide1${index === activeData.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle bg-transparent border-2 border-white hover:bg-transparent hover:border-2 hover:border-white"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
      <div className="absolute lg:top-4 top-0 tracking-widest uppercase font-bold text-5xl z-10 xl:text-[130px] lg:text-[100px] lg:left-[50%] left-[20%] lg:translate-x-[-50%] text-[#BEBCBC]">
        <span>s-class</span>
      </div>
    </div>
  );
};

export default CarView;
