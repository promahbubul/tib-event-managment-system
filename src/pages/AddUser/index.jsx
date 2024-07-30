import { useState } from "react";

const AddUser = () => {
  const [imagesData, setImagesData] = useState([]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const files = [
      e.target.myImage1.files[0],
      e.target.myImage2.files[0],
      e.target.myImage3.files[0],
    ];

    const mmData = [];

    const uploadFile = async (file) => {
      if (!file) return;

      const data = new FormData();
      data.append("image", file);

      try {
        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=918613f4ce8f567723f80cb3e079b7cc",
          {
            method: "POST",
            body: data,
          }
        );
        const result = await response.json();
        mmData.push(result.data.display_url);
        setImagesData(mmData);
        console.log(imagesData);
        return result;
      } catch (error) {
        console.log(error);
      }
    };

    console.log(mmData);

    // Create an array of promises for concurrent uploads
    const uploadPromises = files.map((file) => uploadFile(file));

    console.log(uploadPromises);

    // Wait for all uploads to complete
    await Promise.all(uploadPromises);
  };

  console.log(imagesData);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="myImage2" id="" />
        <input type="file" name="myImage1" id="" />
        <input type="file" name="myImage3" id="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default AddUser;
