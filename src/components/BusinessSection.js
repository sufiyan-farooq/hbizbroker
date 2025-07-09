"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BusinessSection() {
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
            NEED HELP BUYING OR SELLING A<br />
            <span className="relative">
              BUSINESS?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#5a9dae] rounded-full"></div>
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p data-aos="zoom-in"
            data-aos-delay="1000" className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
            Whether you are looking to sell your healthcare business or looking to acquire a healthcare business, we have the experience and knowledge to help you with your transaction decision. We have brokered numerous sales from various healthcare businesses over the years and we have built our reputation on maintaining a high level of trust and honesty with both our clients and customers.
          </p>

          <p data-aos="zoom-in"
            data-aos-delay="1000" className="text-lg text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
            We as Healthcare Brokers understand that your broker can help you with the legal process. We have extremely skilled business experience and we recognize that there are important considerations. Whether you are a first-time buyer or an experienced investor, we provide methodical guidance to help prepare and facilitate negotiations in the business marketplace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div data-aos="flip-right"
            data-aos-delay="1000"  className="transparent-bg text-center p-6 rounded-lg ">
              <div style={{ fontFamily: "PoppinMedium" }} className="text-2xl font-bold text-[#5a9dae] mb-2">Expert Valuation</div>
              <div style={{ fontFamily: "PoppinRegular" }} className="text-gray-300">Quick & Free</div>
              <div style={{ fontFamily: "PoppinRegular" }} className="text-gray-300">Consultation</div>
            </div>
            <div data-aos="flip-right"
            data-aos-delay="1000"  className="transparent-bg text-center  p-6 rounded-lg">
              <div style={{ fontFamily: "PoppinMedium" }} className="text-2xl font-bold text-[#5a9dae] mb-2">Market Analysis</div>
              <div style={{ fontFamily: "PoppinRegular" }} className="text-gray-300">Comprehensive</div>
              <div style={{ fontFamily: "PoppinRegular" }} className="text-gray-300">Report</div>
            </div>
            <div   data-aos="flip-right"
            data-aos-delay="1000" className="transparent-bg text-center  p-6 rounded-lg">
              <div style={{ fontFamily: "PoppinMedium" }} className="text-2xl font-bold text-[#5a9dae] mb-2">Full Support</div>
              <div style={{ fontFamily: "PoppinRegular" }} className="text-gray-300">End-to-End</div>
              <div style={{ fontFamily: "PoppinRegular" }} className="text-gray-300">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}