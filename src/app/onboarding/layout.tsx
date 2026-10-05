export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-br-blue selection:text-white">
      {children}
    </div>
  );
}
