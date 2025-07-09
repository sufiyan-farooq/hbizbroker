import { FileText } from 'lucide-react';
import React from 'react'

 const TransactionSale = () => {
  return (
    <div>
           <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
                <h3 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-slate-800">
             TRANSACTION SALE DOCUMENTS


            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
              <div style={{ fontFamily: "PoppinRegular" }} className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Every transaction is different. When Healthcare Biz Brokers is able to do to help you to figure out the right strategy to move forward to include the proper forms for coordinating with inventory, and the listing to handle events with the letters of intent and legal documents. In this industry, we are experienced in the use of these forms. It may not seem like much, but is documented contracts or legal documents that make the difference between a deal that flows smoothly and one that encounters problems and can inhibit the progression of the transaction.
                </p>
                <p className="leading-relaxed">
                  If you are not being represented by a Broker and you would like to work with us on just to have someone in your corner.
                </p>
                <p className="leading-relaxed">
                  After, if you have that your agents/Realtor would like be able to qualify up our LOI to eliminate what we are being looking for are truly qualified real estate.
                </p>
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
export default TransactionSale;