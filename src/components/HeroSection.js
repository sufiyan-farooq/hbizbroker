"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,  
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div
            className="pl-4 sm:pl-8 md:pl-12"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <h1
              style={{ fontFamily: "PoppinMedium" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              EXPERIENCED,<br />
              PERSONAL BUSINESS<br />
              <span>
                <span className="border-b-4 border-[#5a9dae] pb-1 inline-block">
                  BROKE
                </span>
                R SERVICES
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-300 mb-8"
              style={{ fontFamily: "PoppinRegular" }}
            >
              Helping you design success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                style={{ fontFamily: "PoppinRegular" }}
                className="bg-[#5a9dae] hover:bg-[#387b8c] px-6 sm:px-10 cursor-pointer py-3 rounded-full font-semibold transition-colors duration-800 flex items-center justify-center text-white text-sm sm:text-base"
              >
                CONTACT US @ (518) 791-7723
              </button>
              <button
                style={{ fontFamily: "PoppinRegular" }}
                className="border border-white hover:bg-[#387b8c] px-6 sm:px-10 cursor-pointer py-3 rounded-full font-semibold transition-colors duration-800 text-white text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div
            className="transparent-bg rounded-2xl p-4 sm:p-6 shadow-xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto backdrop-blur-md border"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <h3
              className="text-base sm:text-lg font-semibold mb-4 text-white text-center"
              style={{ fontFamily: "PoppinRegular" }}
            >
              Our Track Record
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-between text-center p-4 border-b border-gray-300 gap-4 sm:gap-0">
              <div>
                <div
                  style={{ fontFamily: "PoppinRegular" }}
                  className="text-2xl sm:text-3xl font-bold text-[#5a9dae]"
                >
                  24+
                </div>
                <div
                  style={{ fontFamily: "PoppinRegular" }}
                  className="text-sm text-gray-300"
                >
                  Years Experience
                </div>
              </div>
              <div>
                <div
                  style={{ fontFamily: "PoppinRegular" }}
                  className="text-2xl sm:text-3xl font-bold text-[#5a9dae]"
                >
                  500+
                </div>
                <div
                  style={{ fontFamily: "PoppinRegular" }}
                  className="text-sm text-gray-300"
                >
                  Businesses Sold
                </div>
              </div>
              <div>
                <div
                  style={{ fontFamily: "PoppinRegular" }}
                  className="text-2xl sm:text-3xl font-bold text-[#5a9dae]"
                >
                  99%
                </div>
                <div
                  style={{ fontFamily: "PoppinRegular" }}
                  className="text-sm text-gray-300"
                >
                  Success Rate
                </div>
              </div>
            </div>
            <p
              style={{ fontFamily: "PoppinRegular" }}
              className="text-xs sm:text-sm text-gray-300 mt-4 text-center"
            >
              Leaders in Healthcare Business Brokerage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
