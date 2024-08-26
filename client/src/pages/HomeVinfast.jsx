import React from "react";
import vinfastLanding from "../assets/vinfastLanding.png";
const HomeVinfast = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-[#010101] overflow-hidden">
      <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full w-full relative lg:max-w-[1440px] max-w-[360px] mx-auto">
        <div className="col-span-12 row-span-2 hidden lg:grid place-items-center mt-10">
          <h1 className="text-center uppercase font-vinfast text-7xl text-white">
            <span className="text-red-600">break</span> your limit
          </h1>
        </div>

        <div className="col-span-12 row-span-8  grid place-items-center relative">
          <div className="absolute top-28 left-[50%] translate-x-[-50%] w-full z-0 lg:hidden">
            <h1 className="text-center uppercase font-vinfast text-4xl text-white">
              <span className="text-red-600">break</span> your limit
            </h1>
          </div>
          <img src={vinfastLanding} alt="" className="z-10" />
          <div className="absolute bottom-20 left-[50%] translate-x-[-50%] w-full z-0 lg:hidden">
            <h1 className="text-center uppercase font-vinfast text-4xl text-white">
              <span>Vinfast Lux A2.0</span>
            </h1>
          </div>
        </div>
        <div className="w-full h-[200px] absolute bottom-48 blur-xl bg-black/70 z-10 "></div>
        <div className="col-span-12 row-span-2 lg:hidden flex justify-between items-center gap-4 mt-10 absolute bottom-32 text-white font-roboto z-20 font-alata">
          <div className="max-w-[50%]">
            <h1 className="text-md  border-t border-white">
              Length x Width x Height
            </h1>
            <p className="mt-4 text-xs">4973 x 1900 x 1500 (mm)</p>
          </div>
          <div>
            <h1 className="text-md  border-t border-white">Engine</h1>
            <p className="mt-4  text-xs">2.0 x 174 HP</p>
          </div>
          <div>
            <h1 className="text-md  border-t border-white">Fuel Volume</h1>
            <p className="mt-4  text-xs">70L</p>
          </div>
        </div>
        <div className="col-span-12 row-span-2 hidden lg:flex justify-between items-center gap-4 mt-10 absolute bottom-20 text-white font-roboto z-20 font-alata">
          <div className="max-w-[30%]">
            <h1 className="text-3xl uppercase">lux a2.0</h1>
            <p className="mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              nesciunt eius. Praesentium dolorem ducimus cupiditate ut magni
              laudantium saepe, aut, minima amet quod quisquam id voluptatem
              eaque alias nemo nisi!
            </p>
          </div>
          <div>
            <h1 className="text-xl py-4  border-t border-white">
              Length x Width x Height
            </h1>
            <p className="mt-4">4973 x 1900 x 1500 (mm)</p>
          </div>
          <div>
            <h1 className="text-xl py-4  border-t border-white">Engine</h1>
            <p className="mt-4 ">2.0 x 174 HP</p>
          </div>
          <div>
            <h1 className="text-xl py-4  border-t border-white">Fuel Volume</h1>
            <p className="mt-4 ">70L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVinfast;
