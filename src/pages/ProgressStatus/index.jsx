import { useState } from "react";

const ProgressStatus = () => {
  const [ll, setll] = useState("");
  const handleFormSubmit = (e) => {};
  return (
    <div>
      <form onSubmit={handleFormSubmit} action="" className="">
        <input type="file" name="photo" id="" />
        <input type="submit" value="Submit" />
      </form>

      <img src={ll} alt="" />
    </div>
  );
};
export default ProgressStatus;
