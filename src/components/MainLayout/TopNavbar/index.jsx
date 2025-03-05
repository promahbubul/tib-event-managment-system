import { Link, useLocation } from "react-router-dom";
import { routePath } from "../../../constant/sidenav.constant";
import { useContext } from "react";
import { CreateUserContext } from "../../../context/UserContext";

const TopNavbar = () => {
  const location = useLocation();
  const { logOut } = useContext(CreateUserContext);

  console.log(location.pathname.split("/")[1]);

  // handle logout
  const handleLogout = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <nav className="bg-navyBlue text-white py-3 shadow-md shadow-navyBlue px-2 flex  justify-between flex-row items-center w-full">
      <div className=" w-8/12">
        <h1 className=" underline text-center text-lg font-medium">
          {location.pathname === `/${routePath.home}`
            ? "Home Page"
            : location.pathname === `/${routePath.eventForm}`
            ? "Event Form Page"
            : location.pathname === `/${routePath.eventReport}`
            ? "Event Report Page"
            : location.pathname === `/${routePath.progressStatus}`
            ? "Progress Status Page"
            : location.pathname === `/${routePath.user}`
            ? "User Page"
            : location.pathname === `/user/${routePath.allUser}`
            ? "All User Page"
            : location.pathname === `/user/${routePath.addUser}`
            ? "Add User Page"
            : location.pathname.split("/")[1] === "user"
            ? "Edit User Page"
            : location.pathname.split("/")[1] === "event"
            ? "Edit Event Page"
            : location.pathname === "/profile"
            ? "Profile Page"
            : location.pathname === "/education"
            ? "Education Page"
            : location.pathname === "/health"
            ? "Health Page"
            : location.pathname === "/land"
            ? "Land Page"
            : location.pathname === "/environment"
            ? "Environment Page"
            : "Page"}
        </h1>
      </div>
      <div className="flex flex-row items-center gap-5">
        <Link to={routePath.eventForm}>
          <button className="bg-green rounded-lg hover:scale-95 duration-300 transition-all active:scale-100 py-4 px-12">New Event</button>
        </Link>
        {/* User Profile */}
        <div className="relative  group cursor-pointer ">
          <span className=" p-2 rounded-md bg-blue1">{"user"}</span>
          <div
            className="group-hover:flex flex-col gap-1 absolute right-0 bg-blue1 w-max rounded-md p-1   hidden
              "
          >
            <Link
              to={"/profile"}
              className="py-2 px-4 bg-navyBlue rounded-md hover:bg-LightBlue"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-navyBlue rounded-md hover:bg-LightBlue"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopNavbar;
