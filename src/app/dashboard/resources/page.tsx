"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, FileText, Search, Folder, ChevronRight, PenTool, FileSpreadsheet, Presentation } from "lucide-react";

export default function ResourcesPage() {
  const resourceGroups = [
    {
      title: "SME Business Growth Bundle",
      items: [
        { name: "Product One-Pager", type: "pdf", format: ".PDF", size: "1.2 MB", isEditable: false, tools: "PDF Viewer", icon: FileText },
        { name: "Pricing Calculator", type: "spreadsheet", format: ".XLSX", size: "845 KB", isEditable: true, tools: "Excel, Google Sheets", icon: FileSpreadsheet },
        { name: "Sales Pitch Deck", type: "presentation", format: ".PPTX", size: "4.5 MB", isEditable: true, tools: "PowerPoint, Google Slides", icon: Presentation },
        { name: "Proposal Template", type: "doc", format: ".DOCX", size: "210 KB", isEditable: true, tools: "Word, Google Docs", icon: FileText },
        { name: "Email Templates", type: "doc", format: ".DOCX", size: "12 KB", isEditable: true, tools: "Word, Google Docs", icon: FileText },
        { name: "Objection-Handling Guide", type: "pdf", format: ".PDF", size: "1.8 MB", isEditable: false, tools: "PDF Viewer", icon: FileText },
        { name: "Product Explainer Video", type: "video", format: ".MP4", size: "12.4 MB", isEditable: false, tools: "Media Player", icon: PlayCircle },
      ]
    },
    {
      title: "CRM",
      items: [
        { name: "Product Overview", type: "pdf", format: ".PDF", size: "2.1 MB", isEditable: false, tools: "PDF Viewer", icon: FileText },
        { name: "Live Demo Recording", type: "video", format: ".MP4", size: "45.2 MB", isEditable: false, tools: "Media Player", icon: PlayCircle },
        { name: "Sales Script", type: "doc", format: ".DOCX", size: "15 KB", isEditable: true, tools: "Word, Google Docs", icon: FileText },
        { name: "Pricing Guide", type: "spreadsheet", format: ".XLSX", size: "920 KB", isEditable: true, tools: "Excel, Google Sheets", icon: FileSpreadsheet },
        { name: "Proposal Template", type: "doc", format: ".DOCX", size: "185 KB", isEditable: true, tools: "Word, Google Docs", icon: FileText },
      ]
    },
    {
      title: "Loyalty Programme",
      items: [
        { name: "Product Pitch Deck", type: "presentation", format: ".PPTX", size: "3.2 MB", isEditable: true, tools: "PowerPoint, Google Slides", icon: Presentation },
        { name: "App Demo Video", type: "video", format: ".MP4", size: "28.5 MB", isEditable: false, tools: "Media Player", icon: PlayCircle },
        { name: "Industry Use Cases", type: "pdf", format: ".PDF", size: "1.1 MB", isEditable: false, tools: "PDF Viewer", icon: FileText },
        { name: "Outreach Templates", type: "doc", format: ".DOCX", size: "22 KB", isEditable: true, tools: "Word, Google Docs", icon: FileText },
      ]
    }
  ];

  const [activeProduct, setActiveProduct] = useState(resourceGroups[0].title);
  const activeGroup = resourceGroups.find(g => g.title === activeProduct) || resourceGroups[0];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'text-red-500 bg-red-50 ring-1 ring-red-100';
      case 'video': return 'text-br-blue bg-blue-50 ring-1 ring-blue-100';
      case 'doc': return 'text-indigo-500 bg-indigo-50 ring-1 ring-indigo-100';
      case 'spreadsheet': return 'text-green-600 bg-green-50 ring-1 ring-green-100';
      case 'presentation': return 'text-orange-500 bg-orange-50 ring-1 ring-orange-100';
      default: return 'text-gray-500 bg-gray-50 ring-1 ring-gray-100';
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight text-br-navy">Resource Library</h1>
          <p className="text-gray-500 mt-2 font-medium">Your ultimate sales toolkit. Download decks, pricing, and scripts.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-br-blue/20 focus:border-br-blue transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar / Clickable Products */}
        <div className="md:col-span-1 space-y-1">
          <h3 className="text-xs font-bold font-outfit text-gray-400 uppercase tracking-wider mb-3 px-2">Select Product</h3>
          <div className="flex flex-col space-y-1.5">
            {resourceGroups.map((group) => {
              const isActive = activeProduct === group.title;
              return (
                <button
                  key={group.title}
                  onClick={() => setActiveProduct(group.title)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition-all duration-200 ${
                    isActive 
                      ? 'bg-br-navy text-white shadow-md shadow-br-navy/10 translate-x-1' 
                      : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm hover:text-br-blue'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Folder className={`h-4 w-4 ${isActive ? 'text-br-blue' : 'text-gray-400'}`} />
                    <span className="text-left leading-tight">{group.title}</span>
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4 text-white/50" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="md:col-span-3">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
              <h2 className="text-xl font-bold font-outfit text-br-navy">{activeGroup.title} Resources</h2>
              <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                {activeGroup.items.length} Files
              </span>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeGroup.items.map((item, j) => (
                <Card 
                  key={j} 
                  className="rounded-xl border-gray-100 shadow-sm hover:shadow-md hover:border-br-blue/30 hover:-translate-y-0.5 transition-all group bg-white flex flex-col overflow-hidden"
                >
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl shrink-0 ${getIconColor(item.type)}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      {item.isEditable && (
                        <span className="bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                          Editable
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-bold font-outfit text-br-navy text-sm leading-tight group-hover:text-br-blue transition-colors mb-2">
                        {item.name}
                      </p>
                      
                      <div className="space-y-1.5 mt-3">
                        <div className="flex items-center text-xs text-gray-500 font-medium">
                          <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md mr-2">{item.format}</span>
                          {item.size}
                        </div>
                        {item.isEditable && (
                          <div className="text-[11px] text-gray-400 font-medium leading-tight mt-1">
                            Opens in: <span className="text-gray-500">{item.tools}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  
                  <div className="px-3 pb-3 pt-0 mt-auto">
                    {item.isEditable ? (
                      <div className="flex gap-2">
                        <Button variant="default" className="flex-1 h-9 text-xs font-semibold font-outfit bg-br-blue hover:bg-br-navy text-white shadow-sm transition-colors">
                          <PenTool className="h-3.5 w-3.5 mr-1.5" /> Customize
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 text-gray-500 hover:text-br-blue border-gray-200" title="Download Original">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : item.type === 'video' ? (
                      <Button variant="ghost" className="w-full h-9 text-xs font-semibold font-outfit text-gray-500 bg-gray-50/50 group-hover:bg-br-blue group-hover:text-white transition-colors">
                        <PlayCircle className="h-3.5 w-3.5 mr-2" /> Watch Video
                      </Button>
                    ) : (
                      <Button variant="ghost" className="w-full h-9 text-xs font-semibold font-outfit text-gray-500 bg-gray-50/50 group-hover:bg-br-blue group-hover:text-white transition-colors">
                        <Download className="h-3.5 w-3.5 mr-2" /> Download
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
