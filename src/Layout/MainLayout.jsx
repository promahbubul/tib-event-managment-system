import { Outlet } from "react-router-dom";

import Footer from "../components/shared/Footer";
import Sidebar from "../components/MainLayout/Sidebar";
import TopNavbar from "../components/MainLayout/TopNavbar";

const MainLayout = () => {
  return (
    <div className="flex flex-row font-poppins">
      {/* Sidebar */}
      <Sidebar />
      {/* right */}
      <div className="w-full">
        <TopNavbar />
        <div className="h-[calc(100vh-120px)] overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
