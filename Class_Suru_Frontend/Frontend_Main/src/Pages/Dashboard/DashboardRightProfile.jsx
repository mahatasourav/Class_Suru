import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "../../css/profile.module.css";
import { FiUpload } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";

const DashboardRightProfile = () => {
  const userData = useSelector((state) => state.user.userData);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load saved image from localStorage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  // Handle Image Upload
  const handleImageUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      localStorage.setItem("profileImage", imageUrl); // Save image to localStorage
    }
  };

  // Remove Image
  const handleRemoveImage = () => {
    setSelectedImage(null);
    localStorage.removeItem("profileImage");
  };

  return (
    <>
      <div className={Style.DashboardRightProfile}>
        <div className={Style.DashboardRightProfileLeft}>
          <div className={Style.DashboardRightProfileImgSection}>
            <div className={Style.DashboardRightProfileImgUpload}>
              {/* Display uploaded image OR default avatar */}
              <img
                src={
                  selectedImage ||
                  "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt={userData?.name || "User Profile"}
                className={Style.profileImage}
              />

              <div className={Style.DashboardRightProfileImgUpload2}>
                {/* Hidden File Input */}
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />

                {/* Upload Now Button */}
                <button
                  onClick={handleImageUpload}
                  className={Style.UploadImage}
                >
                  {" "}
                  <FiUpload />
                  <span>Upload a new photo</span>
                </button>
                <p> (JPG or PNG, 800×800 px recommended)</p>
              </div>

              {/* Remove Image Button */}
              {selectedImage && (
                <button
                  onClick={handleRemoveImage}
                  className={Style.RemoveImage}
                >
                  Remove Image
                </button>
              )}
            </div>
          </div>

          <div className={Style.DashboardRightProfileInformation}>
            <div className={Style.DashboardRightProfileInformationUpper}>
              <span>Personal info</span>
              <button className={Style.EditDetails}>
                <MdOutlineEdit />
                <span>Edit Details</span>
              </button>
            </div>
            <div className={Style.DashboardRightProfileInformationLower}>
              <div>
                <p>Full Name :</p> {userData?.name}
              </div>
              <div>
                {" "}
                <p>Email :</p> {userData?.email}
              </div>
              <div>
                <p>Phone No : </p>1234567890
              </div>
              <div>
                <p>Location :</p> kolkata
              </div>
            </div>
            {/* <b></b> */}
          </div>
        </div>
        <div className={Style.DashboardRightProfileRight}>
          <p>Here You can See your exam statistics</p>
        </div>
      </div>
    </>
  );
};

export default DashboardRightProfile;
