import React, { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageEditor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1, width: 50 });

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setCroppedImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleCropComplete = (crop) => {
    if (crop.width && crop.height) {
      const canvas = document.createElement("canvas");
      const image = document.createElement("img");
      image.src = selectedImage;
      image.onload = () => {
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        const croppedImageUrl = canvas.toDataURL("image/png");
        setCroppedImage(croppedImageUrl);
        localStorage.setItem("profileImage", croppedImageUrl);
      };
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setCroppedImage(null);
    localStorage.removeItem("profileImage");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Upload & Edit Profile Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <ReactCrop
            src={selectedImage}
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            onComplete={handleCropComplete}
          />
          hi
        </div>
      )}

      {croppedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview</h3>
          <img
            src={croppedImage}
            alt="Cropped"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <br />
          <button
            onClick={handleRemoveImage}
            style={{
              marginTop: "10px",
              background: "red",
              color: "white",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
