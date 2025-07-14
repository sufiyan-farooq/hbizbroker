import React from 'react';
import { Users, TrendingUp, Calculator, Phone } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-slate-800">
      {/* Header */}
          <section style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className=" py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <h3 className="text-4xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              RESOURCES

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-52 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
         
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Staffing Business Consultant - Full Width */}
          <div className="lg:col-span-2 bg-slate-700 rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Business team" 
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    STAFFING BUSINESS CONSULTANT
                  </h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  If you are looking at entering into the staffing world where you can provide staff to hospitals and to other facilities on a non-franchise platform, we have an excellent partner that we can refer you to. Call us and we can talk about this partner.
                </p>
              </div>
            </div>
          </div>

          {/* RCFE Consultant */}
          <div className="bg-slate-700 rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="h-48">
              <img 
                src="/api/placeholder/400/200" 
                alt="RCFE Consulting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  RCFE CONSULTANT
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                If you are looking at starting up a Residential Care for the Elderly (RCFE) venture, we have an excellent partner that can help along the way. We have worked with similar who is not only very caring with her residents but has a wealth of experience. Call us and we can talk about your RCFE venture and about Anna.
              </p>
            </div>
          </div>

          {/* Accountant */}
          <div className="bg-slate-700 rounded-xl shadow-lg border border-slate-600 overflow-hidden">
            <div className="h-48">
              <img 
                src="/api/placeholder/400/200" 
                alt="Accountant services" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#5a9dae] rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  ACCOUNTANT
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you are looking for an accountant that understands the healthcare industry, we have an excellent partner. Financial Consulting located in Glendale, California. Ruth is amazing with her clients and has a wealth of knowledge. You can reach Ruth at FinancialConsulting.com or via phone at (818) 649-2400.
              </p>
              <div className="bg-slate-600 rounded-lg p-3">
                <div className="flex items-center gap-2 text-[#5a9dae] font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  <span>(818) 649-2400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default Resources;