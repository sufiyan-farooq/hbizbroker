"use client"
import { Search, Filter, ChevronDown, ChevronLeft, ChevronRight, MapPin, DollarSign, Calendar, Users, Building, Heart, Share2, Eye } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';
import Image from "next/image";
import whywork from "@/assets/whywork.jpg";

const BusinessListingSystem = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Fix hydration issue by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [businesses] = useState([
    {
      id: 1,
      title: "San Bernardino Home Health Past 36 months",
      location: "Upland, CA",
      price: 175000,
      cashFlow: 45000,
      category: "Home Health",
      image: whywork, // Using the imported image
      description: "Joint Commission Accredited Home Health Agency - Inland Empire | Solid History & Active Census Now available is an excellent opportunity to acquire a well-established, Joint Commission-accredited home health agency located in San Bernardino County.",
      established: "2018",
      employees: "15-20"
    },
    {
      id: 2,
      title: "Accredited Hospice Business for Sale in Orange County, California",
      location: "Tustin, CA",
      price: 500000,
      cashFlow: 125000,
      category: "Hospice",
      image: whywork,
      description: "We are pleased to present an excellent opportunity to acquire an Accredited hospice business in Orange County, California. This hospice agency operates under a California Sub-chapter S-Corporation structure.",
      established: "2019",
      employees: "25-30"
    },
    {
      id: 3,
      title: "ACHC-Accredited Hospice in San Gabriel",
      location: "San Gabriel, CA",
      price: 475000,
      cashFlow: 110000,
      category: "Hospice",
      image: whywork,
      description: "This ACHC-accredited hospice business, located in San Gabriel, California, offers a turnkey opportunity for buyers with healthcare experience.",
      established: "2017",
      employees: "20-25"
    },
    {
      id: 4,
      title: "Bay Area Holistic Medical Clinics for Sale",
      location: "San Francisco, CA",
      price: 340000,
      cashFlow: 85000,
      category: "Medical Clinic",
      image: whywork,
      description: "We have an exciting opportunity to bring to the marketplace for the first time two Holistic Medical clinics located in the Bay area.",
      established: "2015",
      employees: "10-15"
    },
    {
      id: 5,
      title: "Accredited Home Health Agency – Turnkey & Profitable",
      location: "San Bernardino, CA",
      price: 500000,
      cashFlow: 120000,
      category: "Home Health",
      image: whywork,
      description: "Accredited Home Health Agency for Sale – San Bernardino, Riverside, and Los Angeles counties – $500,000 – Joint Commission.",
      established: "2016",
      employees: "18-22"
    },
    {
      id: 6,
      title: "Southern CA CHAP Hospice for Sale",
      location: "San Bernardino, CA",
      price: 475000,
      cashFlow: 105000,
      category: "Hospice",
      image: whywork,
      description: "Southern California CHAP Accredited Hospice | Post 36 Month Rule | No CAP Liability | All Cash Only This is a rare opportunity to acquire a fully licensed, CHAP-accredited hospice agency.",
      established: "2018",
      employees: "22-28"
    },
    {
      id: 7,
      title: "Ventura County Hospice Business Opportunity",
      location: "Moorpark, CA",
      price: 550000,
      cashFlow: 135000,
      category: "Hospice",
      image: whywork,
      description: "This is an rare opportunity to acquire a hospice business located in Moorpark, California, operating as a California L-Corporation.",
      established: "2017",
      employees: "25-30"
    },
    {
      id: 8,
      title: "Home Health License with Wide Coverage",
      location: "Los Angeles, CA",
      price: 370000,
      cashFlow: 95000,
      category: "Home Health",
      image: whywork,
      description: "Home Health License for Sale County Oakland and accredited home health agency in Los Angeles California. The agency is immediately positioned to service.",
      established: "2019",
      employees: "12-18"
    }
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedState, setSelectedState] = useState('All US States');
  const [selectedCounty, setSelectedCounty] = useState('All Counties');
  const [sortBy, setSortBy] = useState('Default');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Filter options
  const categories = ['All Categories', 'Home Health', 'Hospice', 'Medical Clinic', 'Assisted Living', 'Skilled Nursing'];
  const states = ['All US States', 'California', 'Texas', 'Florida', 'New York', 'Nevada'];
  const counties = ['All Counties', 'Los Angeles', 'Orange', 'San Bernardino', 'Riverside', 'Ventura'];
  const sortOptions = ['Default', 'Price ($ to $$$)', 'Price ($$$ to $)', 'Cash Flow ($ to $$$)', 'Cash Flow ($$$ to $)', 'Location (A-Z)', 'Location (Z-A)'];

  // Advanced filters
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [cashFlowRange, setCashFlowRange] = useState([0, 200000]);

  // Filter and sort logic
  const filteredBusinesses = useMemo(() => {
    let filtered = businesses.filter(business => {
      const matchesSearch = business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All Categories' || business.category === selectedCategory;
      const matchesState = selectedState === 'All US States' || business.location.includes(selectedState);
      const matchesCounty = selectedCounty === 'All Counties' || business.location.includes(selectedCounty);
      const matchesPrice = business.price >= priceRange[0] && business.price <= priceRange[1];
      const matchesCashFlow = business.cashFlow >= cashFlowRange[0] && business.cashFlow <= cashFlowRange[1];

      return matchesSearch && matchesCategory && matchesState && matchesCounty && matchesPrice && matchesCashFlow;
    });

    // Sort logic
    switch (sortBy) {
      case 'Price ($ to $$$)':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price ($$$ to $)':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Cash Flow ($ to $$$)':
        filtered.sort((a, b) => a.cashFlow - b.cashFlow);
        break;
      case 'Cash Flow ($$$ to $)':
        filtered.sort((a, b) => b.cashFlow - a.cashFlow);
        break;
      case 'Location (A-Z)':
        filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case 'Location (Z-A)':
        filtered.sort((a, b) => b.location.localeCompare(a.location));
        break;
    }
    return filtered;
  }, [businesses, searchTerm, selectedCategory, selectedState, selectedCounty, sortBy, priceRange, cashFlowRange]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBusinesses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBusinesses.length / itemsPerPage);

  const formatPrice = (price) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const BusinessCard = ({ business }) => (
    <div className="bg-slate-700 rounded-lg overflow-hidden border border-slate-600 hover:border-[#387b8c] transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={business.image}
            alt={business.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button 
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            suppressHydrationWarning
          >
            <Heart className="w-4 h-4 text-white" />
          </button>
          <button 
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            suppressHydrationWarning
          >
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 bg-[#387b8c] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {business.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white hover:text-[#387b8c] cursor-pointer line-clamp-2">
            {business.title}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#387b8c]">{formatPrice(business.price)}</div>
            <div className="text-sm text-gray-400">Cash Flow: {formatPrice(business.cashFlow)}</div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {business.location}
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {business.description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Est. {business.established}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {business.employees}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className="flex-1 bg-[#387b8c] text-white py-2 px-4 rounded-md hover:bg-[#387b8c]/90 transition-colors font-semibold"
            suppressHydrationWarning
          >
            View Details
          </button>
          <button 
            className="p-2 border border-[#387b8c] text-[#387b8c] rounded-md hover:bg-[#387b8c] hover:text-white transition-colors"
            suppressHydrationWarning
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const Pagination = () => (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-md bg-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
        suppressHydrationWarning
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="flex space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-md transition-colors ${
              currentPage === index + 1
                ? 'bg-[#387b8c] text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
            suppressHydrationWarning
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md bg-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
        suppressHydrationWarning
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  // Don't render until client-side to prevent hydration issues
  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }}  className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <h3 className="text-4xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              BUSINESSES FOR SALE
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
          <p
            style={{ fontFamily: "PoppinRegular" }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <span className="text-white/90 text-lg">
              Find the perfect healthcare business opportunity
            </span>
          </p>
       
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-slate-700 py-6 border-b border-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="City Name or other Keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#387b8c]"
                suppressHydrationWarning
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:border-[#387b8c]"
                suppressHydrationWarning
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:border-[#387b8c]"
                suppressHydrationWarning
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              <select
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:border-[#387b8c]"
                suppressHydrationWarning
              >
                {counties.map(county => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-[#387b8c] text-white rounded-md hover:bg-[#387b8c]/90 transition-colors flex items-center"
                suppressHydrationWarning
              >
                <Filter className="w-5 h-5 mr-2" />
                Advanced Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-6 bg-slate-800 rounded-lg border border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Price Range</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                      suppressHydrationWarning
                    />
                    <span className="text-white text-sm">{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Cash Flow Range</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={cashFlowRange[1]}
                      onChange={(e) => setCashFlowRange([cashFlowRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                      suppressHydrationWarning
                    />
                    <span className="text-white text-sm">{formatPrice(cashFlowRange[1])}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="bg-slate-700 py-4 border-b border-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-white">
            <span className="font-semibold">{filteredBusinesses.length}</span> businesses found
          </div>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:border-[#387b8c] appearance-none pr-8"
              suppressHydrationWarning
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Business Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No businesses found matching your criteria</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map(business => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
            
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
};

export default BusinessListingSystem;