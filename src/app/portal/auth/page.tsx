"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      router.push("/portal/dashboard");
    } else {
      router.push("/portal/onboarding");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Logo Mock */}
        <div className="mx-auto h-16 w-16 bg-[#00A3FF] rounded-2xl flex items-center justify-center shadow-lg">
          <div className="flex flex-col gap-1">
            <div className="h-1.5 w-8 bg-black skew-x-[-20deg]"></div>
            <div className="h-1.5 w-8 bg-black skew-x-[-20deg] translate-x-1"></div>
            <div className="h-1.5 w-8 bg-black skew-x-[-20deg] translate-x-2"></div>
          </div>
        </div>
        <h2 className="mt-6 text-3xl font-extrabold font-outfit text-gray-900">
          BlueRock
        </h2>
        <p className="mt-2 text-sm text-gray-600 font-medium">
          Affiliate Partner Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-br-blue/5 sm:rounded-3xl sm:px-10 border border-gray-100">
          
          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-bold font-outfit rounded-lg transition-all ${
                isLogin ? "bg-white text-br-navy shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-bold font-outfit rounded-lg transition-all ${
                !isLogin ? "bg-white text-br-navy shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl h-12"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </Label>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl h-12"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700">
                  Confirm Password
                </Label>
                <div className="mt-2">
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl h-12"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-br-blue focus:ring-br-blue border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-semibold text-br-blue hover:text-br-navy">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <Button type="submit" className="w-full h-12 rounded-xl bg-br-blue hover:bg-br-navy text-white font-bold font-outfit text-base transition-all shadow-[0_4px_14px_0_rgb(0,82,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,82,255,0.23)]">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-medium">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <Button variant="outline" className="w-full h-11 rounded-xl border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    <path fill="none" d="M1 1h22v22H1z" />
                  </svg>
                  Google
                </Button>
              </div>
              <div>
                <Button variant="outline" className="w-full h-11 rounded-xl border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 21 21">
                    <path fill="#f25022" d="M1 1h9v9H1z" />
                    <path fill="#00a4ef" d="M11 1h9v9h-9z" />
                    <path fill="#7fba00" d="M1 11h9v9H1z" />
                    <path fill="#ffb900" d="M11 11h9v9h-9z" />
                  </svg>
                  Microsoft
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
