"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { PackageOpen, ArrowRight } from "lucide-react";

export function RecommendedCarousel() {
  const recommended = products.filter(p => p.popular).slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (recommended.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommended.length);
    }, 5000); // Auto-swipe every 5 seconds
    return () => clearInterval(interval);
  }, [recommended.length]);

  if (recommended.length === 0) return null;

  const currentProduct = recommended[currentIndex];

  return (
    <div className="mt-8 mb-4">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-lg font-bold font-outfit text-br-navy">Recommended to Promote</h2>
        <div className="flex items-center gap-2">
          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5 mr-4">
            {recommended.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-4 bg-br-blue" : "w-1.5 bg-gray-200"}`}
              />
            ))}
          </div>
          <Link href="/portal/dashboard/products" className="text-sm font-semibold text-br-blue hover:text-br-navy transition-colors flex items-center group">
            View All <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-2xl h-[100px]">
        {recommended.map((product, idx) => (
          <div 
            key={product.slug}
            className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
              idx === currentIndex 
                ? "opacity-100 translate-x-0 z-10" 
                : idx < currentIndex || (currentIndex === 0 && idx === recommended.length - 1)
                  ? "opacity-0 -translate-x-full z-0" 
                  : "opacity-0 translate-x-full z-0"
            }`}
          >
            <Link href={`/portal/dashboard/products/${product.slug}`} className="block group h-full">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-br-blue/20 hover:shadow-md transition-all flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 text-gray-500 rounded-xl group-hover:bg-br-blue group-hover:text-white transition-colors shrink-0">
                    <PackageOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold font-outfit text-amber-500 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Hot</span>
                      <p className="font-bold font-outfit text-br-navy text-base line-clamp-1">{product.name}</p>
                    </div>
                    <p className="text-sm text-br-blue font-bold font-outfit">Earn {product.affiliateComm} per sale</p>
                  </div>
                </div>
                <div className="shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-br-blue transition-colors ml-4 shadow-sm">
                  <ArrowRight className="h-4 w-4 text-br-blue group-hover:text-white group-hover:-rotate-45 transition-all" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
