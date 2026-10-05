import Link from 'next/link';
import { Home, Users, CreditCard, Package, BookOpen, User } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'My Referrals', href: '/dashboard/referrals', icon: Users },
  { name: 'Commissions', href: '/dashboard/commissions', icon: CreditCard },
  { name: 'Products', href: '/dashboard/products', icon: Package },
  { name: 'Resources', href: '/dashboard/resources', icon: BookOpen },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-100 bg-white">
      <div className="flex h-16 items-center px-6 border-b border-gray-100">
        <img src="/logo.png" alt="BlueRock Logo" className="h-7 w-7 mr-2 rounded shadow-sm" />
        <span className="text-lg font-bold font-outfit text-br-navy tracking-tight">BlueRock</span>
        <span className="ml-1 text-lg font-normal text-gray-400 tracking-tight">Affiliates</span>
      </div>
      <nav className="flex-1 space-y-1.5 px-4 py-6">
        {navigation.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-br-navy transition-all duration-200"
            >
              <item.icon className="mr-3 h-[18px] w-[18px] text-gray-400" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
