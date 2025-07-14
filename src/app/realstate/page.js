import React from 'react';
import { Home, Building, MapPin, Users } from 'lucide-react';

const RealEstateServices = () => {
  return (
    <>
             <section style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className=" py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <h3 className="text-4xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              REAL ESTATE SERVICES

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-52 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
         
          </div>
        </div>
      </section>
    <div className="min-h-screen bg-slate-800">
     

      {/* Introduction Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-gray-700 text-center">
            <p className="text-lg leading-relaxed">
              We at <span className="font-bold">Healthcare Biz Brokers</span> work with our sister company, 
              <span className="font-bold"> Simple Realty Solutions</span> to help our clients who are looking 
              for a residential home, a niche healthcare property or who are looking to sell either or. 
              We also help our clients with finding those sometimes elusive office spaces and those 
              hard to find lots for future development of a healthcare business.
            </p>
          </div>
        </div>
      </div>

      {/* Niche Based Healthcare Real Estate */}
      <div style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="transparent-bg rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  NICHE BASED HEALTHCARE REAL ESTATE
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/api/placeholder/500/300" 
                    alt="House for sale" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We live within the healthcare industry and this encompasses many of those facilities 
                    that reside in what we term residential real estate for the lay person but in actuality 
                    are facility for the healthcare professional. We work with both the non-skilled and skilled real 
                    estate marketplace. The non-skilled world would include our board and care homes, 
                    which we will term Residential Care Facilities for the Elderly (RCFE). These home have 
                    certain characteristics such as being single story homes with sprinkler systems and ADA 
                    compliant bathrooms.
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed">
                    With regards to our skilled facilities, we have facilities such as our Congregate living 
                    health facilities (CLHFs) which require 24/7 skilled nursing services and which in essence 
                    function as a nursing home for sub-acute or rehab or hospice patients. What our 
                    company brings to the table is that we are knowledgeable in the industry and in 
                    finding a home that can be converted into one of these unique healthcare settings. This 
                    is a niche oriented part of the real estate market and not all realtors will have the skillset 
                    to help you find or sell this type of real estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Leases */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-700 rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      OFFICE LEASES
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                      Sometimes the commercial lease world is limited. Let us help you find that office space that 
                      meet your parameters. Whether you are looking for a specific square footage, a specific 
                      number of parking spaces, a specific number of rooms, or specific location – we can 
                      help.
                    </p>
                    
                    <p className="text-slate-300 leading-relaxed">
                      We will begin searching the commercial listings and start to put together a list of office 
                      spaces which may be a good fit for you and your business model.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Office space" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Residential Real Estate */}
      <div style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="transparent-bg rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      RESIDENTIAL REAL ESTATE
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-slate-300 leading-relaxed">
                      Healthcare Biz Brokers works in conjunction with Simple Realty Solutions to bring you our 
                      highly qualified realtors to help you find that right fit. Our team has had experience in 
                      dealing with buyers and sellers in the marketplace. We take the time to get to know you 
                      and your specific needs and work with you to find that right property. Whether you are 
                      looking at downsizing to a smaller home or looking at buying your first home, we can be 
                      your guide. Our company works with many area Mortgage Loan Originators (MLO) which 
                      are essential in creating that foundation to obtaining a pre-qualification letter.
                    </p>
                    
                    <p className="text-slate-300 leading-relaxed">
                      Our team will also walk you through each stage of the buying or selling process. For our 
                      sellers we will work with you on staging, marketing, showings, inspections, walk-throughs, 
                      the closing and the move. For our buyers we will talk about finding a budget that will fit 
                      your specific needs, searching for a home in an area that makes sense for you, on 
                      scheduling inspections, walk-throughs, the closing and the move-in. If you are in the 
                      market for either buying or selling your home, let us know you that we have a skilled 
                      team can do for you.
                    </p>
                  </div>
                </div>
                <div>
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Residential property" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lots/Land */}
      <div style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="transparent-bg rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Lots/Land 
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/api/placeholder/500/300" 
                    alt="House for sale" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We live within the healthcare industry and this encompasses many of those facilities 
                    that reside in what we term residential real estate for the lay person but in actuality 
                    are facility for the healthcare professional. We work with both the non-skilled and skilled real 
                    estate marketplace. The non-skilled world would include our board and care homes, 
                  If you are looking at opening up a large facility in the future, we can work with you on finding available lots and or older buildings where the potential for a purchase can be pursued.

We will work with you and your team to figure out what locations are available in the marketplace to facilitate your long-term goals.
                  </p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
    </>
  );
};

export default RealEstateServices;