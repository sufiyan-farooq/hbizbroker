import { Calculator } from 'lucide-react';
import React from 'react'

 const BusinessValuation = () => {
  return (
    <div>
          <section  style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }}  className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-80 h-64 bg-gradient-to-br from-[#387b8c] to-slate-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-semibold">Business</p>
                  <p className="text-sm opacity-80">Valuation</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
                BUSINESS VALUATION

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-56 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
              <div style={{ fontFamily: "PoppinRegular" }} className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  The art of healthcare business valuation can take the form of many different models. Comparative, valuation tools that use sophisticated algorithms. All of healthcare is economics and valuation understanding is truly the key to the success of any transaction relative to how you handle your past financial performance, your goodwill, the very essence of your business.
                </p>
                <p className="leading-relaxed">
                  If you're a healthcare business, we first come applying point for market research looking at structuring your business. We will use measuring one a set of prescribed assumptions to help you create these processes that buyer's will looking for when purchasing your financial statements. We also audit the books and records to identify your business greatest. Goodwill can take on many forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default BusinessValuation;