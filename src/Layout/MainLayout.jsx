import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo-without-bg.png";
import { routePath, sidenav } from "../constant/sidenav.constant";
import Footer from "../components/shared/Footer";
import ErrorPage from "../pages/ErrorPage";
import UserSubNav from "../components/Sidebar/UserSubNav";
const MainLayout = () => {
  const location = useLocation();

  if (location.pathname === "/dashboard/") {
    return <ErrorPage />;
  }
  return (
    <div className="flex flex-row font-poppins">
      {/* Sidebar */}
      <div className="bg-blue h-screen w-[300px] text-white hidden lg:block ">
        <img src={logo} alt="" className="pt-4 w-24 mb-4  mx-auto" />
        <div className="flex flex-col ">
          {sidenav.map((item) => (
            <div key={item.id} className=" group">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl block font-medium bg-navyBlue pl-8 py-3 border-b first:border-t  border-blue4 "
                    : location.pathname === "/dashboard/user/add-user" &&
                      item.title === "User"
                    ? "text-2xl block font-medium bg-navyBlue pl-8 py-3 border-b first:border-t  border-blue4 "
                    : "text-2xl block group font-medium  pl-8 py-3 border-b first:border-t  border-blue4 hover:bg-navyBlue  "
                }
                key={item.id}
                to={
                  item.path === "user"
                    ? `/dashboard/${item.path}/all-user`
                    : item.path
                }
              >
                {item.title}
              </NavLink>
              {item.title === "User" &&
              (location.pathname === "/dashboard/user/all-user" ||
                location.pathname === "/dashboard/user/edit-user" ||
                location.pathname === "/dashboard/user/add-user") ? (
                <div className=" flex-col flex  ">
                  <UserSubNav />
                </div>
              ) : item.title === "User" ? (
                <div className=" flex-col group-hover:flex hidden  ">
                  <UserSubNav />
                </div>
              ) : (
                ""
              )}
              {/* {location.pathname === "/dashboard/user/all-user" ? "yes" : "no"} */}
            </div>
          ))}
        </div>
      </div>
      {/* right */}
      <div className="w-full">
        <nav className="bg-navyBlue text-white py-3 shadow-md shadow-navyBlue px-2 flex  justify-between flex-row items-center w-full">
          <div className=" w-10/12">
            <h1 className=" underline text-center text-lg font-medium">
              {location.pathname === `/dashboard/${routePath.home}`
                ? "Home Page"
                : location.pathname === `/dashboard/${routePath.eventForm}`
                ? "Event Form Page"
                : location.pathname === `/dashboard/${routePath.eventReport}`
                ? "Event Report Page"
                : location.pathname === `/dashboard/${routePath.progressStatus}`
                ? "Progress Status Page"
                : location.pathname === `/dashboard/${routePath.user}`
                ? "User Page"
                : location.pathname === `/dashboard/user/${routePath.allUser}`
                ? "All User Page"
                : location.pathname === `/dashboard/user/${routePath.addUser}`
                ? "Add User Page"
                : location.pathname === `/dashboard/user/${routePath.editUser}`
                ? "Edit User Page"
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
        <div className="h-[calc(100vh-120px)] overflow-auto  ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
