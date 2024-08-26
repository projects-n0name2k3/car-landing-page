import React, { useEffect, useState } from "react";
import Car from "../components/Car";
import { useParams } from "react-router-dom";
import hatchbackLogo from "../assets/hatchback.svg";
const VehiclePage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [active, setActive] = useState(urlParams.get("group") || "all");
  const [cars, setCars] = useState([]);
  const { brand } = useParams();
  const [activeBodyType, setActiveBodyType] = useState(
    urlParams.get("subgroup") || "all"
  );
  const [filter, setFilter] = useState({
    filter: urlParams.get("filter") || "all",
    group: urlParams.get("group") || "all",
    subgroup: urlParams.get("subgroup") || "all",
  });

  const handleGetData = async (query) => {
    const response = await fetch(
      `http://localhost:5000/api/vehicles/${brand}/search?${query}`
    );
    const data = await response.json();
    setCars(data);
    return data;
  };
  const handleSetURL = async (key, value) => {
    if (key === "filter") {
      if (urlParams.get("filter") === "electric") {
        urlParams.set("filter", "all");
        setFilter({ ...filter, filter: "all" });
      } else {
        urlParams.set("filter", "electric");
        setFilter({ ...filter, filter: "electric" });
      }
    } else if (key === "reset") {
      urlParams.set("filter", "all");
      if (brand === "mercedes") urlParams.set("group", "all");
      urlParams.set("subgroup", "all");
      setActive("all");
      setActiveBodyType("all");
      setFilter({
        filter: "all",
        group: "all",
        subgroup: "all",
      });
    } else {
      urlParams.set(key, value);

      setFilter({ ...filter, [key]: value });
    }

    const sortedParams = new URLSearchParams([...urlParams.entries()].sort());
    const sortedUrl = `${window.location.pathname}?${sortedParams.toString()}`;
    window.history.replaceState({}, "", sortedUrl);
    const data = handleGetData(sortedParams.toString());
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleGetData(urlParams.toString());

      if (data.type === "reset") {
        window.history.replaceState(
          {},
          "",
          `?filter=all${brand === "mercedes" && "&group=all"}&subgroup=all`
        );
        handleSetURL("reset");
        await handleGetData(
          `?filter=all${brand === "mercedes" && "&group=all"}&subgroup=all`
        );
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await handleGetData(urlParams.toString());

      if (data.type === "reset") {
        window.history.replaceState(
          {},
          "",
          `?filter=all${brand === "mercedes" && "&group=all"}&subgroup=all`
        );
        handleSetURL("reset");
        await handleGetData(
          `?filter=all${brand === "mercedes" && "&group=all"}&subgroup=all`
        );
      }
    };
    fetchData();
  }, [brand]);
  console.log(cars);
  return (
    <div className="font-akshar bg-white flex flex-col gap-4 w-full h-full lg:max-w-[1440px] max-w-[360px] mx-auto relative">
      <div className=" flex items-center py-12 justify-center lg:justify-start">
        <span className="text-black text-3xl uppercase font-semibold tracking-widest">
          Our Vehicles
        </span>
      </div>
      <div
        className={`${
          brand === "mercedes" &&
          "lg:flex items-center py-8 sticky top-0 bg-white"
        } hidden`}
      >
        <ul
          className={`${
            brand === "mercedes"
              ? "flex text-black text-lg shadow-2xl"
              : "hidden"
          } `}
        >
          <li
            className={`${
              active === "all" ? "bg-black text-white" : "bg-white"
            } border border-black border-r-0 px-4 py-2 cursor-pointer min-w-[160px] grid place-items-center`}
            onClick={() => {
              handleSetURL("group", "all");
              setActive("all");
            }}
          >
            <a>All Models</a>
          </li>

          <li
            className={`${
              active === "amg" ? "bg-black text-white" : "bg-white"
            } border border-black border-r-0 px-4 py-2 cursor-pointer min-w-[160px] grid place-items-center`}
            onClick={() => {
              handleSetURL("group", "amg");

              setActive("amg");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 79 8"
              width="80"
              height="40"
              className={`${active === "amg" && "fill-current text-white"}`}
            >
              <path d="M78.048 3.413a.456.456 0 0 0-.447-.446h-7.353a.456.456 0 0 0-.447.446v.639c0 .239.208.462.447.462h4.626c.303 0 .287.144.287.495v.08c0 .35.016.43-.287.43h-9.396a.456.456 0 0 1-.446-.447V2.36c0-.239.191-.446.447-.446H77.602c.238 0 .446-.207.446-.447V.447A.456.456 0 0 0 77.6 0H62.672a.456.456 0 0 0-.447.447v6.635c0 .24.207.447.446.447H77.601c.24 0 .447-.208.447-.447V3.35M54.026 5.248c-.208.127-.351.255-.606.255H51.52c-.239 0-.398-.128-.606-.255l-3.652-2.313c-.208-.128-.383-.032-.383.207v3.94c0 .24-.208.447-.447.447h-1.898a.456.456 0 0 1-.447-.447V.447c0-.24.208-.447.447-.447h2.042c.239 0 .398.112.606.24L52.16 3.46a.553.553 0 0 0 .622 0L57.758.24c.208-.127.351-.239.606-.239h2.042c.24 0 .447.207.447.447v6.635c0 .24-.208.447-.447.447h-1.898a.456.456 0 0 1-.447-.447V3.158c0-.239-.175-.335-.382-.207l-3.653 2.297ZM32.556 1.914c-.128 0-.24.096-.32.207l-1.18 1.516c-.08.111-.031.207.096.207h8.486c.271 0 .287-.096.287-.367V2.425c0-.367.016-.495-.287-.495h-7.082v-.016ZM27.61 7.53h-2.456c-.192 0-.272-.176-.176-.335l5.328-6.89C30.434.143 30.61 0 30.8 0h11.437c.303 0 .495.255.495.558v6.524c0 .24-.208.447-.447.447H40.372a.456.456 0 0 1-.447-.447v-.94c0-.272-.032-.368-.287-.368H29.621c-.192 0-.32.128-.447.287l-.032.032-.765.99c-.192.238-.463.446-.702.446h-.064ZM22.587 7.529c.239 0 .51-.192.701-.447l5.12-6.635C28.6.207 28.505 0 28.266 0h-1.02c-.192 0-.368.128-.495.303l-5.328 6.89c-.08.16 0 .336.176.336h.989ZM19.013 7.529c.24 0 .51-.192.702-.447l5.12-6.635c.192-.24.096-.447-.143-.447H23.24c-.19 0-.366.128-.494.303l-5.328 6.89c-.08.16 0 .336.176.336h1.42ZM13.175 7.529c-.191 0-.27-.176-.175-.335l5.328-6.89c.127-.16.303-.304.494-.304h2.122c.239 0 .335.207.143.447l-5.136 6.635c-.191.24-.463.447-.702.447h-2.074ZM8.31 7.529c-.191 0-.27-.176-.175-.335l5.312-6.89c.127-.16.303-.304.494-.304h2.855c.24 0 .335.207.144.447l-5.12 6.635c-.192.24-.463.447-.702.447H8.31ZM.319 7.529c-.191 0-.271-.176-.175-.335L5.455.304C5.583.143 5.775 0 5.95 0h6.237c.239 0 .334.207.143.447L7.226 7.082c-.192.24-.463.447-.702.447H.319Z"></path>
            </svg>
          </li>
          <li
            className={`${
              active === "maybach" ? "bg-black text-white" : "bg-white"
            } border border-black px-4 py-2 cursor-pointer min-w-[160px] grid place-items-center`}
            onClick={() => {
              handleSetURL("group", "maybach");

              setActive("maybach");
            }}
          >
            <a className="font-semibold ">MAYBACH</a>
          </li>
        </ul>
      </div>
      <ul
        className={`${
          brand === "vinfast" && " hidden"
        } menu  bg-white border border-neutral-500 text-black text-xl rounded-lg lg:hidden`}
      >
        <li>
          <details>
            <summary>
              {active === "all"
                ? "All Models"
                : active === "amg"
                ? "Mercedes-AMG"
                : active === "maybach"
                ? "Mercedes-MayBach"
                : "All Models"}
            </summary>
            <ul>
              <li
                onClick={() => {
                  handleSetURL(
                    "group",
                    active === "amg"
                      ? "maybach"
                      : active === "maybach"
                      ? "amg"
                      : active === "all" && "amg"
                  );
                  setActive(
                    active === "amg"
                      ? "maybach"
                      : active === "maybach"
                      ? "amg"
                      : active === "all" && "amg"
                  );
                }}
              >
                <a>
                  {active === "amg"
                    ? "Mercedes-MayBach"
                    : active === "maybach"
                    ? "Mercedes-AMG"
                    : active === "all" && "Mercedes-AMG"}
                </a>
              </li>
              <li
                onClick={() => {
                  handleSetURL("group", active !== "all" ? "all" : "maybach");
                  setActive(active !== "all" ? "all" : "maybach");
                }}
              >
                <a>{active !== "all" ? "All Models" : "Mercedes-MayBach"}</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <div className="lg:col-span-12 lg:row-span-8 grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-3  row-span-8 border-r border-neutral-500 flex flex-col gap-4 ">
          <div className="flex flex-col gap-2 sticky top-40">
            <div>
              <h1 className="text-lg tracking-wider text-black font-semibold">
                Fuel Type
              </h1>
              <div className="flex gap-2 items-center py-2">
                <input
                  type="checkbox"
                  className="w-6 h-6 "
                  defaultChecked={
                    urlParams.get("filter") &&
                    urlParams.get("filter") === "electric"
                  }
                  onClick={() => {
                    handleSetURL("filter", "electric");
                  }}
                />
                <span className="text-lg text-gray-700">Electric</span>
              </div>
            </div>
            <div className="mt-4  text-gray-500 ">
              <h1 className="text-lg tracking-wider text-black font-semibold">
                Bodytype
              </h1>
              <div>
                <div
                  className={`flex gap-3 items-center  hover:text-blue-500 cursor-pointer ${
                    activeBodyType === "sedan" &&
                    "scale-105 text-black transition-all duration-300 ease-in-out"
                  }`}
                  onClick={() => {
                    handleSetURL("subgroup", "sedan");
                    setActiveBodyType("sedan");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 77.9 25.5"
                    width="48"
                    height="48"
                    className="fill-current"
                  >
                    <path d="M12.559 14.698c-3.01 0-5.401 2.391-5.401 5.401S9.549 25.5 12.559 25.5s5.401-2.391 5.401-5.401c-.089-3.01-2.479-5.401-5.401-5.401zm0 8.766c-1.859 0-3.453-1.505-3.453-3.453 0-1.859 1.505-3.453 3.453-3.453s3.453 1.505 3.453 3.453c-.088 1.947-1.593 3.453-3.453 3.453z"></path>
                    <circle cx="12.559" cy="20.099" r="2.479"></circle>
                    <path d="M76.66 13.193l-.885-3.984.443-1.505-7.083-1.151S58.333 1.152 56.209.887C49.215.002 40.361-.353 34.163.976c0 0-2.922 1.062-11.156 6.817 0 0-13.458.885-18.416 2.745l-2.036.797-2.125 3.01.177 2.125-.62.708s.443 3.896.354 3.896l5.666.974h.177a7.38 7.38 0 0 1-.266-1.948c0-3.63 3.01-6.64 6.64-6.64s6.64 3.01 6.64 6.64c0 .708-.089 1.328-.266 1.948h37.806a6.911 6.911 0 0 1-.266-1.948c0-3.63 3.01-6.64 6.64-6.64s6.64 3.01 6.64 6.64c0 .443 0 .797-.089 1.151h.266l7.526-1.24.443-5.755c.002 0-.529-.443-1.238-1.063zM5.034 14.521l-3.01 1.151s.62-2.125 2.036-3.01c.796-.443 3.541-1.062 3.541-1.062l-2.567 2.921zm57.992-5.578c-6.64.708-14.874.531-30.191 1.328-5.578.266-10.005.443-10.713.531-3.01.266-9.031.354-10.89.62 2.302-.885 7.88-1.417 12.395-1.594 5.047-3.719 9.562-6.552 10.89-6.906 1.417-.443 4.515-1.062 8.677-.974l-.62 7.083c.885 0 2.568-.089 2.656-.089l.62-6.817c2.479.089 7.968.354 10.447.885l-.443 5.578c.266 0 1.417 0 1.859-.089l.443-5.047c4.692 2.125 7.614 5.312 7.614 5.312 0-.086-1.062.002-2.744.179z"></path>
                    <path d="M63.026 14.698c-3.01 0-5.401 2.391-5.401 5.401s2.391 5.401 5.401 5.401 5.401-2.391 5.401-5.401-2.391-5.401-5.401-5.401zm0 8.766c-1.859 0-3.453-1.505-3.453-3.453 0-1.859 1.505-3.453 3.453-3.453 1.859 0 3.453 1.505 3.453 3.453 0 1.947-1.594 3.453-3.453 3.453z"></path>
                    <circle cx="63.026" cy="20.099" r="2.479"></circle>
                  </svg>

                  <span className="text-lg">Sedan</span>
                </div>
                <div
                  className={`flex gap-3 items-center  hover:text-blue-500 cursor-pointer ${
                    activeBodyType === "suv" &&
                    "scale-105 text-black transition-all duration-300 ease-in-out"
                  }`}
                  onClick={() => {
                    handleSetURL("subgroup", "suv");
                    setActiveBodyType("suv");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80.271 30.626"
                    width="48"
                    height="48"
                    className="fill-current"
                  >
                    <path d="M14.504 17.49c-3.649 0-6.568 2.919-6.568 6.568s2.919 6.568 6.568 6.568 6.568-2.919 6.568-6.568-2.92-6.568-6.568-6.568zm0 10.764c-2.372 0-4.287-1.916-4.287-4.287s1.916-4.287 4.287-4.287 4.287 1.916 4.287 4.287c0 2.463-1.916 4.287-4.287 4.287z"></path>
                    <path d="M14.504 20.683c-1.824 0-3.284 1.459-3.284 3.284s1.459 3.284 3.284 3.284 3.284-1.459 3.284-3.284c.091-1.733-1.46-3.284-3.284-3.284z"></path>
                    <path d="M79.085 15.392l-.091-3.74-3.831-8.666.73-.821-.183-1.094C68.778.159 35.757-.753 33.568.98c-4.378 3.466-8.574 7.571-8.574 7.571L4.196 11.288l-2.737 2.189L0 16.578l.821 1.459-.73.547 1.003 5.108 5.747.821c-.091-.547-.182-1.186-.182-1.733 0-4.287 3.557-7.845 7.845-7.845s7.845 3.557 7.845 7.845c0 .821-.182 1.733-.365 2.463h36.122c0-.091 0-.274-.091-.365a7.132 7.132 0 0 1-.274-2.007c0-4.378 3.557-7.936 7.936-7.936s7.936 3.557 7.936 7.936v.912l6.203-1.824.456-4.835-1.187-1.732zM4.561 16.578l-2.554.73 1.459-3.101 2.645-1.003 1.916 1.186-3.466 2.188zm6.75-3.557s2.919-.912 14.047-1.551c4.835-4.561 8.027-7.662 9.578-8.757 2.919-.912 11.767-.547 11.767-.547l-.639 8.392c1.186-.091 2.463-.091 3.649-.182l.547-8.301h12.406l2.007 7.845h1.733l-2.007-7.753 6.659.365 2.919 5.473-.456 2.098s-1.277.182-3.101.365c-1.916.182-4.561.365-7.753.456 0 0-28.642.912-35.848 1.459-8.119.638-15.508.638-15.508.638z"></path>
                    <path d="M65.677 17.49c-3.649 0-6.568 2.919-6.568 6.568s2.919 6.568 6.568 6.568c3.649 0 6.568-2.919 6.568-6.568s-2.92-6.568-6.568-6.568zm0 10.764c-2.372 0-4.287-1.916-4.287-4.287s1.916-4.287 4.287-4.287 4.287 1.916 4.287 4.287c0 2.463-1.916 4.287-4.287 4.287z"></path>
                    <path d="M65.677 20.683c-1.824 0-3.284 1.459-3.284 3.284s1.459 3.284 3.284 3.284 3.284-1.459 3.284-3.284c.091-1.733-1.46-3.284-3.284-3.284z"></path>
                  </svg>

                  <span className="text-lg">SUVs</span>
                </div>

                <div className="flex gap-3 items-center  cursor-not-allowed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80.912 25.673"
                    width="48"
                    height="48"
                    className="fill-current"
                  >
                    <path d="M13.016 17.673c-1.379 0-2.574 1.195-2.574 2.574 0 .368.092.736.276 1.103.46.828 1.287 1.471 2.299 1.471s1.931-.552 2.299-1.471c.184-.368.276-.736.276-1.103-.001-1.47-1.105-2.574-2.576-2.574zm52.777-3.034c-3.034 0-5.517 2.483-5.517 5.517s2.483 5.517 5.517 5.517c3.034 0 5.517-2.483 5.517-5.517s-2.483-5.517-5.517-5.517zm0 9.011c-1.931 0-3.494-1.563-3.494-3.494s1.563-3.494 3.494-3.494c1.931 0 3.494 1.563 3.494 3.494s-1.563 3.494-3.494 3.494z"></path>
                    <path d="M13.016 14.639c-3.034 0-5.517 2.483-5.517 5.517s2.483 5.517 5.517 5.517 5.517-2.483 5.517-5.517-2.482-5.517-5.517-5.517zm0 9.011c-1.931 0-3.494-1.563-3.494-3.494s1.563-3.494 3.494-3.494 3.494 1.563 3.494 3.494-1.563 3.494-3.494 3.494z"></path>
                    <path d="M79.625 13.076l-.919-4.138.46-1.563-7.265-1.195C59.581.204 47.536-1.267 36.962 1.031c0 0-3.034.644-11.493 6.436 0 0-15.723.919-20.78 2.758l-2.115.828L.46 14.179l.184 2.207-.644.828s.46 4.046.368 4.046l5.885 1.103h.184c-.184-.644-.368-1.379-.368-2.115 0-3.77 3.034-6.804 6.804-6.804s6.804 3.034 6.804 6.804c0 .736-.092 1.471-.368 2.115h.46l39.077-.092.184-.092a7.656 7.656 0 0 1-.276-2.023 6.788 6.788 0 0 1 6.804-6.804 6.788 6.788 0 0 1 6.804 6.804c0 .46 0 .828-.092 1.195h.276c1.287-.276 7.723-1.287 7.723-1.287l.644-5.885c-.001 0-.553-.459-1.288-1.103zM5.057 14.271l-3.126 1.195s.644-2.207 2.115-3.034c.828-.46 3.586-1.103 3.586-1.103l-2.575 2.942zm62.155-5.7c-1.655.184-4.046.368-6.896.46-15.907.46-35.767 1.563-35.951 1.563-4.046.184-9.654.552-9.654.552s2.666-1.103 11.677-1.563c4.505-3.77 10.206-6.528 10.206-6.528 2.85-.828 6.988-1.195 7.172-1.195 2.023-.184 4.138-.092 6.344.092l-.644 6.62c1.287-.092 2.483-.092 3.586-.092l.644-6.068c4.689.736 9.195 2.207 12.137 3.954.276.184-3.31 1.379-4.781 1.839 5.057-.276 8.735.092 8.735.092s-.92.09-2.575.274z"></path>
                    <circle cx="65.793" cy="20.156" r="2.574"></circle>
                  </svg>

                  <span className="text-lg">Coupés</span>
                </div>
                <div className="flex gap-3 items-center  cursor-not-allowed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 16"
                    width="48"
                    height="48"
                    className="fill-current"
                  >
                    <path d="M11.918 12.205c0 .949-.771 1.779-1.779 1.779a1.784 1.784 0 0 1-1.779-1.779c0-.949.771-1.779 1.779-1.779.889.06 1.779.831 1.779 1.779zm2.016 0A3.783 3.783 0 0 1 10.139 16a3.783 3.783 0 0 1-3.795-3.795 3.783 3.783 0 0 1 3.795-3.795c2.075.06 3.795 1.72 3.795 3.795zm-1.423 0c0-1.304-1.067-2.372-2.372-2.372S7.767 10.9 7.767 12.205s1.067 2.372 2.372 2.372c1.304.119 2.372-1.008 2.372-2.372zm24.724-8.004V2.659l-1.304-.712-1.127 2.313c-.059 0 2.431-.059 2.431-.059zm9.368 8.004A3.783 3.783 0 0 1 42.808 16a3.783 3.783 0 0 1-3.795-3.795 3.783 3.783 0 0 1 3.795-3.795c2.135.06 3.795 1.72 3.795 3.795zm-1.364 0a2.38 2.38 0 0 0-2.372-2.372c-1.304 0-2.372 1.067-2.372 2.372s1.067 2.372 2.372 2.372c1.305.119 2.372-1.008 2.372-2.372zm-2.371-1.778c-.949 0-1.779.771-1.779 1.779 0 .949.771 1.779 1.779 1.779.949 0 1.779-.771 1.779-1.779-.06-.949-.831-1.779-1.779-1.779zm9.131-1.779l-.474 3.854-4.21 1.779c.119-.593.237-1.245.237-1.719 0-2.55-2.075-4.803-4.625-4.803s-4.625 2.016-4.625 4.565c0 .474.059 1.245.237 1.719l-.237.237H14.586a8.785 8.785 0 0 0 .178-1.66c0-2.787-2.075-4.921-4.625-4.921s-4.625 2.49-4.625 5.04c0 .474.059.949.178 1.542h-.237l-2.431-.593-2.846-1.364L0 10.427l.474-.593-.118-1.601 1.542-1.482 1.482-.593c3.617-1.364 13.815-2.253 13.815-2.253S24.132.763 26.385.17c.059-.059.83-.119.83-.119v1.067c-2.372.652-6.403 2.55-8.894 3.973-6.878.118-11.502 1.244-11.502 1.244s3.676.059 7.589-.356c8.775-.712 24.31-.949 28.341-1.482.712-.119 1.838-.296 1.838-.296l6.996.889-.237 1.127.296 1.779.357.652zM5.218 6.81s-2.016.474-2.609.771c-1.008.592-1.542 2.193-1.542 2.193l2.312-.83L5.218 6.81z"></path>
                  </svg>

                  <span className="text-lg">Cabriolet</span>
                </div>
                <div className="flex gap-3 items-center  cursor-not-allowed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 86.4 32.8"
                    width="48"
                    height="48"
                    className="fill-current"
                  >
                    <path d="M72.875 23.625a3.013 3.013 0 1 1 0 6.026 3.013 3.013 0 0 1 0-6.026zm6.163 3.013c0 3.351-2.703 6.162-6.162 6.162-3.351 0-6.162-2.703-6.162-6.162 0-3.351 2.703-6.162 6.162-6.162 3.35 0 6.162 2.703 6.162 6.162zm-2.055 0a4.106 4.106 0 0 0-4.108-4.108 4.106 4.106 0 0 0-4.108 4.108 4.106 4.106 0 0 0 4.108 4.108 4.106 4.106 0 0 0 4.108-4.108zm-66.306 0a3.013 3.013 0 1 0 6.026 0 3.013 3.013 0 0 0-6.026 0zm9.175 0c0 3.351-2.703 6.162-6.162 6.162-3.351 0-6.162-2.703-6.162-6.162 0-3.351 2.703-6.162 6.162-6.162 3.351 0 6.162 2.703 6.162 6.162zm-2.054 0a4.106 4.106 0 0 0-4.108-4.108 4.106 4.106 0 0 0-4.108 4.108 4.106 4.106 0 0 0 4.108 4.108 4.106 4.106 0 0 0 4.108-4.108zM86.4 24.814l-.463 2.207-5.534 1.063a7.634 7.634 0 0 0-1.697-6.419c-.05-.061-.103-.12-.155-.179l-.002-.002a7.55 7.55 0 0 0-11.326-.025 7.635 7.635 0 0 0-2.014 5.178c0 .715.1 1.407.283 2.064-2.678.022-37.721.672-44.645.678a7.666 7.666 0 1 0-14.315.008L.483 28.102 0 22.797l1.092-1.274-.303-2.124s1.062-3.521 1.358-3.891c2.647-1.633 14.44-4.846 14.44-4.846 9.417-6.854 9.43-6.518 15.024-9.161C36.526-.38 80.697-.38 81.971 1.198c3.732 5.188 3.519 21.418 3.519 21.418l.91 2.198zM8.282 15.121l-4.945 1.957-1.148 3.374 5.456-3.397.637-1.934zm72.658-4.555s-.456-4.296-4.013-7.208c-1.213-.719-7.205-1.223-13.072-1.348l.887 7.881-1.731.08-.933-7.837c-8.383-.077-17.887.155-18.878.155l.245 8.531c-1.198.092-2.809.146-4.007.238l.243-8.708s-4.576.141-7.524 1.062c-2.913 1.335-9.101 4.482-14.046 8.911-7.473 1.896-8.216 2.141-8.216 2.141 14.405-1.83 58.272-3.939 71.045-3.898z"></path>
                  </svg>

                  <span className="text-lg">Vans / MPVs</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-500 w-[40%]"></div>
            <span
              className="text-xl text-black font-semibold cursor-pointer"
              onClick={() => {
                handleSetURL("reset");
              }}
            >
              See All
            </span>
          </div>
        </div>
        <div className="col-span-9 row-span-8 py-4 px-8 lg:grid grid-cols-3 gap-8 hidden">
          <span
            className={`${
              activeBodyType === "sedan" || activeBodyType === "all"
                ? "block"
                : "hidden"
            } text-2xl font-thin text-neutral-500 border-b-[1px] pb-4 border-neutral-300 col-span-3 sticky ${
              brand === "mercedes" ? "lg:top-28" : "lg:top-0"
            } top-0 bg-white`}
          >
            Sedans
          </span>
          {cars.filteredData?.map((car) => {
            return (
              car.type === "sedan" && (
                <Car
                  key={car.name}
                  name={car.name}
                  price={car.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                  isElectric={car.isElectric}
                  imgUrl={car.imgUrl}
                  imgUrl1={car.imgUrl1}
                />
              )
            );
          })}
          <span
            className={`${
              activeBodyType === "suv" || activeBodyType === "all"
                ? "block"
                : "hidden"
            } text-2xl font-thin text-neutral-500 border-b-[1px] pb-4 border-neutral-300 col-span-3 sticky ${
              brand === "mercedes" ? "lg:top-28" : "lg:top-0"
            } top-0 bg-white`}
          >
            SUVs
          </span>
          {cars.filteredData?.map((car) => {
            return (
              car.type === "suv" && (
                <Car
                  key={car.name}
                  name={car.name}
                  price={car.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                  isElectric={car.isElectric}
                  imgUrl={car.imgUrl}
                  imgUrl1={car.imgUrl1}
                />
              )
            );
          })}
        </div>
        <div className="lg:hidden flex flex-col flex-wrap">
          {
            <>
              <span
                className={`${
                  activeBodyType === "sedan" || activeBodyType === "all"
                    ? "block"
                    : "hidden"
                }  text-2xl font-thin text-neutral-500 border-b-[1px] pb-4 border-neutral-300 col-span-3 sticky lg:top-28 top-0 bg-white`}
              >
                Sedans
              </span>
              {cars.filteredData?.map((car) => {
                return (
                  car.type === "sedan" && (
                    <Car
                      key={car.name}
                      name={car.name}
                      price={car.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                      isElectric={car.isElectric}
                      imgUrl={car.imgUrl}
                      imgUrl1={car.imgUrl1}
                    />
                  )
                );
              })}
            </>
          }
          {
            <>
              <span
                className={`${
                  activeBodyType === "suv" || activeBodyType === "all"
                    ? "block"
                    : "hidden"
                }  text-2xl font-thin text-neutral-500 border-b-[1px] pb-4 border-neutral-300 col-span-3 sticky lg:top-28 top-0 bg-white`}
              >
                SUVs
              </span>
              {cars.filteredData?.map((car) => {
                return (
                  car.type === "suv" && (
                    <Car
                      key={car.name}
                      name={car.name}
                      price={car.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                      isElectric={car.isElectric}
                      imgUrl={car.imgUrl}
                      imgUrl1={car.imgUrl1}
                    />
                  )
                );
              })}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default VehiclePage;
