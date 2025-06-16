import React from 'react';
import { ChevronRight } from 'lucide-react';

 export default function ShopHeader() {
  return (
      <div className="bg-gray-100 ">
        <header className="w-full shadow-md">
          {/*  MASAÜSTÜ  */}
          <nav className="hidden md:flex justify-between items-center px-6 py-4 bg-white text-gray-900">
            {/* Sol taraf: Brand (Logo) */}
            <div className="text-xl font-bold">Shop</div>
            {/* Sağ taraf: İkonlar */}
            <div className="flex items-center gap-4 text-sm font-semibold">
              <a className="flex items-center gap-1">
                <span>Home</span>
              </a>
              <a><ChevronRight className="w-4 h-4" /></a>
              <a className="flex items-center gap-1 text-gray-500">
                <span>Shop</span>
              </a>
            </div>
          </nav>
        </header>
        </div>
 )};