import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row items-center justify-center bg-white overflow-hidden">
      {/* Sol içerik */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-24 py-16 md:ml-30">
        <p className="text-sm font-bold text-[#252B42] mb-2 tracking-wide uppercase">ABOUT COMPANY</p>
        <h1 className="text-5xl font-extrabold text-[#252B42] mb-6">ABOUT US</h1>
        <p className="text-gray-500 text-xl mb-8 max-w-lg">
          We know how large objects will act,<br />
          but things on a small scale
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded transition">
          Get Quote Now
        </button>
      </div>
      {/* Sağ görsel */}
      <div className="flex-1 flex items-center justify-center relative h-[600px]">
        {/* Arka plan daire */}
        <div className="absolute w-[500px] h-[500px] bg-pink-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <img
          src="assets/AUW.png"
          alt="About Us"
          className="relative z-10 h-max object-contain md:mr-60"
        />
        {/* Süs noktaları */}
        <span className="absolute w-6 h-6 bg-purple-300 rounded-full left-10 top-10 z-10"></span>
        <span className="absolute w-4 h-4 bg-pink-200 rounded-full right-16 top-16 z-10"></span>
        <span className="absolute w-3 h-3 bg-purple-400 rounded-full right-24 bottom-24 z-10"></span>
      </div>
    </section>
  )};