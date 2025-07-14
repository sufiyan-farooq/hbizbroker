"use client";
import BusinessCard from "./BusinessCard";

const BusinessGrid = ({ businesses, formatPrice }) => {
  return businesses.length === 0 ? (
    <div className="text-center py-12 text-gray-400 text-lg">
      No businesses found matching your criteria
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((biz) => (
        <BusinessCard key={biz.id} business={biz} formatPrice={formatPrice} />
      ))}
    </div>
  );
};

export default BusinessGrid;
