import { DropDown } from "../../components/shared";
import { userType } from "../../constant/User.constant";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import SuccessFullyModal from "../../components/shared/Modal/SuccessfullyModal";
import { CreateUserContext } from "../../context/UserContext";
import ErrorModal from "../../components/shared/Modal/ErrorModal";

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { handleSignUp, user, setUser } = useContext(CreateUserContext);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const number = form.get("number");
    const email = form.get("email");
    const idCard = form.get("idCard");
    const password = form.get("password");
    const userType = form.get("userType");
    const userStatus = "Active";
    const createUser = {
      name,
      number,
      email,
      password,
      userType,
      userStatus,
      idCard,
    };
    const userString = JSON.stringify(createUser);

    handleSignUp(email, password)
      .then((res) => {
        console.log(res);
        if (res.user) {
          fetch("/api/v1/user", {
            method: "POST",
            body: userString,
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setSuccess(true);
                form.reset();
                setTimeout(() => {
                  setSuccess(false);
                }, 1000);
              }
            })
            .catch((err) => console.log(err));
          console.log(user);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
      });
  };
  return (
    <div className=" h-full overflow-auto  flex  bg-[#E3E3E8] ">
      <div className="w-7/12    rounded-lg p-20    mx-auto">
        <form onSubmit={handleAddUser} className="w-full gap-3   flex flex-col">
          <input
            type="text"
            name="name"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-4 px-8 rounded-lg "
            placeholder="Enter full name"
            required
          />
          <input
            type="tel"
            name="number"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-4 px-8 rounded-lg "
            placeholder="Enter phone number"
            required
          />
          <input
            type="email"
            name="email"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-4 px-8 rounded-lg "
            placeholder="Enter your email"
            required
          />
          <input
            type="number"
            name="idCard"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-normal py-4 px-8 rounded-lg "
            placeholder="Enter id number"
            required
          />
          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="bg-[#3F77F4]/10 w-full placeholder:text-[#061E54] outline-none font-normal py-4 px-8 rounded-lg "
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
              itemName={"userType"}
              className={"p-0 w-full "}
              dropBG={""}
              inputClass={"py-4 px-8 bg-[#3F77F4]/10"}
            />
          </div>
          {/* <div className="flex flex-row items-center">
            <label htmlFor="" className="w-3/12 font-bold text-lg text-blue">
              User Status:
            </label>
            <DropDown
              options={userStatus}
              className={"p-0 w-full"}
              inputClass={"py-4 px-8"}
            />
          </div> */}

          <input
            type="submit"
            value="Add User"
            className=" outline-none cursor-pointer  py-4 px-8 rounded-lg bg-gradient-to-tr hover:bg-gradient-to-bl duration-500 hover:duration-500 ease-in-out from-LightBlue to-blue text-white text-xl font-bold"
          />
        </form>
        {/* User Add Success */}
        {success && <SuccessFullyModal close={setSuccess} />}
        {error && <ErrorModal message={errorMessage} close={setError} />}
      </div>
    </div>
  );
};
export default AddUser;
