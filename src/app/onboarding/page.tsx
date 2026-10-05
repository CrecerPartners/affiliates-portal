"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CheckCircle2, Download } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Details", desc: "Basic information about you." },
  { id: 2, title: "Identity Verification", desc: "Upload a valid government ID." },
  { id: 3, title: "Guarantor Details", desc: "Information of someone who can vouch for you." },
  { id: 4, title: "Bank Details", desc: "Where we will send your commissions." },
  { id: 5, title: "Agreement", desc: "Sign and upload the affiliate agreement." }
];

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const totalSteps = steps.length;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const currentStepInfo = steps.find(s => s.id === step);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6">
      
      {/* Header Logo */}
      <div className="mb-8 text-center">
        <div className="mx-auto h-12 w-12 bg-[#00A3FF] rounded-xl flex items-center justify-center shadow-lg">
          <div className="flex flex-col gap-[3px]">
            <div className="h-1 w-6 bg-black skew-x-[-20deg]"></div>
            <div className="h-1 w-6 bg-black skew-x-[-20deg] translate-x-1"></div>
            <div className="h-1 w-6 bg-black skew-x-[-20deg] translate-x-2"></div>
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-bold font-outfit text-gray-900">BlueRock</h1>
        <p className="text-gray-500 text-sm">Affiliate Onboarding (Step {step} of {totalSteps})</p>
      </div>

      <div className="w-full max-w-2xl mb-8">
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-br-blue h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="w-full max-w-2xl border-gray-200 shadow-xl shadow-blue-900/5">
        <CardHeader>
          <CardTitle className="text-2xl font-outfit">{currentStepInfo?.title}</CardTitle>
          <CardDescription className="text-base">{currentStepInfo?.desc}</CardDescription>
        </CardHeader>
        
        <CardContent className="mt-4">
          {/* STEP 1: Personal Details */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="fullName">Full Legal Name</Label>
                <Input id="fullName" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input id="whatsapp" type="tel" placeholder="+234..." />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="address">Residential Address</Label>
                <Input id="address" placeholder="123 BlueRock Street..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
            </div>
          )}

          {/* STEP 2: Identity Verification */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="idType">Government-issued ID Type</Label>
                <select id="idType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">Select ID Type</option>
                  <option value="nin">NIN (National Identity Number)</option>
                  <option value="passport">International Passport</option>
                  <option value="drivers">Driver&apos;s License</option>
                  <option value="voters">Voter&apos;s Card</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="idNumber">ID Card Number</Label>
                <Input id="idNumber" placeholder="Enter ID Number" />
              </div>
              <div className="grid gap-2 mt-4">
                <Label>Upload ID Card</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                  <Upload className="h-8 w-8 mb-2 text-br-blue" />
                  <span className="text-sm font-medium">Click to upload your ID document</span>
                  <span className="text-xs mt-1">PNG, JPG, or PDF (Max 5MB)</span>
                  <Input type="file" className="hidden" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Guarantor Details */}
          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="gFullName">Guarantor&apos;s Full Name</Label>
                <Input id="gFullName" placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gRelationship">Relationship</Label>
                <Input id="gRelationship" placeholder="e.g. Sibling, Uncle, Colleague" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gOccupation">Occupation</Label>
                <Input id="gOccupation" placeholder="e.g. Civil Servant" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="gAddress">Residential Address</Label>
                <Input id="gAddress" placeholder="Guarantor&apos;s address" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gPhone">Phone Number</Label>
                <Input id="gPhone" type="tel" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gEmail">Email Address</Label>
                <Input id="gEmail" type="email" />
              </div>
            </div>
          )}

          {/* STEP 4: Bank Details */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input id="bankName" placeholder="e.g. GTBank, Zenith" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" placeholder="10-digit account number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accountName">Account Name</Label>
                <Input id="accountName" placeholder="Exact name on the account" />
              </div>
            </div>
          )}

          {/* STEP 5: Agreement */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="bg-br-blue/5 border border-br-blue/20 rounded-lg p-4 flex items-start gap-4">
                <FileText className="h-6 w-6 text-br-blue mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900">1. Download Agreement</h4>
                  <p className="text-sm text-br-blue mt-1">Please download the BlueRock Affiliate Agreement, read through it, and sign it.</p>
                  <Button variant="outline" className="mt-3 bg-white text-br-blue border-blue-200 hover:bg-br-blue/5">
                    <Download className="mr-2 h-4 w-4" /> Download Affiliate_Agreement.pdf
                  </Button>
                </div>
              </div>

              <div className="grid gap-2 mt-4">
                <Label>2. Upload Signed Agreement</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                  <Upload className="h-8 w-8 mb-2 text-green-500" />
                  <span className="text-sm font-medium">Click to upload your signed agreement</span>
                  <span className="text-xs mt-1">PDF format preferred</span>
                  <Input type="file" className="hidden" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <CheckCircle2 className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">By submitting, I confirm all provided information is accurate and authentic.</span>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          <Button 
            variant="outline" 
            onClick={handleBack} 
            disabled={step === 1}
            className={step === 1 ? "invisible" : ""}
          >
            Back
          </Button>
          <Button onClick={handleNext} className="bg-br-blue hover:bg-br-navy text-white transition-colors">
            {step === totalSteps ? "Submit Application" : "Continue"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
