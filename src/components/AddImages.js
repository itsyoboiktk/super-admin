import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./addImages.css";
import imageToBase64 from "image-to-base64/browser";
import axios from "axios";
const AddImages = () => {
  const location = useLocation();
  const data = location.state.newPro;

  const [selectedImages, setSelectedImages] = useState([]);
  const [baseImages, setBaseImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const imgUpload = () => {
    let convertedImg = [];
    selectedImages.map((image, index) => {
      imageToBase64(image) // Image URL
        .then((response) => {
          convertedImg.push(response);
        })
        .catch((error) => {
          console.log(error); // Logs an error if there was one
        });
    });
    setBaseImages(convertedImg);
    saveToDb();
  };

  const saveToDb = () => {
    data.img = baseImages;
    console.log(data);
    axios.post("http://localhost:4000/product/add", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <section>
      <label className="label">
        + Add Images
        <br />
        <span>up to 5 images</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      {selectedImages.length > 0 &&
        (selectedImages.length > 5 ? (
          <p className="error">
            You can't upload more than 5 images! <br />
            <span>
              please delete <b> {selectedImages.length - 5} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button className="upload-btn" onClick={() => imgUpload()}>
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button
                  onClick={() =>
                    setSelectedImages(selectedImages.filter((e) => e !== image))
                  }
                >
                  <DeleteForeverIcon />
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AddImages;
