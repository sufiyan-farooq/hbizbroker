import { ClipboardList } from 'lucide-react';
import React from 'react'

const ClinicalConsulting = () => {
  return (
    <div> <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
             <h3 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
CLINICAL CONSULTING SERVICES

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
              <div  style={{ fontFamily: "PoppinRegular" }} className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Business Management Solutions can help you with starting a home health agency from scratch or taking that license through its completion anyway. We have developed our proprietary systems that is corporation with your existing knowledge base can create results.
                </p>
                <p className="leading-relaxed">
                  What philosophy behind clinical consulting is to help you understand the importance of having many components/key departmental managers. For determining to fix clinical quality, your efficiency, and your clinical expertise to be managed can be done.
                </p>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-[#387b8c] to-slate-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <ClipboardList className="w-16 h-16 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-semibold">Clinical</p>
                  <p className="text-sm opacity-80">Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}
export  default ClinicalConsulting;