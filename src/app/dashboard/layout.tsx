import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-br-blue selection:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-end px-8 border-b border-gray-100 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold font-outfit text-gray-900 leading-none">Seunfunmi</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">Full Affiliate</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-br-blue/10 text-br-blue flex items-center justify-center font-bold ring-1 ring-br-blue/20 cursor-pointer hover:bg-br-blue/20 transition-colors">
              S
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
