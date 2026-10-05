import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommissionsPage() {
  const commissions = [
    { id: 1, customer: "ABC Limited", product: "SME Bundle", value: "₦890,000", commission: "₦100,000", date: "Oct 2, 2026", status: "Paid" },
    { id: 2, customer: "XYZ Foods", product: "CRM", value: "₦450,000", commission: "₦45,000", date: "Oct 4, 2026", status: "Pending" },
    { id: 3, customer: "Lagos Tech Hub", product: "Loyalty Programme", value: "₦300,000", commission: "₦30,000", date: "Sep 28, 2026", status: "Scheduled for Payment" },
    { id: 4, customer: "Venia Group", product: "SME Bundle", value: "₦890,000", commission: "₦100,000", date: "Sep 15, 2026", status: "Earned" },
    { id: 5, customer: "Mega Supermart", product: "CRM", value: "₦450,000", commission: "₦45,000", date: "Aug 22, 2026", status: "Paid" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-green-700 bg-green-50 ring-green-600/20';
      case 'Scheduled for Payment': return 'text-br-blue bg-blue-50 ring-br-blue/20';
      case 'Earned': return 'text-indigo-700 bg-indigo-50 ring-indigo-600/20';
      case 'Pending': return 'text-amber-700 bg-amber-50 ring-amber-600/20';
      default: return 'text-gray-600 bg-gray-50 ring-gray-500/10';
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-outfit tracking-tight text-br-navy">Commissions</h1>
          <p className="text-gray-500 mt-2 font-medium">A transparent record of what you have earned.</p>
        </div>
        <Button variant="outline" className="border-gray-200 text-gray-700 rounded-xl h-11 px-5 font-semibold font-outfit">
          <Download className="h-4 w-4 mr-2" /> Download Statement
        </Button>
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-white font-outfit tracking-wider border-b-2 border-gray-50/50">
              <tr>
                <th className="px-6 py-5 font-semibold">Customer / Deal</th>
                <th className="px-6 py-5 font-semibold">Product Sold</th>
                <th className="px-6 py-5 font-semibold">Deal Value</th>
                <th className="px-6 py-5 font-semibold">Commission Amount</th>
                <th className="px-6 py-5 font-semibold">Date Earned</th>
                <th className="px-6 py-5 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {commissions.map((comm) => (
                <tr key={comm.id} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-6 py-5 font-semibold text-br-navy">{comm.customer}</td>
                  <td className="px-6 py-5 text-gray-600">{comm.product}</td>
                  <td className="px-6 py-5 text-gray-500">{comm.value}</td>
                  <td className="px-6 py-5 font-bold text-br-navy">{comm.commission}</td>
                  <td className="px-6 py-5 text-gray-500">{comm.date}</td>
                  <td className="px-6 py-5 text-right">
                    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold font-outfit ring-1 ring-inset ${getStatusColor(comm.status)}`}>
                      {comm.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
