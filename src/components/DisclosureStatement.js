import { FileText } from 'lucide-react';
import React from 'react'

 const DisclosureStatement = () => {
  return (
    <div>
           <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
                <h3 className="text-3xl text-center font-bold mb-8 relative " style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-slate-800" >
          HEALTHCARE BIZ BROKERS - DISCLOSURE STATEMENT


            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
              <div style={{ fontFamily: "PoppinRegular" }} className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
 It is imperative that ALL potential buyers: (1) Sign an NDA, (2) Provide Proof of Funds (redacted), (3) Provide a Buyer Profile and (4) understand that no direct communication with the clinical or administrative staff is expected as a part of the pre-due diligence phase of the sale.                </p>
                <p className="leading-relaxed">
                    <span style={{ fontFamily: "PoppinRegular" }}  className="  font-semibold">The Seller will review the Buyer Profile prior to releasing any information.Please Note:
</span>

 The seller is responsible for proving the accuracy of any information provided to the buyers satisfaction. Information contained in this document is provided solely by the seller. No representations or warranties are provided by our brokers, its agents, representatives, or subsidiaries as to the accuracy, completeness or validity of such information. Interested parties are encouraged to seek the counsel of their accountant, attorney and/or other business advisors. Healthcare Biz Brokers does not work with non-licensed buyer representatives (i.e., finders).                 </p>
             
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-[#387b8c] to-slate-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <FileText className="w-16 h-16 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-semibold">Transaction</p>
                  <p className="text-sm opacity-80">Documents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default DisclosureStatement
;