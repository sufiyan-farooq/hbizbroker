"use client";
import { Filter, Search } from "lucide-react";

const BusinessFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedState,
  setSelectedState,
  selectedCounty,
  setSelectedCounty,
  categories,
  states,
  counties,
  showFilters,
  setShowFilters,
  priceRange,
  setPriceRange,
  cashFlowRange,
  setCashFlowRange,
  formatPrice,
}) => (
  <div className="bg-slate-700 py-6 border-b border-slate-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="City Name or other Keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#387b8c]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {[{ name: 'Category', value: selectedCategory, set: setSelectedCategory, options: categories },
            { name: 'State', value: selectedState, set: setSelectedState, options: states },
            { name: 'County', value: selectedCounty, set: setSelectedCounty, options: counties }]
            .map(({ name, value, set, options }) => (
              <select
                key={name}
                value={value}
                onChange={(e) => set(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:border-[#387b8c]"
              >
                {options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
          ))}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-[#387b8c] text-white rounded-md hover:bg-[#387b8c]/90 transition-colors flex items-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            Advanced Filters
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="mt-6 p-6 bg-slate-800 rounded-lg border border-slate-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Price Range", range: priceRange, set: setPriceRange, max: 1000000, step: 10000 },
              { label: "Cash Flow Range", range: cashFlowRange, set: setCashFlowRange, max: 200000, step: 5000 },
            ].map(({ label, range, set, max, step }) => (
              <div key={label}>
                <label className="block text-white text-sm font-medium mb-2">{label}</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max={max}
                    step={step}
                    value={range[1]}
                    onChange={(e) => set([range[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-white text-sm">{formatPrice(range[1])}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default BusinessFilters;
