"use client";
import { Calendar, Users, MapPin, Heart, Share2, Eye } from "lucide-react";
import Image from "next/image";

const BusinessCard = ({ business, formatPrice }) => (
  <div className="bg-slate-700 rounded-lg overflow-hidden border border-slate-600 hover:border-[#387b8c] transition-all duration-300 hover:shadow-lg">
    <div className="relative">
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          src={business.image}
          alt={business.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
          <Heart className="w-4 h-4 text-white" />
        </button>
        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
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

      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{business.description}</p>

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
        <button className="flex-1 bg-[#387b8c] text-white py-2 px-4 rounded-md hover:bg-[#387b8c]/90 font-semibold">
          View Details
        </button>
        <button className="p-2 border border-[#387b8c] text-[#387b8c] rounded-md hover:bg-[#387b8c] hover:text-white">
          <Eye className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default BusinessCard;
