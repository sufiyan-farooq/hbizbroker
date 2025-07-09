import React from 'react';
import { Shield, TrendingUp, Users, Phone } from 'lucide-react';
import Image from "next/image";
import whywork from "@/assets/whywork.jpg";

const WhyWorkWithUs = () => {
  return (
    <>
             <section style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className=" py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <h3 className="text-4xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              WHY WORK WITH US

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-52 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
         
          </div>
        </div>
      </section>
    <section className="py-20 white">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
 

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            
            {/* Introduction */}
            <div>
              <h3 className="text-3xl font-bold text-[#387b8c] mb-4" style={{ fontFamily: "PoppinMedium" }}>WHY WORK WITH US?</h3>
              <p className="text-gray-600 leading-relaxed">
                If you are giving thoughts to selling your business, it would be a good idea to talk with an experienced healthcare business broker to see what steps you should consider when selling and or buying a healthcare business. We specialize in healthcare sales such as skilled nursing health agencies, hospice agencies, residential care facilities for the elderly, medical practices and more. When you are looking at millions of a business purchase or sale, you need to be extremely careful. There are literally tons of questions that you need to pose to both your broker and to the other seller or buyer. We are there to guide you with answering those timely questions.
              </p>
            </div>

            {/* Three Main Points */}
            <div className="space-y-6">
              
              {/* Protection */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#387b8c] rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#387b8c] mb-2">Protection:</h4>
                  <p style={{ fontFamily: "PoppinRegular" }} className="text-gray-600 text-sm leading-relaxed">
                    Our job is to protect your sale and to protect your investment. We have multiple trusted escrow companies that will help in ensuring that all funds are accounted for and that all UCC filings search are done. We will also make it our job to work with your power team be it your lawyer, accountant or other.
                  </p>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#387b8c] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#387b8c] mb-2">Marketing:</h4>
                  <p style={{ fontFamily: "PoppinRegular" }} className="text-gray-600 text-sm leading-relaxed">
                    We will get your listing to as many potential buyers, potential investors and or friends of potential buyers/investors as possible. How do we create this lead generation? On our end, we will work with our extensive network/database of over 20 years in the healthcare market. From the moment that our client signs their listing agreement with us, we begin to create our marketing materials. Through our brokerage, our in-house marketing department ensures that we create momentum regarding your business listing.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#387b8c] rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#387b8c] mb-2">Experience:</h4>
                  <p style={{ fontFamily: "PoppinRegular" }} className="text-gray-600 text-sm leading-relaxed">
                    If you are seriously looking for a healthcare business and or looking to sell a healthcare business, please allow us to spend some time with you! We would recommend that you interview other agents so that you can compare our value proposition versus theirs. Call us!
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Image placeholder */}
        <div className="flex justify-center">
      <div
        className="w-120 h-120 rounded-lg flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${whywork.src})`,
        }}
      >

      </div>
    </div>

        </div>

        {/* Bottom Call to Action */}
    <div className="text-center mt-16">
  <div className="relative bg-slate-800 rounded-lg p-8 border border-[#387b8c]/20 overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#5a9dae] rounded-full opacity-10 z-0"></div>
    <div className="absolute -bottom-30 -right-20 w-60 h-60 bg-[#5a9dae] rounded-full opacity-10 z-0"></div>

    {/* Content */}
    <div  className="relative z-10">
      <p style={{ fontFamily: "PoppinRegular" }} className="text-white text-lg mb-6 italic">
        "If you are seriously looking for a healthcare business and or looking to sell a healthcare business, please allow us to spend some time with you! We would recommend that you interview other agents so that you can compare our value proposition versus theirs."
      </p>
      <button style={{ fontFamily: "PoppinRegular" }} className="bg-[#387b8c] text-white px-16 cursor-pointer py-3 rounded-full font-semibold hover:bg-[#387b8c]/90 transition-colors duration-300 flex items-center mx-auto">
        <Phone className="w-5 h-5 mr-2" />
        CONTACT US @ (518) 791-7723
      </button>
    </div>
  </div>
</div>


      </div>
    </section>
    </>
  );
};

export default WhyWorkWithUs;