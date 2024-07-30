import { NavLink } from "react-router-dom";

const UserSubNav = () => {
  const subNav = [
    { id: 6, path: "user/all-user", title: "All Users" },
    { id: 7, path: "user/add-user", title: "Add User" },
  ];
  return (
    <>
      {subNav.map((item) => (
        <NavLink
          to={item.path}
          key={item.id}
          className={({ isActive }) =>
            isActive
              ? "text-lg border-2  pl-20 font-medium bg-navyBlue  py-3 border-b first:border-t  border-blue4 "
              : "text-lg font-medium  pl-20 py-3 border-b first:border-t hover:bg-navyBlue  bg-[#0A174A]  border-blue4 "
          }
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
};
export default UserSubNav;
