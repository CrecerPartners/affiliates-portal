"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, MousePointerClick, Users, CheckCircle, MapPin, Smartphone, Globe, ArrowRight, ExternalLink } from "lucide-react";

export default function ReferralsPage() {
  const [activeTab, setActiveTab] = useState<"prospects" | "clicks">("prospects");

  const metrics = [
    { title: "Total Link Clicks", value: "248", icon: MousePointerClick, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Active Prospects", value: "12", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Converted Deals", value: "7", icon: CheckCircle, color: "text-green-500", bg: "bg-green-50" },
  ];

  const referrals = [
    { id: 1, prospect: "ABC Limited", email: "contact@abcltd.com", initials: "AB", product: "SME Bundle", date: "Oct 2, 2026", status: "Won", commission: "₦100,000" },
    { id: 2, prospect: "XYZ Foods", email: "hello@xyzfoods.ng", initials: "XY", product: "CRM", date: "Oct 4, 2026", status: "In Progress", commission: "Pending" },
    { id: 3, prospect: "KLM Hotel", email: "info@klmhotel.com", initials: "KL", product: "Loyalty", date: "Oct 5, 2026", status: "Referred", commission: "Pending" },
    { id: 4, prospect: "TechGiant Africa", email: "sales@techgiant.africa", initials: "TG", product: "SME Bundle", date: "Oct 10, 2026", status: "Contacted", commission: "Pending" },
    { id: 5, prospect: "GreenAgro Ltd", email: "admin@greenagro.com", initials: "GA", product: "WhatsApp Auto", date: "Oct 12, 2026", status: "Lost", commission: "₦0" },
  ];

  const clicks = [
    { id: 1, date: "Oct 12, 2026 • 14:30", source: "WhatsApp", location: "Lagos, NG", device: "Mobile", result: "Signed Up", isSuccess: true },
    { id: 2, date: "Oct 12, 2026 • 12:15", source: "Direct Link", location: "Abuja, NG", device: "Desktop", result: "Browsed", isSuccess: false },
    { id: 3, date: "Oct 11, 2026 • 09:45", source: "Twitter / X", location: "Port Harcourt, NG", device: "Mobile", result: "Browsed", isSuccess: false },
    { id: 4, date: "Oct 10, 2026 • 16:20", source: "LinkedIn", location: "Lagos, NG", device: "Desktop", result: "Signed Up", isSuccess: true },
    { id: 5, date: "Oct 10, 2026 • 11:10", source: "WhatsApp", location: "Ibadan, NG", device: "Mobile", result: "Browsed", isSuccess: false },
    { id: 6, date: "Oct 09, 2026 • 08:30", source: "Direct Link", location: "Lagos, NG", device: "Mobile", result: "Browsed", isSuccess: false },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Won': return 'text-green-700 bg-green-50 ring-green-600/20';
      case 'In Progress': return 'text-amber-700 bg-amber-50 ring-amber-600/20';
      case 'Contacted': return 'text-br-blue bg-br-blue/10 ring-br-blue/20';
      case 'Lost': return 'text-red-700 bg-red-50 ring-red-600/20';
      default: return 'text-gray-600 bg-gray-50 ring-gray-500/10';
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight text-br-navy">My Referrals</h1>
          <p className="text-gray-500 mt-2 font-medium">Track your link traffic and monitor prospect conversions in real-time.</p>
        </div>
        <Button className="bg-br-blue hover:bg-br-navy text-white rounded-xl h-11 px-6 font-semibold font-outfit shadow-sm transition-all">
          <Plus className="h-4 w-4 mr-2" /> Submit Offline Referral
        </Button>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {metrics.map((metric, i) => (
          <Card key={i} className="rounded-2xl border-gray-100 shadow-sm bg-white overflow-hidden">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3.5 rounded-2xl ${metric.bg} ${metric.color}`}>
                <metric.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold font-outfit text-gray-500 uppercase tracking-wider">{metric.title}</p>
                <h3 className="text-3xl font-bold font-outfit text-br-navy mt-1 tracking-tight">{metric.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm bg-white overflow-hidden">
        {/* Sleek Segmented Control Tabs */}
        <div className="border-b border-gray-100 bg-white px-6 pt-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setActiveTab("prospects")}
              className={`pb-4 text-sm font-bold font-outfit uppercase tracking-wider transition-all border-b-2 ${
                activeTab === "prospects" ? "border-br-blue text-br-blue" : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Registered Prospects
            </button>
            <button 
              onClick={() => setActiveTab("clicks")}
              className={`pb-4 text-sm font-bold font-outfit uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "clicks" ? "border-br-blue text-br-blue" : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Link Traffic (Clicks)
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === "clicks" ? "bg-br-blue/10 text-br-blue" : "bg-gray-100 text-gray-500"}`}>New</span>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-gray-50 flex flex-col sm:flex-row items-center justify-between bg-gray-50/30 gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder={activeTab === "prospects" ? "Search prospects..." : "Search traffic sources..."} 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-br-blue/20 focus:border-br-blue transition-all shadow-sm"
            />
          </div>
          <Button variant="outline" size="sm" className="h-10 px-4 rounded-xl border-gray-200 text-gray-600 font-medium">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          {activeTab === "prospects" ? (
            <table className="w-full text-sm text-left">
              <thead className="text-[11px] text-gray-400 uppercase bg-white font-bold font-outfit tracking-widest border-b border-gray-50">
                <tr>
                  <th className="px-6 py-5">Prospect</th>
                  <th className="px-6 py-5">Product Interest</th>
                  <th className="px-6 py-5">Date Registered</th>
                  <th className="px-6 py-5">Pipeline Status</th>
                  <th className="px-6 py-5 text-right">Exp. Commission</th>
                  <th className="px-6 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {referrals.map((ref) => (
                  <tr key={ref.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-br-blue/10 text-br-blue flex items-center justify-center font-bold font-outfit">
                          {ref.initials}
                        </div>
                        <div>
                          <p className="font-bold text-br-navy">{ref.prospect}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{ref.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">{ref.product}</td>
                    <td className="px-6 py-4 text-gray-500">{ref.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider font-outfit ring-1 ring-inset ${getStatusColor(ref.status)}`}>
                        {ref.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-br-navy">{ref.commission}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-sm text-left">
              <thead className="text-[11px] text-gray-400 uppercase bg-white font-bold font-outfit tracking-widest border-b border-gray-50">
                <tr>
                  <th className="px-6 py-5">Date & Time</th>
                  <th className="px-6 py-5">Traffic Source</th>
                  <th className="px-6 py-5">Location & Device</th>
                  <th className="px-6 py-5">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {clicks.map((click) => (
                  <tr key={click.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-500">{click.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold text-br-navy">{click.source}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <MapPin className="h-3.5 w-3.5 text-gray-400" /> {click.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Smartphone className="h-3 w-3" /> {click.device}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {click.isSuccess ? (
                        <span className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm">
                          <CheckCircle className="h-4 w-4" /> Signed Up
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-gray-500 font-medium text-sm">
                          <ExternalLink className="h-4 w-4" /> Browsed Only
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
}
