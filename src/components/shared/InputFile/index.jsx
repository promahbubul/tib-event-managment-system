const InputFile = ({ className, name, image, setImage, photographs }) => {
  // Upload Images
  const handleImageUpload = (e) => {
    const fileImage = e.target.files[0];
    const data = new FormData();
    data.append("image", fileImage);

    fetch(
      "https://api.imgbb.com/1/upload?key=918613f4ce8f567723f80cb3e079b7cc",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data?.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={`border-2 ${className} `}>
      {image ? (
        <div
          className={`relative border-2 flex justify-center items-center border-blue rounded-lg cursor-pointer  py-2`}
        >
          <img
            src={image?.display_url}
            alt={`event-image-${image?.id}`}
            className="w-80 h-24"
          />
          <input
            onChange={handleImageUpload}
            type="file"
            name={name}
            className="z-50 opacity-0 absolute inset-y-0 inset-x-0 w-full h-full bg-orange-500 cursor-pointer "
            id=""
            placeholder="Upload"
          />
        </div>
      ) : photographs ? (
        <div
          className={`relative border-2 flex justify-center items-center border-blue rounded-lg cursor-pointer  py-2`}
        >
          <img
            src={photographs?.display_url}
            alt={`event-image-${photographs?.id}`}
            className="w-80 h-24"
          />
          <input
            onChange={handleImageUpload}
            type="file"
            name={name}
            className="z-50 opacity-0 absolute inset-y-0 inset-x-0 w-full h-full bg-orange-500 cursor-pointer "
            id=""
            placeholder="Upload"
          />
        </div>
      ) : (
        <div
          className={`relative border-2 border-blue rounded-lg cursor-pointer  py-2`}
        >
          <p className=" absolute inset-y-0 inset-x-0 text-center -z-0 text-red cursor-pointer  w-full h-full flex justify-center items-center  ">
            Upload
          </p>
          <input
            onChange={handleImageUpload}
            type="file"
            name={name}
            className="z-50 opacity-0 w-full h-full bg-orange-500 cursor-pointer "
            id=""
            placeholder="Upload"
          />
        </div>
      )}
    </div>
  );
};
export default InputFile;
