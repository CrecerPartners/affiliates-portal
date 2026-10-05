import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Copy, Clock, ShieldCheck, Share2, QrCode, MessageCircle, TrendingUp, Award, Zap, PackageOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import Link from "next/link";
import { GoalTracker } from "@/components/dashboard/GoalTracker";
import { LiveActivityFeed } from "@/components/dashboard/LiveActivityFeed";
import { RecommendedCarousel } from "@/components/dashboard/RecommendedCarousel";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const isReviewMode = resolvedParams.status === "review";

  if (isReviewMode) {
    return (
      <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center space-y-6 pt-12">
        <div className="h-24 w-24 bg-br-blue/5 rounded-full flex items-center justify-center mb-2 ring-1 ring-br-blue/10">
          <Clock className="h-10 w-10 text-br-blue stroke-[1.5]" />
        </div>
        <h1 className="text-3xl font-extrabold font-outfit text-br-navy tracking-tight">Account in Review</h1>
        <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
          Thank you for completing your onboarding! Our team is currently reviewing your application and verifying your documents. 
        </p>
        
        <Card className="w-full mt-8 bg-white border-gray-100 shadow-sm rounded-2xl">
          <CardContent className="p-8">
            <div className="flex items-start gap-5 text-left">
              <div className="p-2 bg-green-50 rounded-lg shrink-0">
                <ShieldCheck className="h-6 w-6 text-green-600 shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold font-outfit text-br-navy text-lg">What happens next?</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  We usually process applications within 24-48 hours. Once approved, you will receive an email notification and full access to your affiliate dashboard and referral links.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Normal Dashboard Mode
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight text-br-navy">
            Welcome back, Seunfunmi 👋
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Ready to close some deals today? Here&apos;s your performance summary.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
          <Award className="h-5 w-5 text-amber-500" />
          <span className="text-sm font-bold font-outfit text-br-navy">Pro Affiliate</span>
        </div>
      </div>

      {/* Top Hero Widgets */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Goal Tracker */}
        <GoalTracker />

        {/* Affiliate Link Hub (The "Interesting" Coding System) */}
        <Card className="bg-white border-gray-100 shadow-sm rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-br-blue/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <CardHeader className="pb-2 pt-6 px-6 relative z-10">
            <CardTitle className="text-sm font-semibold font-outfit text-br-blue uppercase tracking-wider flex items-center gap-2">
              <Zap className="h-4 w-4" /> Your Referral Hub
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6 relative z-10 space-y-5">
            <div>
              <p className="text-gray-500 text-sm mb-2">Share your unique link to track referrals automatically.</p>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-1.5 rounded-xl">
                <div className="bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm text-sm font-medium font-mono text-br-navy flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  bluerocktechnologies.net/?ref=SEUNF001
                </div>
                <Button size="icon" className="shrink-0 bg-br-blue hover:bg-br-navy text-white rounded-lg h-9 w-9">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full text-xs font-semibold font-outfit h-10 rounded-xl border-gray-200 text-gray-700 hover:text-br-blue">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
              <Button variant="outline" className="w-full text-xs font-semibold font-outfit h-10 rounded-xl border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10">
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
              </Button>
              <Button variant="outline" className="w-full text-xs font-semibold font-outfit h-10 rounded-xl border-gray-200 text-gray-700 hover:text-br-blue">
                <QrCode className="h-4 w-4 mr-2" /> QR Code
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Metric Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-sm font-semibold font-outfit text-gray-500">Total Earned</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="text-3xl font-extrabold font-outfit text-br-navy tracking-tight">₦420,000</div>
            <p className="text-xs font-medium text-green-600 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-sm font-semibold font-outfit text-gray-500">Pending</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="text-3xl font-extrabold font-outfit text-gray-700 tracking-tight">₦80,000</div>
            <p className="text-xs font-medium text-amber-600 mt-1">2 deals in pipeline</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
            <CardTitle className="text-sm font-semibold font-outfit text-gray-500">Successful Deals</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="text-3xl font-extrabold font-outfit text-br-navy tracking-tight">7</div>
            <p className="text-xs font-medium text-gray-500 mt-1">14 total clicks this week</p>
          </CardContent>
        </Card>
      </div>

            <RecommendedCarousel />

      {/* Bottom Section Layout */}
      <div className="grid gap-6 md:grid-cols-5">
        {/* Recent Referrals */}
        <Card className="md:col-span-3 rounded-2xl border-gray-100 shadow-sm">
          <CardHeader className="px-6 pt-6 pb-4 border-b border-gray-50 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold font-outfit text-br-navy">Recent Referrals</CardTitle>
            <Button variant="ghost" className="text-br-blue hover:text-br-navy text-sm font-medium h-8">View All</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-50">
              {[
                { name: "ABC Limited", product: "SME Bundle", status: "Won", amount: "₦100,000", color: "text-green-700 bg-green-50/70" },
                { name: "XYZ Foods", product: "CRM", status: "In Progress", amount: "Pending", color: "text-amber-700 bg-amber-50/70" },
                { name: "KLM Hotel", product: "Loyalty", status: "Referred", amount: "Pending", color: "text-gray-600 bg-gray-100/70" },
              ].map((ref, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors">
                  <div>
                    <p className="font-semibold text-br-navy">{ref.name}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{ref.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-br-navy mb-1">{ref.amount}</p>
                    <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold font-outfit ${ref.color}`}>
                      {ref.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gamification / WhatsApp */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-br-blue/20 bg-gradient-to-b from-br-blue/5 to-white shadow-sm rounded-2xl">
            <CardHeader className="pb-3 pt-6 px-6">
              <CardTitle className="text-lg font-bold font-outfit text-br-navy flex items-center gap-2">
                October Challenge <span className="text-xl">🎯</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">Close 3 SME Bundles this month to unlock a ₦50,000 cash bonus.</p>
              <div className="flex justify-between text-xs font-bold font-outfit mb-2 text-br-blue uppercase tracking-wider">
                <span>Progress</span>
                <span>2 / 3</span>
              </div>
              <Progress value={66} className="h-2.5 bg-br-blue/10 [&>div]:bg-br-blue rounded-full" />
            </CardContent>
          </Card>

          {/* Live Activity Feed Simulator */}
          <LiveActivityFeed />
        </div>
      </div>
    </div>
  );
}
