import { useState } from "react";

const ProgressStatus = () => {
  const [ll, setll] = useState("");
  const handleFormSubmit = (e) => {};
  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="text-center text-5xl font-extrabold text-orange-500 underline">
        <img
          // src="https://cdni.iconscout.com/illustration/premium/thumb/coming-soon-banner-illustration-download-in-svg-png-gif-file-formats--new-logo-advert-miscellaneous-illustrations-3373565.png"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMAlxfgvbav_3oUzqAm4pH-nCtTxmJwSZwbkWB9gWmTslzgeGgfXYbbk2Plo8QhKJtBGRSUd1LXs1gHJMyVhfWRZf1levzuA5ELc5lNl-pb8nYJhHV1o6tMSCmySnlkiFQNrFGhvL_GSA/s1600/bangladesh_flag_on_world_globe.gif"
          alt=""
          className=""
        />
      </h1>
    </div>
  );
};
export default ProgressStatus;
