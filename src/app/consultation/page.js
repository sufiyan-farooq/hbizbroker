import React from 'react';
import ServiceList from '@/components/serviceList';
import ClinicalConsulting from '@/components/ClinicalConsulting';
import BusinessValuation from '@/components/BusinessValuation';
import TransactionSale from '@/components/TransactionSale';
import ChangeofOwner from '@/components/ChangeofOwner';

const ConsultingServices = () => {

  return (
    <div className="bg-slate-800 min-h-screen">
      
      {/* Header Section */}
      <section style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className=" py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
             <h3 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              CONSULTING SERVICES

            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-52 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
            <p  style={{ fontFamily: "PoppinRegular" }} className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed">
              We are Healthcare Biz Brokers work with Business Management Solutions (our sister company) that can help you with a variety of consulting oriented tasks to include the clinical component of the consulting side to the business portion of understanding how to update your corporate book to the actual art of valuing your business to make sure you are getting the best outcome to create a healthy sale transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
     <ServiceList/>

      {/* Clinical Consulting Services */}
     <ClinicalConsulting/>

      {/* Business Valuation */}
    <BusinessValuation/>

      {/* Transaction Sale Documents */}
     <TransactionSale/>

      {/* Change of Ownership Services */}
      <ChangeofOwner/>

    </div>
  );
};

export default ConsultingServices;