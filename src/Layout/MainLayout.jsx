import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { routePath, sidenav } from "../constant/sidenav.constant";
import Footer from "../components/shared/Footer";
const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row font-poppins">
      {/* Sidebar */}
      <div className="bg-blue h-screen w-[300px] text-white hidden lg:block ">
        <img src={logo} alt="" className="pt-5 px-5 mb-8" />
        <div className="flex flex-col ">
          {sidenav.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-medium bg-navyBlue pl-8 py-3 border-b first:border-t  border-blue4 "
                  : "text-2xl font-medium  pl-8 py-3 border-b first:border-t  border-blue4 "
              }
              key={item.id}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      {/* right */}
      <div className="w-full">
        <nav className="bg-navyBlue text-white py-3 shadow-md shadow-navyBlue px-2 flex  justify-between flex-row items-center w-full">
          <div className=" w-10/12">
            <h1 className=" underline text-center text-lg font-medium">
              {location.pathname === routePath.home
                ? "Home Page"
                : location.pathname === routePath.eventForm
                ? "Event Form Page"
                : location.pathname === routePath.eventReport
                ? "Event Report Page"
                : location.pathname === routePath.progressStatus
                ? "Progress Status Page"
                : "Page"}
            </h1>
          </div>
          <div className="">
            <Link to={routePath.eventForm}>
              <button className="bg-green rounded-lg py-4 px-12">
                New Event
              </button>
            </Link>
          </div>
        </nav>
        <div className="h-[calc(100vh-120px)] overflow-auto ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
