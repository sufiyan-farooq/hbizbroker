"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function CTASection() {
  
    useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true,     
    });
  }, []);

  return (
    <section className="py-20 bg-[#16202a] text-white">
      <div data-aos="zoom-in"
            data-aos-delay="1000" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            SCHEDULE A 
            <span className="relative ml-2 block sm:inline-block pb-3">  LET TALK HEALTHCARE CALL 
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="w-56 h-1 bg-[#5a9dae]   rounded-full"></div>
              </div>
            </span>
          </h2>
        </div>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
          Ready to take the next step? Schedule a complimentary consultation to discuss your healthcare business needs.
        </p>
        
        <button style={{ fontFamily: "PoppinMedium" }} className="bg-[#5a9dae] hover:bg-[#387b8c]  duration-500 cursor-pointer px-8 py-4 rounded-full font-semibold text-lg transition-colors mb-6">
          LETS TALK HEALTHCARE - CLICK HERE
        </button>
        
        <div style={{ fontFamily: "PoppinRegular" }} className="text-sm text-gray-400">
          Or call us today at (518) 791-7723<br />
          <span className="text-xs">Mon-Fri 9am-5pm • Sat 9am-2pm • Sun 12-5pm</span>
        </div>
      </div>
    </section>
  );
}