"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Activity = {
  id: number;
  icon: string;
  message: React.ReactNode;
  bg: string;
};

const potentialActivities: Activity[] = [
  { id: 1, icon: "🔥", message: <><strong className="text-br-navy">Ada</strong> earned ₦100,000 commission today.</>, bg: "bg-white" },
  { id: 2, icon: "👀", message: <>Someone from Lagos just clicked your referral link!</>, bg: "bg-gray-50/50" },
  { id: 3, icon: "🎉", message: <><strong className="text-br-navy">TechGiant Africa</strong> just signed up via your link!</>, bg: "bg-white" },
  { id: 4, icon: "💸", message: <>Your ₦45,000 commission payout is processing.</>, bg: "bg-gray-50/50" },
  { id: 5, icon: "🚀", message: <><strong className="text-br-navy">SME Bundle</strong> is trending right now!</>, bg: "bg-white" },
  { id: 6, icon: "📈", message: <>You hit 50 link clicks this week. Keep going!</>, bg: "bg-gray-50/50" },
];

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([potentialActivities[0], potentialActivities[1]]);
  
  useEffect(() => {
    let currentIndex = 2;
    const interval = setInterval(() => {
      setActivities(prev => {
        const nextActivity = { ...potentialActivities[currentIndex % potentialActivities.length], id: Date.now() };
        currentIndex++;
        // Keep only the latest 4 activities
        return [nextActivity, ...prev].slice(0, 4);
      });
    }, 6000); // New activity every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-white border-gray-100 shadow-sm rounded-2xl overflow-hidden flex flex-col h-full">
      <CardHeader className="pb-3 pt-5 px-6 border-b border-gray-50 shrink-0">
        <CardTitle className="text-sm font-bold font-outfit text-gray-500 uppercase tracking-wider flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          Live Activity Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        <div className="divide-y divide-gray-50">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`px-6 py-4 text-sm flex items-start gap-3 ${activity.bg} transition-all duration-500 ease-out animate-in slide-in-from-top-4 fade-in`}
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="text-xl shrink-0">{activity.icon}</span>
              <p className="text-gray-600 leading-relaxed">{activity.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
