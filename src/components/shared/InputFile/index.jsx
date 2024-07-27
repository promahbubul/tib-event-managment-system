import { useRef, useState } from "react";

const InputFile = ({ className, img, setImg, name }) => {
  const [imgData, setImgData] = useState(null);
  const inputRef = useRef(null);
  const handleImage = (e) => {
    const imageFile = e.target.files[0].name;
    setImgData(imageFile);
    console.log(imageFile);
    // console.log(inputRef);
    // console.log(URL.createObjectURL(imageFile));
  };

  console.log(imgData);
  return (
    <div
      className={`${className} relative border-2 border-blue rounded-lg cursor-pointer  py-2`}
    >
      <p className=" absolute inset-y-0 inset-x-0 text-center -z-0 text-red cursor-pointer  w-full h-full flex justify-center items-center  ">
        Upload
      </p>
      <input
        ref={inputRef}
        onChange={handleImage}
        type="file"
        name={name}
        className="z-50 opacity-0 w-full h-full bg-orange-500 cursor-pointer "
        id=""
        placeholder="Upload"
      />
      {imgData && <img src={URL.createObjectURL(imgData)} alt="" />}
    </div>
  );
};
export default InputFile;
