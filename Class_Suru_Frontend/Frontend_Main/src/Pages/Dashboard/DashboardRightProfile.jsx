import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "../../css/profile.module.css";
import { FiUpload } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const DashboardRightProfile = () => {
  const userData = useSelector((state) => state.user.userData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  // State for user details
  const [userName, setUserName] = useState(userData?.name || "");
  const [userEmail, setUserEmail] = useState(userData?.email || "");
  const [userPhone, setUserPhone] = useState(userData?.phone_number || "");
  const [userLocation, setUserLocation] = useState("Kolkata");

  // Toggle Edit Mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Save Changes
  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you can send updated details to an API if needed
    console.log("Updated User Details:", { userName, userEmail, userPhone });
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
                  <FiUpload />
                  <span>Upload a new photo</span>
                </button>
                <p>(JPG or PNG, 800×800 px recommended)</p>
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
              {!isEditing ? (
                <button className={Style.EditDetails} onClick={handleEditClick}>
                  <MdOutlineEdit />
                  <span>Edit Details</span>
                </button>
              ) : (
                <button className={Style.SaveChanges} onClick={handleSaveClick}>
                  <span>Save Changes</span>
                </button>
              )}
            </div>

            <div className={Style.DashboardRightProfileInformationLower}>
              <div>
                <p>Full Name:</p>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={Style.userName}
                />
              </div>
              <div>
                <p>Email:</p>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={Style.userEmail}
                />
              </div>
              <div>
                <p>Phone No:</p>
                <input
                  type="number"
                  disabled={!isEditing}
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className={Style.userPhone}
                />
              </div>
              <div>
                <p>Location:</p>{" "}
                <input
                  type="text"
                  disabled={!isEditing}
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  className={Style.userLocation}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={Style.DashboardRightProfileRight}>
          <div className={Style.pichart}>
            <p>35 exam passed</p>
            <p>2 exam failed</p>
            <p>10 exam attend</p>
          </div>
          <div className={Style.Notifications}>
            <div className={Style.NotificationsText}>
              <MdOutlineAccessAlarm />
              <h3>Notifications</h3>
            </div>
            <div className={Style.NotificationsLists}>
              <p className={Style.NotificationsList}>
                <RiPagesLine />
                <span>units and measurements</span>
                <span>
                  3:00pm <p>23/12/2024</p>{" "}
                </span>
              </p>
              <p className={Style.NotificationsList}>
                <RiPagesLine />
                <span>units and measurements</span>
                <span>
                  3:00pm <p>23/12/2024</p>{" "}
                </span>
              </p>
              <p className={Style.NotificationsList}>
                <RiPagesLine />
                <span>units and measurements</span>
                <span>
                  3:00pm <p>23/12/2024</p>{" "}
                </span>
              </p>
              <p className={Style.NotificationsList}>
                <RiPagesLine />
                <span>units and measurements</span>
                <span>
                  3:00pm <p>23/12/2024</p>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRightProfile;
