"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, RotateCcw, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoalTracker() {
  const [goal, setGoal] = useState(1000000);
  const earned = 420000;
  
  const percentage = Math.min(Math.round((earned / goal) * 100), 100);
  const remaining = Math.max(goal - earned, 0);

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1).replace('.0', '')}M`;
    if (amount >= 1000) return `₦${(amount / 1000).toFixed(0)}k`;
    return `₦${amount}`;
  };

  const handleEditGoal = () => {
    const newGoal = window.prompt("Set your new earnings goal (in Naira):", goal.toString());
    const parsed = parseInt(newGoal || "");
    if (!isNaN(parsed) && parsed > 0) {
      setGoal(parsed);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-br-blue to-br-navy text-white border-0 shadow-md rounded-2xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <p className="text-blue-100/90 font-medium uppercase tracking-wider text-xs">Goal Progress</p>
              <button 
                onClick={handleEditGoal}
                className="text-blue-200/60 hover:text-white transition-colors"
                title="Edit Goal"
              >
                <Target className="h-3.5 w-3.5" />
              </button>
            </div>
            <h2 className="text-4xl font-extrabold font-outfit tracking-tight">
              {formatCurrency(earned)} <span className="text-blue-200/70 text-2xl font-semibold font-outfit">/ {formatCurrency(goal)}</span>
            </h2>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-3xl font-extrabold font-outfit tracking-tight">{percentage}%</span>
          </div>
        </div>
        
        <Progress value={percentage} className="h-2.5 bg-br-navy/40 [&>div]:bg-white rounded-full" />
        
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-blue-100/90 font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            {percentage >= 100 ? (
              <span className="text-white font-bold">Goal Achieved! 🚀</span>
            ) : (
              <>You&apos;re <span className="text-white font-bold">{formatCurrency(remaining)}</span> away.</>
            )}
          </p>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 text-blue-200/80 hover:text-white hover:bg-white/10 text-xs px-2.5 rounded-lg border border-blue-200/20"
            onClick={() => setGoal(1000000)}
            title="Reset to ₦1M Default Goal"
          >
            <RotateCcw className="h-3 w-3 mr-1.5" /> Reset Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
