"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Play } from 'lucide-react';


export default function Podcast() {
    useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true,     
    });
  }, []);
  return (
          <div data-aos="flip-right"
            data-aos-delay="1000" className="bg-slate-800 text-white rounded-3xl p-8 shadow-lg max-w-md w-full relative overflow-hidden min-h-[550px] flex flex-col justify-between">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#5a9dae] rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#5a9dae] rounded-full opacity-10"></div>

            <div className="relative z-10 text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-[#5a9dae]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 9l11 11 11-11L12 2zm0 2.83L19.17 9 12 15.83 4.83 9 12 4.83z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase" style={{ fontFamily: "PoppinMedium" }}>
                  SELLING OR BUYING A HEALTHCARE BUSINESS
                </h3>
                <p className="text-[#5a9dae] text-lg font-semibold" style={{ fontFamily: "PoppinMedium" }}>PODCAST</p>
              </div>

              <div className="flex justify-center items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10H8V9h2v1zm4 0h-2V9h2v1zm2-1H14V8h2v1zM8 14h8v2H8v-2z"/>
                  </svg>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: "PoppinRegular" }}>HOSTED BY</p>
                <div className="inline-block border border-gray-600 rounded-md px-4 py-2">
                  <h4 className="text-xl font-bold">HB</h4>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "PoppinRegular" }}>HEALTHCARE BUSINESS BROKERS</p>
                </div>
              </div>

              <button style={{ fontFamily: "PoppinMedium" }} className="bg-[#5a9dae] hover:bg-[#387b8c] cursor-pointer text-white px-8 py-3 rounded-full font-semibold transition-colors duration-500 w-full">
                Listen Now
              </button>
            </div>
          </div>
  );
}
