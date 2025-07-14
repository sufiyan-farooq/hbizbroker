"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, Users, Clock, DollarSign, FileText } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Why do I need to work with a business broker?",
      answer: "Business brokers bring expertise in valuation, marketing, negotiation, and legal processes. They help you navigate complex transactions, maintain confidentiality, and ensure you get the best possible deal. Their industry knowledge and professional networks can significantly impact your success.",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 2,
      question: "How do healthcare biz brokers work as a general brokerage?",
      answer: "Healthcare business brokers specialize in the unique aspects of medical practices while maintaining general brokerage capabilities. They understand regulatory requirements, licensing issues, and industry-specific valuation methods that apply to healthcare businesses.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 3,
      question: "What are the costs involved with working with healthcare biz brokers?",
      answer: "Costs typically include commission fees (usually 6-12% of sale price), listing fees, marketing expenses, and legal documentation costs. Many brokers work on a success fee basis, meaning you only pay when the transaction completes successfully.",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 4,
      question: "Do you recommend using an escrow company?",
      answer: "Yes, we strongly recommend using an escrow company for all transactions. Escrow services provide security, ensure proper documentation, handle financial transfers safely, and protect both buyers and sellers throughout the transaction process.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 5,
      question: "What is the timeline to sell a business?",
      answer: "The timeline varies depending on business type, market conditions, and pricing. Typically, healthcare businesses take 6-12 months to sell from listing to closing. Preparation phase may take additional 2-3 months for documentation and valuation.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 6,
      question: "How much time is required to purchase a healthcare business?",
      answer: "The purchasing process typically takes 4-8 months from initial search to closing. This includes due diligence (30-60 days), financing approval (30-45 days), and legal documentation. Pre-qualification and financing preparation can accelerate the process.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 7,
      question: "How much paperwork is involved in purchasing a healthcare business?",
      answer: "Healthcare business acquisitions involve extensive documentation including financial statements, tax returns, licenses, contracts, lease agreements, employee records, and regulatory compliance documents. Professional guidance helps navigate this complexity efficiently.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 8,
      question: "What is a seller carry?",
      answer: "Seller carry (or seller financing) is when the seller provides financing to the buyer for part of the purchase price. This arrangement can benefit both parties by facilitating the sale and providing the seller with ongoing income and potential tax advantages.",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 9,
      question: "What about the furniture, fixtures and equipment (FF&E)?",
      answer: "FF&E is typically included in the business sale but should be specifically itemized and valued. This includes medical equipment, office furniture, technology systems, and other tangible assets. Proper valuation and condition assessment are crucial for accurate pricing.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 10,
      question: "What about the lease?",
      answer: "Lease terms are critical in healthcare business transactions. We review lease transferability, remaining term, renewal options, rent rates, and landlord approval requirements. A favorable lease can significantly impact business value and buyer interest.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 11,
      question: "What about the receivables and payables?",
      answer: "Receivables and payables are typically addressed separately from the business sale. Sellers usually retain receivables and remain responsible for payables as of closing date. Clear accounting and proper documentation ensure smooth transition.",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 12,
      question: "What about the existing debt?",
      answer: "Existing debt handling depends on the transaction structure. Debt may be assumed by the buyer, paid off by the seller at closing, or addressed through purchase price adjustments. Each scenario has different implications for both parties.",
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Header Section */}
      <div     style={{
      background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
    }} className="py-16">

    
        <div className="max-w-4xl mx-auto px-6 text-center">

                 <h3
        className="text-4xl font-bold mb-8 relative inline-block"
        style={{ fontFamily: "PoppinMedium" }}
      >
        <span className="text-white"> Frequently Asked Questions</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
      </h3>
      <p
        style={{ fontFamily: "PoppinRegular" }}
        className="text-xl md:text-2xl text-gray-300"
      >
        <span className="text-white/90 text-lg">
            Get answers to common questions about healthcare business brokerage services
        </span>
      </p>
        
          <div className="mt-8 flex justify-center">
                 <button
                style={{ fontFamily: "PoppinRegular" }}
                className="bg-[#5a9dae] hover:bg-[#387b8c] px-6 sm:px-10 cursor-pointer py-3 rounded-full font-semibold transition-colors duration-800 flex items-center justify-center text-white text-sm sm:text-base"
              >
                Call Us @ (518) 791-7723
              </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-slate-700  rounded-xl shadow-lg border border-slate-600 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full cursor-pointer px-6 py-5 text-left flex items-center justify-between hover:bg-slate-650 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#5a9dae] rounded-lg flex items-center justify-center text-white">
                    {faq.icon}
                  </div>
                  <h3 style={{ fontFamily: "PoppinRegular" }} className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-6 h-6 text-[#5a9dae]">
                  {openFAQ === faq.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div style={{ fontFamily: "PoppinRegular" }} className="ml-14 pt-2 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "PoppinMedium" }} className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p style={{ fontFamily: "PoppinRegular" }} className="text-slate-300 text-lg mb-8">
            Our experienced team is here to help you with your healthcare business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5a9dae] hover:bg-[#4a8a9a] text-white px-12 cursor-pointer py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </button>
            <button className="border border-[#5a9dae] text-[#5a9dae] hover:bg-[#5a9dae] hover:text-white px-12 cursor-pointer py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send Email
            </button>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default FAQ;