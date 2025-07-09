import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer
    
     className=" text-white relative overflow-hidden" style={{
    background: 'linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)',
  }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              CONNECT WITH US
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
          
          <div className="flex justify-center items-center space-x-6 mb-12">
            <a 
              href="#" 
              className="group relative bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Facebook className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#" 
              className="group relative bg-gradient-to-br from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <Instagram className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full bg-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#" 
              className="group relative bg-gradient-to-br from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#" 
              className="group relative bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <Twitter className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full bg-gray-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#" 
              className="group relative bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
            >
              <div className="h-6 w-6 text-white font-bold flex items-center justify-center text-sm transition-transform group-hover:scale-110">
                Y
              </div>
              <div className="absolute inset-0 rounded-full bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p className="mb-2" style={{ fontFamily: "PoppinRegular" }}>
                <span className="font-semibold text-white">HEALTHCARE BIZ BROKERS, INC.</span  > - CAL DRE# 02092341
              </p>
              <p>
                <span className="font-semibold text-white" style={{ fontFamily: "PoppinRegular" }}>RALPH SANTOS, BROKER</span> - CAL DRE #02006120
              </p>
            </div>
            
            <div className="text-sm text-gray-400 text-center md:text-right" style={{ fontFamily: "PoppinRegular" }}>
              <p className="mb-2">COPYRIGHT© 2019-2024</p>
              <p className="text-white font-medium">ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}