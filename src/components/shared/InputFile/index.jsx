const InputFile = ({ className, img, setImg, name }) => {
  return (
    <div
      className={`${className} relative border-2 border-blue rounded-lg cursor-pointer  py-2`}
    >
      <p className=" absolute inset-y-0 inset-x-0 text-center -z-0 text-red cursor-pointer  w-full h-full flex justify-center items-center  ">
        Upload
      </p>
      <input
        type="file"
        name={name}
        className="z-50 opacity-0 w-full h-full bg-orange-500 cursor-pointer "
        id=""
        placeholder="Upload"
      />
    </div>
  );
};
export default InputFile;
