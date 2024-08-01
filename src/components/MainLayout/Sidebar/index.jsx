import logo from "../../../assets/images/logo/logo-without-bg.png";
import { NavLink, useLocation } from "react-router-dom";
import UserSubNav from "../../Sidebar/UserSubNav";
import { sidenav } from "../../../constant/sidenav.constant";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-blue h-screen w-[300px] text-white hidden lg:block ">
      <img src={logo} alt="" className="pt-4 w-24 mb-4  mx-auto" />
      <div className="flex flex-col ">
        {sidenav.map((item) => (
          <div key={item.id} className=" group">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-2xl block font-medium bg-navyBlue pl-8 py-3 border-b first:border-t  border-blue4 "
                  : location.pathname === "/user/add-user" &&
                    item.title === "User"
                  ? "text-2xl block font-medium bg-navyBlue pl-8 py-3 border-b first:border-t  border-blue4 "
                  : "text-2xl block group font-medium  pl-8 py-3 border-b first:border-t  border-blue4 hover:bg-navyBlue  "
              }
              key={item.id}
              to={item.path === "user" ? `/${item.path}/all-user` : item.path}
            >
              {item.title}
            </NavLink>
            {item.title === "User" &&
            (location.pathname === "/user/all-user" ||
              location.pathname === "/user/edit-user" ||
              location.pathname === "/user/add-user") ? (
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
            {/* {location.pathname === "/user/all-user" ? "yes" : "no"} */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
