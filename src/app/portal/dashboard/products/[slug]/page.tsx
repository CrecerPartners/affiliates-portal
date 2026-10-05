import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Target, Briefcase, ExternalLink, ShieldCheck, Sparkles, Users, HelpCircle, Gift, Box, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto pb-24 relative">
      

      
      {/* Back Navigation */}
      <div className="mb-6">
        <Link href="/portal/dashboard" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-br-blue transition-colors group">
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
        </Link>
      </div>

      {/* Compact Hero Section */}

      <div className="relative mb-24">
        <div className="bg-gradient-to-br from-[#020b16] to-br-navy rounded-3xl overflow-hidden relative pt-12 pb-24 px-8 md:px-14 border border-gray-900 shadow-2xl">
          {/* Abstract glowing background */}
          <div className="absolute top-0 right-0 w-full max-w-lg h-full opacity-30 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-br-blue/40 blur-[120px] rounded-full"></div>
            <div className="absolute right-20 top-20 w-[200px] h-[200px] bg-purple-500/20 blur-[80px] rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-bold font-outfit text-br-blue mb-4">
              <span className="uppercase tracking-wider border-b border-br-blue/30 pb-0.5">{product.category}</span>
              <ChevronRight className="h-4 w-4 text-gray-600" />
              <span className="text-white">{product.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold font-outfit leading-tight tracking-tight text-white mb-4">
              {product.name}
            </h1>
            
            {product.oneLiner && (
              <p className="text-lg md:text-xl font-medium font-outfit text-blue-100/80 leading-relaxed max-w-xl">
                {product.oneLiner}
              </p>
            )}
          </div>
        </div>

        {/* Floating Info Bar (Overlapping Hero) */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl bg-blue-50/95 backdrop-blur-md rounded-2xl shadow-xl shadow-br-blue/10 border border-blue-100/50 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 z-20">
           <div className="flex divide-x divide-blue-200/60 w-full">
             <div className="px-4 md:px-6 first:pl-2">
               <p className="text-xs md:text-sm font-bold font-outfit text-br-navy">Retail Price</p>
               <p className="text-gray-600 text-xs md:text-sm mt-1 font-medium">{product.price}</p>
             </div>
             <div className="px-4 md:px-6">
               <p className="text-xs md:text-sm font-bold font-outfit text-br-navy">Commission</p>
               <p className="text-br-blue font-bold text-xs md:text-sm mt-1 flex items-center gap-1">
                 <Briefcase className="h-3.5 w-3.5" /> {product.affiliateComm}
               </p>
             </div>
             <div className="px-4 md:px-6">
               <p className="text-xs md:text-sm font-bold font-outfit text-br-navy">Status</p>
               <p className="text-amber-600 font-bold text-xs md:text-sm mt-1 flex items-center gap-1">
                 {product.popular ? <><Sparkles className="h-3.5 w-3.5" /> High Converter</> : 'Standard'}
               </p>
             </div>
           </div>
           
           <Link href={`/portal/dashboard/products/${product.slug}/toolkit`} className="w-full md:w-auto shrink-0">
             <Button className="w-full bg-[#5E42F5] hover:bg-[#4d34d1] text-white font-bold font-outfit rounded-xl h-11 px-8 shadow-[0_4px_14px_0_rgba(94,66,245,0.39)] transition-all">
                Sales Toolkit
             </Button>
           </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mt-12">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-20">
          
          {/* Product Overview (Now containing the mockup!) */}
          <div id="overview" className="scroll-mt-32 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-10 items-center justify-between">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-extrabold font-outfit text-br-navy">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Phone Mockup moved to overview side */}
            <div className="relative w-[240px] h-[480px] bg-gray-900 rounded-[2.5rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10 shrink-0 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 rounded-b-2xl z-20 w-32 mx-auto"></div>
              <div className="w-full h-full bg-gray-50 flex flex-col relative overflow-hidden">
                <div className="p-5 pb-2 bg-gradient-to-b from-gray-200 to-gray-50">
                  <h3 className="text-xl font-extrabold font-outfit text-gray-900 tracking-tight">Wallet</h3>
                </div>
                <div className="mx-3 mt-3 bg-gradient-to-br from-br-navy to-br-blue rounded-2xl h-64 shadow-xl relative overflow-hidden border border-white/10 flex flex-col">
                  <div className="px-4 pt-4 pb-2 flex justify-between items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <div className="w-4 h-4 bg-br-blue rounded-sm rotate-45"></div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest">Points</p>
                      <p className="text-white text-2xl font-extrabold font-outfit">2,450</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 flex-1">
                    <h4 className="text-white font-bold font-outfit text-lg">BlueRock VIP</h4>
                    <p className="text-blue-200 text-[10px] mt-0.5">John Doe • Gold</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 flex flex-col items-center justify-center border-t border-white/10">
                    <div className="w-24 h-24 bg-white rounded-lg p-1.5 shadow-inner">
                      <div className="w-full h-full border-[3px] border-gray-900 flex flex-wrap gap-0.5 p-1">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className={`w-[20%] h-[20%] bg-gray-900 ${i%3===0 ? 'opacity-0' : 'opacity-100'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                  <div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Superpowers */}
          {product.superPowers && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-extrabold font-outfit text-br-navy">Superpowers</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {product.superPowers.map((power, idx) => (
                  <div key={idx} className="bg-white border border-gray-200/80 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] rounded-2xl p-6 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] hover:border-gray-300/80 transition-all">
                    <h3 className="font-bold font-outfit text-br-navy text-lg mb-2">{power.title}</h3>
                    {power.description && <p className="text-gray-500 text-sm leading-relaxed">{power.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Benefits */}
          <div className="space-y-8 bg-gray-50/50 rounded-3xl p-8 md:p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-extrabold font-outfit text-br-navy">Key Benefits</h2>
            </div>
            <p className="text-gray-500 mb-8 font-medium">How this product directly impacts the customer&apos;s bottom line.</p>
            
            <div className="space-y-4">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] border border-gray-200/80">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">{benefit.title}</h3>
                    {benefit.description && <p className="text-gray-500 text-sm mt-1 leading-relaxed">{benefit.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Feature List */}
          <div id="features" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
              <div className="p-3 bg-br-blue/10 text-br-blue rounded-xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-extrabold font-outfit text-br-navy">Full Feature List</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-gray-200/80 rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]">
                  <CheckCircle2 className="h-5 w-5 text-br-blue shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <div id="faqs" className="space-y-8 scroll-mt-24">
               <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold font-outfit text-br-navy">Frequently Asked Questions</h2>
                  <p className="text-sm text-gray-500 font-medium mt-1">Questions customers frequently ask about {product.name}.</p>
                </div>
              </div>
              
              <div className="w-full space-y-4">
                {product.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12)] transition-all [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-6 font-bold font-outfit text-br-navy hover:text-br-blue list-none">
                      {faq.question}
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 leading-relaxed px-6 pb-6">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          {/* Who It&apos;s For */}
          <div id="audience" className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] scroll-mt-24 sticky top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-extrabold font-outfit text-br-navy">Who It&apos;s For</h2>
            </div>
            
            <div className="space-y-8">
              {product.useCases.map((useCaseGroup, idx) => (
                <div key={idx}>
                  {useCaseGroup.category && <h4 className="font-bold text-gray-800 mb-3">{useCaseGroup.category}</h4>}
                  <ul className="space-y-2">
                    {useCaseGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Target className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables / What they get */}
          {product.deliverables && (
            <div className="bg-br-navy rounded-3xl p-8 shadow-lg text-white">
               <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/10 text-white rounded-xl">
                  <Box className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-extrabold font-outfit">Included With {product.name}</h2>
              </div>
              <ul className="space-y-3">
                {product.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-blue-100">
                    <Gift className="h-4 w-4 text-br-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
