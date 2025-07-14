"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex justify-center items-center space-x-4 mt-8">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="p-2 rounded-md bg-slate-700 text-white disabled:opacity-50 hover:bg-slate-600"
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
              ? "bg-[#387b8c] text-white"
              : "bg-slate-700 text-gray-300 hover:bg-slate-600"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="p-2 rounded-md bg-slate-700 text-white disabled:opacity-50 hover:bg-slate-600"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
);

export default Pagination;
