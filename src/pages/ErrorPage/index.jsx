import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo2.png";
const ErrorPage = () => {
  return (
    <div className="w-full h-screen bg-blue flex justify-center flex-col items-center">
      <img src={logo} alt="logo" className="w-1/12 " />
      <div className="text-white ">
        <h1 className="text-[250px] font-extrabold text-center leading-tight">
          404
        </h1>
        <p className="text-center text-2xl font-medium">
          Page Not Found{" "}
          <Link className="underline" to={"/"}>
            Go Back
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ErrorPage;
