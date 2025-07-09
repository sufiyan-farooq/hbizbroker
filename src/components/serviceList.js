import { CheckCircle, Users } from 'lucide-react';
import React from 'react'

const ServiceList = () => {
      const services = [
    "Accreditation (Det) (Cert) (LIC)",
    "Change of Location (COL) Application (CHA) (CHOW) (AO)",
    "Change of Ownership (CHOW) Applications (CHA) (CHOW) (AO)",
    "Clinical Laboratory Improvement Amendments (CLIA) Initial",
    "Clinical Laboratory Improvement Amendments (CLIA) Update",
    "Education & Orientation",
    "Licensing (CDPH) (Inc) (NL) (IA) (AO)",
    "Licensing for Administrator (CHA) (CHOW) (AO)",
    "National Plan & Provider Enumeration System (NPPES) Initial",
    "National Plan & Provider Enumeration System (NPPES) Update",
    "Plan of Corrections (Dependent on Survey Results)",
    "CA Prelim Chrcts & LOI PS Plan",
    "PA Accreditation Survey - Readiness",
    "Start Up - Office Set Up - For Office Brokers, Office Forms"
  ];

  return (
    <div> <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-slate-800">
              HERE IS A LIST OF ITEMS THAT WE CAN DO WITH YOU

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div  style={{ fontFamily: "PoppinRegular" }} key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#387b8c] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{service}</span>
                </div>
              ))}
            </div>
            
            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#387b8c] to-slate-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-semibold">Consulting</p>
                  <p className="text-sm opacity-80">Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}
export  default ServiceList;