"use client";

const BusinessHeader = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
    }}
    className="py-12"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3
        className="text-4xl font-bold mb-8 relative inline-block"
        style={{ fontFamily: "PoppinMedium" }}
      >
        <span className="text-white">BUSINESSES FOR SALE</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
      </h3>
      <p
        style={{ fontFamily: "PoppinRegular" }}
        className="text-xl md:text-2xl text-gray-300"
      >
        <span className="text-white/90 text-lg">
          Find the perfect healthcare business opportunity
        </span>
      </p>
    </div>
  </div>
);

export default BusinessHeader;
