"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SecLetter() {
    useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,  
    });
  }, []);
  return (
  
    <section id="businesses" className="py-20 bg-[#2d4a5a] text-white relative overflow-hidden">
      
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#5a9dae] rounded-full opacity-6 "></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#5a9dae] rounded-full opacity-6 "></div>

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#5a9dae] rounded-full opacity-5 blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#5a9dae] rounded-full opacity-5 blur-sm"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> {/* Added z-10 to ensure content is above circles */}
        <div className="mb-12">
          <h2 data-aos="fade-up"
            data-aos-delay="1000" className="text-3xl md:text-4xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
    SEC LETTER

              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#5a9dae] rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
<div className=" flex items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
    
    {/* Card 1 */}
    <div data-aos="flip-right" data-aos-delay="1000" className="transparent-bg p-6 rounded-lg">
      <div style={{ fontFamily: "PoppinRegular" }} className="text-md text-white mb-2">
        CABB Letter - Department of Business Oversight - SEC (pdf)
      </div>
      <div className="pt-4">
        <button
          style={{ fontFamily: "PoppinRegular" }}
          className="border border-white hover:bg-[#387b8c] px-6 sm:px-10 cursor-pointer py-2 rounded-full font-semibold transition-colors duration-800 text-white text-sm sm:text-base"
        >
          Download
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div data-aos="flip-right" data-aos-delay="1000" className="transparent-bg p-6 rounded-lg">
      <div style={{ fontFamily: "PoppinRegular" }} className="text-md text-white mb-2">
        CABB Letter - Department of Business Oversight - SEC (pdf)
      </div>
      <div className="pt-4">
        <button
          style={{ fontFamily: "PoppinRegular" }}
          className="border border-white hover:bg-[#387b8c] px-6 sm:px-10 cursor-pointer py-2 rounded-full font-semibold transition-colors duration-800 text-white text-sm sm:text-base"
        >
          Download
        </button>
      </div>
    </div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
}