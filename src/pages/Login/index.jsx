import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo2.png";
import { useContext, useState } from "react";
import { CreateUserContext } from "../../context/UserContext";
import SuccessFullyModal from "../../components/shared/Modal/SuccessfullyModal";
import ErrorModal from "../../components/shared/Modal/ErrorModal";
const Login = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const { signIn, user, setUser, loading, setLoading } =
    useContext(CreateUserContext);

  // // if (loading) {
  // //   return <h2>Loading......</h2>;
  // // }
  // if (user) {
  //   return <Navigate to={"/"} />;
  // }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        if (res.user) {
          // setSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessage(err.message);
        setError(true);
        console.log(err);
      });
  };
  return (
    <>
      <div className="h-screen flex flex-row items-center">
        {/* left */}
        <div className="h-full  flex items-center justify-center bg-blue  w-5/12">
          <img src={logo} alt="logo" className="w-60" />
        </div>
        {/* right */}
        <div className="w-7/12 h-full flex flex-col items-center p-24  justify-center">
          <form onSubmit={handleLogin} className="w-full gap-5   flex flex-col">
            <input
              type="email"
              name="email"
              className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
              placeholder="Enter your email"
            />
            <input
              type="password"
              name="password"
              className="bg-[#3F77F4]/10 placeholder:text-[#061E54] outline-none font-extralight py-5 px-6 rounded-lg border-blue border"
              placeholder="Enter your password"
            />
            <input
              type="submit"
              value="Login"
              className=" outline-none cursor-pointer  py-5 px-6 rounded-lg bg-gradient-to-tr hover:bg-gradient-to-bl duration-500 hover:duration-500 ease-in-out from-LightBlue to-blue text-white text-xl font-bold"
            />
            <p
              to={"/register"}
              className="text-blue text-center mt-6 text-xl font-normal"
            >
              If you have no account.{" "}
              <Link
                className="underline font-semibold text-xl text-blue"
                to={"/register"}
              >
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* Success Modal */}
      {success && <SuccessFullyModal close={setSuccess} />}
      {/* Error Modal */}
      {error && <ErrorModal close={setError} message={message} />}
    </>
  );
};
export default Login;
