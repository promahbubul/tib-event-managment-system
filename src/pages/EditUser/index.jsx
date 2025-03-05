import { DropDown } from "../../components/shared";
import { userStatus, userType } from "../../constant/User.constant";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import SuccessFullyModal from "../../components/shared/Modal/SuccessfullyModal";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const EditUser = () => {
  const user = useLoaderData();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  console.log(state);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const number = form.get("number");
    const email = form.get("email");
    const idCard = form.get("idCard");
    const password = form.get("password");
    const userType = form.get("userType");
    const userStatus = form.get("userStatus");
    const updateUser = {
      name,
      number,
      email,
      password,
      userType,
      userStatus,
      idCard,
    };
    const userString = JSON.stringify(updateUser);
    // console.log(user._id);

    fetch(`https://ems.curryjunction.uk/api/v1/user/${user?._id}`, {
      method: "PUT",
      body: userString,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            navigate(state);
          }, 1000);
        }
      })
      .catch((err) => console.log(err));

    // console.log(updateUser);
  };
  return (
    <div className=" h-full overflow-auto  flex  bg-[#E3E3E8] ">
      <div className="w-7/12    rounded-lg p-20    mx-auto">
        <form onSubmit={handleAddUser} className="w-full gap-2   flex flex-col">
          <input
            defaultValue={user?.name}
            type="text"
            name="name"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-3.5 px-8 rounded-lg "
            placeholder="Enter full name"
            required
          />
          <input
            defaultValue={user?.number}
            type="tel"
            name="number"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-3.5 px-8 rounded-lg "
            placeholder="Enter phone number"
            required
          />
          <input
            defaultValue={user?.email}
            type="email"
            name="email"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-3.5 px-8 rounded-lg "
            placeholder="Enter your email"
            required
          />
          <input
            defaultValue={user?.idCard}
            type="number"
            name="idCard"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-3.5 px-8 rounded-lg "
            placeholder="Enter id number"
            required
          />
          <div className="relative ">
            <input
              defaultValue={user?.password}
              type={showPassword ? "text" : "password"}
              name="password"
              className="bg-[#3F77F4]/10 w-full placeholder:text-[#061E54] outline-none font-normal py-3.5 px-8 rounded-lg "
              placeholder="Enter your password"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute -translate-y-1/2 top-1/2 text-2xl text-LightBlue
             right-5"
            >
              {showPassword ? FaEye() : FaEyeSlash()}
            </button>
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-3/12 font-bold text-lg text-blue">
              User Type:
            </label>
            <DropDown
              options={userType}
              value={user?.userType}
              itemName={"userType"}
              className={"p-0 w-full "}
              dropBG={""}
              inputClass={"py-3.5 px-8 bg-[#3F77F4]/10"}
            />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="" className="w-3/12 font-bold text-lg text-blue">
              User Status:
            </label>
            <DropDown
              options={userStatus}
              value={user?.userStatus}
              className={"p-0 w-full"}
              itemName={"userStatus"}
              inputClass={"py-3.5 px-8  bg-[#3F77F4]/10"}
            />
          </div>

          <input
            type="submit"
            value="Update User"
            className=" outline-none cursor-pointer  py-3.5 px-8 rounded-lg bg-gradient-to-tr hover:bg-gradient-to-bl duration-500 hover:duration-500 ease-in-out from-LightBlue to-blue text-white text-xl font-bold"
          />
        </form>
        {/* User Add Success */}
        {success && <SuccessFullyModal close={setSuccess} />}
      </div>
    </div>
  );
};
export default EditUser;
