import React from "react";
import axios from "axios";
const ImageCheck = () => {
  const [file, setFile] = React.useState();
  const upload = () => {
    axios.post("https://localhost:4000/product/upload", file);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div
      style={{ display: "flex", justifyConten: "center", alignItems: "center" }}
    >
      <form action="#">
        <label for="fname">AddImages:</label>
        <input style={{ border: "1px solid black" }} type="file" name="image" />
      </form>
      <button onClick={(e) => upload()}>Upload</button>
    </div>
  );
};

export default ImageCheck;
