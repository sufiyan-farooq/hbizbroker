import React from 'react';
import Podcast from './Podcast';

export default function ExperienceWhyUsSection() {
  return (
    <section id="about" className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12">
        {/* Right Content Section (Experience and Why Us) */}
        <div className="md:w-1/2">
          <div className="mb-12" data-aos="fade-up"
            data-aos-delay="1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
              OUR EXPERIENCE
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#5a9dae] rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
              After 24 years in the healthcare industry, we possess the knowledge to help you achieve your goals. If you're looking to buy or sell a healthcare business, our experienced team can guide you through every step of the process with expertise and care.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
              Whether you're a first-time buyer or an experienced investor, we're here to help you make informed decisions and avoid costly mistakes.
            </p>
          </div>

          <div data-aos="fade-up"
            data-aos-delay="1000"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"style={{ fontFamily: "PoppinMedium" }} >
              WHY US?
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#5a9dae] rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
              Healthcare Business Brokers are specialists—that's what we do. When it comes to buying or selling a business, you should be connected with someone who knows your industry. We understand the unique challenges and opportunities that come with healthcare businesses.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "PoppinRegular" }}>
              Our team has the experience and knowledge to help you navigate the complex world of healthcare business transactions with confidence.
            </p>
            <button style={{ fontFamily: "PoppinMedium" }} className="bg-[#5a9dae] cursor-pointer duration-500 hover:bg-[#387b8c] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              FIND OUT MORE
            </button>
          </div>
        </div> 

        {/* Left Card Section (Podcast) */}
        <div className="md:w-1/2 flex justify-center items-center">
        <Podcast/>
        </div>
      </div>
    </section>
  );
}