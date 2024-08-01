import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo-without-bg.png";
import { routePath, sidenav } from "../constant/sidenav.constant";
import Footer from "../components/shared/Footer";
import ErrorPage from "../pages/ErrorPage";
import UserSubNav from "../components/Sidebar/UserSubNav";
import { CreateUserContext } from "../context/UserContext";
import { useContext } from "react";

const MainLayout = () => {
  const location = useLocation();
  const { user, setUser } = useContext(CreateUserContext);
  console.log(user);

  // console.log(location.pathname.split("/")[3]);

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
          <div className=" w-8/12">
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
                : location.pathname.split("/")[3] === "edit-user"
                ? "Edit User Page"
                : location.pathname.split("/")[3] === "edit"
                ? "Edit Event Page"
                : location.pathname === "/dashboard/profile"
                ? "Profile Page"
                : location.pathname === "/dashboard/education"
                ? "Education Page"
                : location.pathname === "/dashboard/health"
                ? "Health Page"
                : location.pathname === "/dashboard/land"
                ? "Land Page"
                : location.pathname === "/dashboard/environment"
                ? "Environment Page"
                : "Page"}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-5">
            <Link to={routePath.eventForm}>
              <button className="bg-green rounded-lg py-4 px-12">
                New Event
              </button>
            </Link>
            {/* User Profile */}
            <div className="relative  group cursor-pointer ">
              <span className=" p-2 rounded-md bg-blue1">{user}</span>
              <div
                className="group-hover:flex flex-col gap-1 absolute right-0 bg-blue1 w-max rounded-md p-1   hidden
              "
              >
                <Link
                  to={"/dashboard/profile"}
                  className="py-2 px-4 bg-navyBlue rounded-md hover:bg-LightBlue"
                >
                  Profile
                </Link>
                <button
                  onClick={() => setUser(null)}
                  to={"/dashboard/profile"}
                  className="py-2 px-4 bg-navyBlue rounded-md hover:bg-LightBlue"
                >
                  Logout
                </button>
              </div>
            </div>
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
