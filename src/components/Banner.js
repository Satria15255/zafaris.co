import React from "react";
import Slide2 from "../assets/elemen/img/banner 1.2.png";

function Banner() {
  return (
    <div className="relative w-full z-0">
      {/* Gambar */}

      <img src={Slide2} alt={`image2`} className="w-full aspect-[1/1] object-cover md:aspect-[18/9]" />

      {/* Teks di atas gambar */}
      <div className="absolute inset-0 flex flex-col pb-5 -pt-5 justify-center w-full py-4 px-3 text-break  bg-opacity-50 text-black text-left">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold break-words ">
          Walk in Comfort
          <br />
          Step in Style.
        </h2>
        <p className="text-xs md:text-xl text-color-gray-200 mt-4">Find the best shoes for every step you take!</p>
        <div className="flex flex-col md:flex-row gap-2 py-2 mt-4 w-full md:w-50">
          <button className="border border-black w-2/4 md:w-1/5 py-3 md:py-4 hover:bg-gray-900 hover:text-white text-center bg-gray-400 w transition duration-100">SHOOP</button>
          <button className="border border-black w-2/4 md:w-1/5 py-3 md:py-4 hover:bg-gray-900 hover:text-white text-center transition duration-100">DETAIL</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
