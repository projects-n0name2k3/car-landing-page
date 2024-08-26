import React from "react";
import mercedesImage from "../assets/mercedes.png";
import vinfastImage from "../assets/vinfast.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const url = window.location.pathname;
  const isVinfast = url === "/vinfast";
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black z-50">
      <header
        className={`lg:max-w-[1440px] max-w-[360px] mx-auto w-full h-16 select-none bg-[#030303] text-white font-header uppercase flex items-center justify-between px-4 z-50`}
      >
        <ul className="space-x-20 lg:block hidden">
          <li
            className="inline-block mx-4 cursor-pointer hover:opacity-60 xl:min-w-[150px] lg:min-w-[100px]"
            onClick={() => {
              navigate(
                `${
                  isVinfast
                    ? "vehicles/vinfast?filter=all&subgroup=all"
                    : "vehicles/mercedes?filter=all&group=all&subgroup=all"
                }`
              );
            }}
          >
            vehicle
          </li>
          <li
            onClick={() => {
              navigate(isVinfast ? "/" : "/vinfast");
            }}
            className="inline-block mx-4 cursor-pointer hover:opacity-60 xl:min-w-[150px] lg:min-w-[100px]"
          >
            {isVinfast ? "mercedes" : "vinfast"}
          </li>
        </ul>
        <div className="relative">
          <div className="drawer drawer-end absolute top-3 lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label className="swap swap-rotate" htmlFor="my-drawer-4">
                <input type="checkbox" />

                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className=" menu bg-base-200 z-50 text-base-content min-h-full w-80 p-4">
                <li
                  onClick={() => {
                    navigate(
                      `${
                        isVinfast
                          ? "vehicles/vinfast?filter=all&subgroup=all"
                          : "vehicles/mercedes?filter=all&group=all&subgroup=all"
                      }`
                    );
                  }}
                >
                  <a>Vehicels</a>
                </li>
                <li
                  onClick={() => {
                    navigate(isVinfast ? "/" : "/vinfast");
                  }}
                >
                  <a>{isVinfast ? "Mercedes" : "Vinfast"}</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Github</a>
                </li>
              </ul>
            </div>
          </div>
          <img src={isVinfast ? vinfastImage : mercedesImage} alt="" />
        </div>
        <ul className="space-x-20 lg:block hidden">
          <li className="inline-block mx-4 cursor-pointer hover:opacity-60 xl:min-w-[150px] lg:min-w-[100px]">
            contact
          </li>
          <li className="inline-block mx-4 cursor-pointer hover:opacity-60 xl:min-w-[150px] lg:min-w-[100px]">
            Github
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
