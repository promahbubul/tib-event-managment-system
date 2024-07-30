import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const QuickView = ({ close, edit, user }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);
  console.log(user);
  return (
    <div className="justify-center items-center flex fixed inset-y-0 inset-x-0 z-[100]">
      {/* Background Blur */}
      <div
        onClick={() => close(false)}
        className="bg-blue/90 fixed top-0 left-0 inset-y-0 inset-x-0 z-50 flex justify-center items-center"
      ></div>
      {/* Modal */}
      <div className="bg-white rounded-lg shadow-md py-8 px-5 shadow-LightBlue z-[200]  w-1/2 mx-auto relative flex gap-3 flex-col ">
        {/* Close BUtton */}
        <button
          onClick={() => close(false)}
          className="bg-red-500 top-0 right-0  text-white font-bold text-xl border-none py-2 px-8 rounded-tr-lg absolute "
        >
          x
        </button>
        {/* Name */}
        <div className="flex flex-row items-center  gap-8 w-full ">
          <h3 className="w-3/12  text-xl font-semibold text-blue ">
            Full Name:
          </h3>
          <p className="text-xl font-normal text-blue w-8/12  ">{user?.name}</p>
        </div>
        {/* Email */}
        <div className="flex flex-row items-center gap-8 w-full">
          <h3 className="w-3/12 text-xl font-semibold text-blue">Email: </h3>
          <p className="text-xl font-normal text-blue w-8/12">{user?.email}</p>
        </div>
        {/* Number */}
        <div className="flex flex-row items-center gap-8 w-full">
          <h3 className="w-3/12 text-xl font-semibold text-blue">
            Phone number:
          </h3>
          <p className="text-xl font-normal text-blue w-8/12">{user?.number}</p>
        </div>
        {/* ID */}
        <div className="flex flex-row items-center gap-8 w-full">
          <h3 className="w-3/12 text-xl font-semibold text-blue">ID number:</h3>
          <p className="text-xl font-normal text-blue w-8/12">701791</p>
        </div>
        {/* Type */}
        <div className="flex flex-row items-center gap-8 w-full">
          <h3 className="w-3/12 text-xl font-semibold text-blue">Type: </h3>
          <p className="text-xl font-normal text-blue w-8/12">
            {user?.userType}
          </p>
        </div>
        {/* Status */}
        <div className="flex flex-row items-center gap-8 w-full">
          <h3 className="w-3/12 text-xl font-semibold text-blue">Status: </h3>
          <p className="text-xl font-normal text-blue w-8/12">
            {user?.userStatus}
          </p>
        </div>
        {/* Password */}
        <div className="flex flex-row items-center gap-8 w-full">
          <h3 className="w-3/12 text-xl font-semibold text-blue">Password: </h3>
          <div className="text-xl font-normal text-blue w-8/12 flex flex-row items-center gap-5">
            {showPassword ? (
              <p className="p-2 rounded-lg bg-gray-200">{user?.password}</p>
            ) : (
              "********"
            )}

            <button onClick={() => setShowPassword(!showPassword)} className="">
              {showPassword ? FaEye() : FaEyeSlash()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuickView;
