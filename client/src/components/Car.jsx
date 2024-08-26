import React, { useState } from "react";

const Car = ({ name, price, isElectric, imgUrl, imgUrl1 }) => {
  const [hoverImage, setHoverImage] = useState(imgUrl);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setHoverImage(imgUrl1);
    }, 100);
  };

  const handleMouseLeave = () => {
    setHoverImage(imgUrl);
  };

  return (
    <div
      className={`col-span-1 w-full flex flex-col items-center gap-3 hover:shadow-xl h-[400px] hover:border border-neutral-300 cursor-pointer lg:p-8 rounded-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-center text-black text-xl tracking-wider">{name}</h1>

      <h1 className="text-center text-xl tracking-wider">From {price}</h1>

      {isElectric ? (
        <span className="py-1 px-2 rounded-full text-xs text-black tracking-wide bg-gray-300">
          Electric
        </span>
      ) : (
        <span className="py-1 px-2 rounded-full text-xs text-white select-none tracking-wide ">
          Electric
        </span>
      )}

      <img src={hoverImage} alt="" />
    </div>
  );
};

export default Car;
