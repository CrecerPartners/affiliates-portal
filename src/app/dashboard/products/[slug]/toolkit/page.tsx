import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, Eye, FileText, Presentation, MessageSquare, Briefcase, Video, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default async function SalesToolkitPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto pb-24">
      {/* Back Nav */}
      <Link href={`/dashboard/products/${product.slug}`} className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-br-blue transition-colors mb-8 group">
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to {product.name}
      </Link>

      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold font-outfit text-br-navy tracking-tight mb-3">
          {product.name} Sales Toolkit
        </h1>
        <p className="text-gray-500 text-lg">
          Everything you need to pitch, present, and close {product.name} deals.
        </p>
      </div>

      {/* Featured Resource (e.g. Pitch Deck) */}
      <div className="bg-white rounded-3xl border border-br-blue/20 shadow-[0_4px_30px_rgb(0,82,255,0.05)] overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-br-navy to-br-blue p-8 md:p-12 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Presentation className="h-4 w-4" /> Featured Asset
            </div>
            <h2 className="text-3xl font-extrabold font-outfit mb-4">{product.name} Pitch Deck</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Ready-to-use sales deck explaining the problem, solution, loyalty superpowers, customer benefits and implementation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={product.pitchDeckUrl || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-br-navy hover:bg-gray-50 font-bold h-12 px-6 rounded-xl">
                  <Eye className="h-4 w-4 mr-2" /> {product.pitchDeckUrl ? "View Slide Deck" : "Deck Coming Soon"}
                </Button>
              </a>
              <a href={product.pitchDeckUrl || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="bg-br-navy text-white hover:bg-[#051b36] border border-white/20 font-bold h-12 px-6 rounded-xl">
                  <Download className="h-4 w-4 mr-2" /> Download & Customise
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Assets Grid */}
      <h3 className="text-2xl font-bold font-outfit text-br-navy mb-6">Additional Resources</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Email Templates */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-br-blue transition-colors group cursor-pointer shadow-sm hover:shadow-md">
          <div className="h-12 w-12 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-br-blue/10 group-hover:text-br-blue transition-colors">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-br-navy text-lg mb-2">Cold Email Sequence</h4>
          <p className="text-gray-500 text-sm mb-4">3-part email sequence to introduce {product.name} to prospects.</p>
          <div className="text-br-blue font-semibold text-sm flex items-center">
            View Templates <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
          </div>
        </div>

        {/* Objection Handling */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-br-blue transition-colors group cursor-pointer shadow-sm hover:shadow-md">
          <div className="h-12 w-12 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-br-blue/10 group-hover:text-br-blue transition-colors">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-br-navy text-lg mb-2">Objection Handling Guide</h4>
          <p className="text-gray-500 text-sm mb-4">How to respond to &quot;it&apos;s too expensive&quot; or &quot;we already have an app&quot;.</p>
          <div className="text-br-blue font-semibold text-sm flex items-center">
            Read Guide <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
          </div>
        </div>

        {/* Demo Video */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-br-blue transition-colors group cursor-pointer shadow-sm hover:shadow-md">
          <div className="h-12 w-12 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-br-blue/10 group-hover:text-br-blue transition-colors">
            <Video className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-br-navy text-lg mb-2">Product Demo Video</h4>
          <p className="text-gray-500 text-sm mb-4">A 2-minute walkthrough showing exactly how the product works.</p>
          <div className="text-br-blue font-semibold text-sm flex items-center">
            Watch Video <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
          </div>
        </div>

      </div>
    </div>
  );
}
