import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ShieldCheck, Mail, Phone, Calendar, Banknote, UserRound, Zap } from "lucide-react";

export default function ProfilePage() {
  const profile = {
    fullName: "Seunfunmi Doe",
    email: "seunfunmi@example.com",
    phone: "+234 800 123 4567",
    affiliateType: "Full Affiliate",
    referralCode: "SEUNF001",
    dateJoined: "Oct 1, 2026",
    accountStatus: "Active",
    bank: {
      name: "Guaranty Trust Bank (GTB)",
      accountName: "Seunfunmi Doe",
      accountNumber: "0123456789"
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight text-br-navy">My Profile</h1>
          <p className="text-gray-500 mt-2 font-medium">Manage your personal information and payment details.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Identity Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <Card className="rounded-2xl border-gray-100 shadow-sm bg-white overflow-hidden text-center p-6">
            <div className="w-24 h-24 bg-br-blue/10 text-br-blue flex items-center justify-center font-bold text-3xl font-outfit rounded-full mx-auto mb-4 ring-4 ring-br-blue/5">
              S
            </div>
            <h2 className="text-xl font-bold font-outfit text-br-navy">{profile.fullName}</h2>
            <div className="flex items-center justify-center gap-1.5 mt-1.5 mb-4">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider text-[11px]">{profile.accountStatus} Account</span>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex items-center justify-between text-sm">
              <span className="font-bold font-mono text-br-navy tracking-wider">{profile.referralCode}</span>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-gray-400 hover:text-br-blue hover:bg-white rounded-lg bg-white shadow-sm border border-gray-100">
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </Card>
          
          <Card className="rounded-2xl border-gray-100 shadow-sm bg-br-navy text-white overflow-hidden p-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-br-blue/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            <h3 className="font-bold font-outfit text-lg mb-2 relative z-10 flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-400" /> {profile.affiliateType}
            </h3>
            <p className="text-sm text-gray-300 relative z-10 leading-relaxed">
              You are on the top tier. You earn 100% of the allocated affiliate commissions for all successful deals.
            </p>
          </Card>
        </div>

        {/* Profile Details Main */}
        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-2xl border-gray-100 shadow-sm bg-white">
            <CardHeader className="border-b border-gray-50 bg-gray-50/30 px-6 py-5">
              <CardTitle className="text-lg font-bold font-outfit text-br-navy flex items-center gap-2">
                <UserRound className="h-5 w-5 text-gray-400" /> Personal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Full Legal Name</label>
                  <p className="font-medium text-br-navy">{profile.fullName}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Date Joined</label>
                  <div className="flex items-center gap-2 font-medium text-br-navy">
                    <Calendar className="h-4 w-4 text-gray-400" /> {profile.dateJoined}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Email Address</label>
                  <div className="flex items-center gap-2 font-medium text-br-navy">
                    <Mail className="h-4 w-4 text-gray-400" /> {profile.email}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Phone Number</label>
                  <div className="flex items-center gap-2 font-medium text-br-navy">
                    <Phone className="h-4 w-4 text-gray-400" /> {profile.phone}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
                <Button variant="outline" className="rounded-xl font-semibold font-outfit text-gray-700">Edit Details</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-gray-100 shadow-sm bg-white">
            <CardHeader className="border-b border-gray-50 bg-gray-50/30 px-6 py-5">
              <CardTitle className="text-lg font-bold font-outfit text-br-navy flex items-center gap-2">
                <Banknote className="h-5 w-5 text-gray-400" /> Bank & Commission Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Bank Name</label>
                  <p className="font-medium text-br-navy">{profile.bank.name}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Account Name</label>
                  <p className="font-medium text-br-navy">{profile.bank.accountName}</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Account Number</label>
                  <p className="font-medium text-br-navy">{profile.bank.accountNumber}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
                <Button variant="outline" className="rounded-xl font-semibold font-outfit text-gray-700">Update Payout Method</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
