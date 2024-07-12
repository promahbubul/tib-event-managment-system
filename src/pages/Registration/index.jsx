import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo2.png";

const Registration = () => {
  const navigate = useNavigate();

  console.log(navigator);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    navigate("/");
    console.log({ email, password });
    console.log(form);
  };
  return (
    <div className="h-screen flex flex-row items-center">
      {/* left */}
      <div className="h-full  flex items-center justify-center bg-blue  w-5/12">
        <img src={logo} alt="logo" className="w-60" />
      </div>
      {/* right */}
      <div className="w-7/12 h-full flex flex-col items-center p-24  justify-center">
        <form onSubmit={handleLogin} className="w-full gap-5   flex flex-col">
          <input
            type="text"
            name="name"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
            placeholder="Enter full name"
            required
          />
          <input
            type="tel"
            name="number"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
            placeholder="Enter phone number"
            required
          />
          <input
            type="email"
            name="email"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
            placeholder="Enter your email"
            required
          />
          <input
            type="number"
            name="id"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
            placeholder="Enter id number"
            required
          />
          <input
            type="password"
            name="password"
            className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
            placeholder="Enter your password"
            required
          />
          <input
            type="submit"
            value="Register"
            className=" outline-none cursor-pointer  py-5 px-6 rounded-lg bg-gradient-to-tr hover:bg-gradient-to-bl duration-500 hover:duration-500 ease-in-out from-LightBlue to-blue text-white text-xl font-bold"
          />
          <p className="text-blue text-center mt-6 text-xl font-normal">
            If you have already account .{" "}
            <Link
              className="underline font-semibold text-xl text-blue"
              to={"/"}
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Registration;
