import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="flex gap-8 bg-[#f9f9f9]">
      <Sidebar />
      <div className="w-full p-4 bg-[#f9f9f9]">
        <DashboardNavbar />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
