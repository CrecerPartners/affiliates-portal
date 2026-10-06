"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PackageOpen, Search, Filter, ArrowUpRight, Smartphone, Briefcase, Users, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { products, categories } from "@/data/products";

// Map modern pastel colors and bespoke icons to the products
const productStyles = [
  { bg: "bg-[#e8f2ff]", iconBg: "bg-blue-100", text: "text-blue-600", Icon: Smartphone }, // BlueRock Loyalty
  { bg: "bg-[#d9f5a3]", iconBg: "bg-[#c8eb86]", text: "text-[#5b7324]", Icon: Briefcase }, // SME Bundle
  { bg: "bg-[#eadaff]", iconBg: "bg-[#d8bfff]", text: "text-[#56368b]", Icon: Users }, // CRM
  { bg: "bg-[#ffe8d6]", iconBg: "bg-[#ffd3ad]", text: "text-[#8a4e1e]", Icon: MessageSquare }, // WhatsApp
];

export default function ProductsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12 relative">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight text-br-navy">Products</h1>
          <p className="text-gray-500 mt-2 font-medium">Discover our highly-converting products and commission structures.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-br-blue/20 focus:border-br-blue transition-all shadow-sm"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto h-9 rounded-xl border-gray-200 text-gray-600 bg-white shadow-sm hidden sm:flex">
            <Filter className="h-4 w-4 mr-2" /> Filters
          </Button>
        </div>
      </div>

      {/* Categories Segmented Control */}
      <div className="flex overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex p-1 bg-gray-100/80 rounded-xl border border-gray-200/50">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-1.5 rounded-lg text-sm font-semibold font-outfit transition-all ${
                activeCategory === cat 
                  ? "bg-white text-br-navy shadow-sm border border-gray-200/50" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {filteredProducts.map((product, idx) => {
          const style = productStyles[idx % productStyles.length];
          const IconComponent = style.Icon;

          return (
            <div 
              key={product.slug}
              onClick={() => router.push(`/portal/dashboard/products/${product.slug}`)}
              className={`group relative p-8 rounded-[32px] flex flex-col min-h-[360px] ${style.bg} transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden`}
            >
              {/* Top Status & Organic Icon */}
              <div className="flex justify-between items-start mb-10">
                {product.popular ? (
                  <div className="bg-white/80 backdrop-blur-sm text-gray-900 text-[10px] font-bold font-outfit px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-white">
                    High Converter
                  </div>
                ) : (
                  <div></div>
                )}
                
                {/* Organic shape abstract bubble */}
                <div className={`w-16 h-16 rounded-tl-full rounded-tr-3xl rounded-bl-3xl rounded-br-[40px] flex items-center justify-center ${style.iconBg} shadow-sm group-hover:rotate-12 transition-transform duration-500`}>
                  <IconComponent className={`h-7 w-7 ${style.text}`} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-extrabold font-outfit text-gray-900 leading-tight mb-3 pr-4 group-hover:text-br-blue transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700/80 leading-relaxed line-clamp-3 mb-8 font-medium">
                {product.description}
              </p>

              {/* Bottom Row */}
              <div className="mt-auto flex items-end justify-between relative z-10">
                <div className="bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/50 shadow-sm flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-0.5">Commission</span>
                  <span className="font-extrabold font-outfit text-gray-900 text-base">{product.affiliateComm}</span>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-xl group-hover:bg-br-blue group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-colors" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white border border-gray-100 rounded-[2rem]">
          <PackageOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold font-outfit text-br-navy">No products found</h3>
          <p className="text-gray-500 text-sm mt-1">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
