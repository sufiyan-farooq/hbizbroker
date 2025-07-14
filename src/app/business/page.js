"use client";

import { useMemo, useState, useEffect } from "react";
import DisclosureStatement from "@/components/DisclosureStatement";
import SecLetter from "@/components/SectionLetter";
import Pagination from "@/components/Pagination";
import BusinessCard from "@/components/BusinessCard";
import BusinessFilters from "@/components/BusinessFilters";
import BusinessHeader from "@/components/BusinessHeader";
import BusinessGrid from "@/components/BusinessGrid";
import { formatPrice } from "@/components/utils/formatPrice";

import whywork from "@/assets/whywork.jpg";

const BusinessListingSystem = () => {
  const [isClient, setIsClient] = useState(false);

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
      image: whywork,
      description: "Joint Commission Accredited Home Health Agency - Inland Empire | Solid History & Active Census Now available is an excellent opportunity to acquire a well-established, Joint Commission-accredited home health agency located in San Bernardino County.",
      established: "2018",
      employees: "15-20",
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedState, setSelectedState] = useState("All US States");
  const [selectedCounty, setSelectedCounty] = useState("All Counties");
  const [sortBy, setSortBy] = useState("Default");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const categories = ["All Categories", "Home Health", "Hospice", "Medical Clinic", "Assisted Living", "Skilled Nursing"];
  const states = ["All US States", "California", "Texas", "Florida", "New York", "Nevada"];
  const counties = ["All Counties", "Los Angeles", "Orange", "San Bernardino", "Riverside", "Ventura"];
  const sortOptions = [
    "Default",
    "Price ($ to $$$)",
    "Price ($$$ to $)",
    "Cash Flow ($ to $$$)",
    "Cash Flow ($$$ to $)",
    "Location (A-Z)",
    "Location (Z-A)",
  ];

  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [cashFlowRange, setCashFlowRange] = useState([0, 200000]);

  const filteredBusinesses = useMemo(() => {
    let filtered = businesses.filter((business) => {
      const matchesSearch =
        business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "All Categories" || business.category === selectedCategory;
      const matchesState = selectedState === "All US States" || business.location.includes(selectedState);
      const matchesCounty = selectedCounty === "All Counties" || business.location.includes(selectedCounty);
      const matchesPrice = business.price >= priceRange[0] && business.price <= priceRange[1];
      const matchesCashFlow = business.cashFlow >= cashFlowRange[0] && business.cashFlow <= cashFlowRange[1];

      return matchesSearch && matchesCategory && matchesState && matchesCounty && matchesPrice && matchesCashFlow;
    });

    switch (sortBy) {
      case "Price ($ to $$$)":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price ($$$ to $)":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Cash Flow ($ to $$$)":
        filtered.sort((a, b) => a.cashFlow - b.cashFlow);
        break;
      case "Cash Flow ($$$ to $)":
        filtered.sort((a, b) => b.cashFlow - a.cashFlow);
        break;
      case "Location (A-Z)":
        filtered.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case "Location (Z-A)":
        filtered.sort((a, b) => b.location.localeCompare(a.location));
        break;
    }
    return filtered;
  }, [businesses, searchTerm, selectedCategory, selectedState, selectedCounty, sortBy, priceRange, cashFlowRange]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBusinesses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBusinesses.length / itemsPerPage);

  if (!isClient) return null;

  return (
    <>
      <div className="min-h-screen bg-slate-800">
        <BusinessHeader />

        <BusinessFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCounty={selectedCounty}
          setSelectedCounty={setSelectedCounty}
          categories={categories}
          states={states}
          counties={counties}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          cashFlowRange={cashFlowRange}
          setCashFlowRange={setCashFlowRange}
          formatPrice={formatPrice}
        />

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
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BusinessGrid businesses={currentItems} formatPrice={formatPrice} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      <DisclosureStatement />
      <SecLetter />
    </>
  );
};

export default BusinessListingSystem;
