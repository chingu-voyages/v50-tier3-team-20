import SideNav from "../ui/dashboard/sidenav";

export const experimental_ppr = true; 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-customWhite w-full">
      <SideNav />
      <div className="flex flex-1 justify-center">
        <div className="w-[90%]">{children}</div>
      </div>
    </div>
  );
}