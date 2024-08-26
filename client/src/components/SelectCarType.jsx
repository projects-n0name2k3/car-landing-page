import React, { useEffect, useState } from "react";
import { sedan, suv, offroad, roadster } from "../utils/data";
const SelectCarType = ({ handleGetActiveData }) => {
  const [active, setActive] = useState("sedan");
  const data = ["sedan", "suv", "offroad", "roadster"];

  useEffect(() => {
    switch (active) {
      case "sedan":
        handleGetActiveData(sedan);
        break;
      case "suv":
        handleGetActiveData(suv);
        break;
      case "offroad":
        handleGetActiveData(offroad);
        break;
      case "roadster":
        handleGetActiveData(roadster);
        break;
      default:
        handleGetActiveData(sedan);
    }
  }, [active]);

  return (
    <div className="flex uppercase font-header text-neutral-500 mt-12 w-full justify-between">
      <div className="carousel w-full lg:hidden">
        <div
          id="slide1"
          className="carousel-item relative w-full grid place-items-center"
        >
          <div
            className={`w-[120px] py-4 text-center text-white cursor-pointer`}
          >
            sedan
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              onClick={() => {
                setActive("roadster");
              }}
            >
              ❮
            </a>
            <a
              href="#slide2"
              onClick={() => {
                setActive("suv");
              }}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full grid place-items-center"
        >
          <div
            className={`w-[120px] py-4 text-center text-white cursor-pointer`}
          >
            suv
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              onClick={() => {
                setActive("sedan");
              }}
            >
              ❮
            </a>
            <a
              href="#slide3"
              onClick={() => {
                setActive("offroad");
              }}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full grid place-items-center"
        >
          <div
            className={`w-[120px] py-4 text-center text-white cursor-pointer`}
          >
            offroad
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              onClick={() => {
                setActive("suv");
              }}
            >
              ❮
            </a>
            <a
              href="#slide4"
              onClick={() => {
                setActive("roadster");
              }}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full grid place-items-center"
        >
          <div
            className={`w-[120px] py-4 text-center text-white cursor-pointer`}
          >
            roadster
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              onClick={() => {
                setActive("offroad");
              }}
            >
              ❮
            </a>
            <a
              href="#slide1"
              onClick={() => {
                setActive("sedan");
              }}
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full items-center justify-center">
        {data.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer py-4 min-w-[120px] text-center font-bold ${
              active === item
                ? "text-white border-b-2  border-white"
                : "text-neutral-500"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCarType;
