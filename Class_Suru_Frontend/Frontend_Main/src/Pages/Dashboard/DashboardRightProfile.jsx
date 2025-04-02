import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from "../../css/profile.module.css";
import { FiUpload } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Pichart from "./Pichart";
import axios from "axios";
import { deleteImageApi, updateUserDetailsApi, uploadImageApi } from "../../apis";
import { Button } from "../../Components";
import { FaSave } from "react-icons/fa";
import { setUserData } from "../../Redux/features/userSlice";

const DashboardRightProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  console.log("userData in profile", userData);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const imageref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);

  // State for user details
  const [userName, setUserName] = useState(userData?.name || "");
  const [userEmail, setUserEmail] = useState(userData?.email || "");
  const [userPhone, setUserPhone] = useState(userData?.phone_number || "");
  const [phoneError, setPhoneError] = useState("");
  // const [userLocation, setUserLocation] = useState("Kolkata");
  const [userClass, setUserClass] = useState(userData?.class || "");

  // Load saved image from localStorage when the component mounts
  // useEffect(() => {
  //   const savedImage = localStorage.getItem("profileImage");
  //   if (savedImage) {
  //     setSelectedImage(savedImage);
  //   }
  // }, []);

  // Handle Image Upload
  const handleImageUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = async(event) => {
    const file = event.target.files[0];
    setLoading(true);
    try {
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        if(userData.avatar)
        {
          const imagePath = userData.avatar.split("/").slice(-3).join("/");
          const truncatedImagePath = imagePath.replace(/\.jpg$/, "");
          const response_delete = await axios.delete(deleteImageApi, {
            data: {
              "public_id": truncatedImagePath,
            },
          });
          if(response_delete.status === 200)
          {
            console.log("Previous Image deleted successfully");
          }
        }
        const response = await axios.post(`${uploadImageApi}/Profile`, formData);
        if(response.status === 200)
        {
          const response_updateProfile = await axios.put(`${updateUserDetailsApi}/${userData.id}`,{
            avatar: response.data.imageUrl,
          })
          if(response_updateProfile.status === 200)
          {
            setSelectedImage(response.data.imageUrl);
            // console.log(response_updateProfile.data.user);
            dispatch(setUserData(response_updateProfile.data.user));
            
          }
        }
  
        
      }
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
    
  };

  // Remove Image
  const handleRemoveImage = async() => {
    setSelectedImage(null);
    if(userData.avatar)
      {
        const imagePath = userData.avatar.split("/").slice(-3).join("/");
        const truncatedImagePath = imagePath.replace(/\.jpg$/, "");
        const response_delete = await axios.delete("http://localhost:5000/api/auth/delete-image", {
          data: {
            "public_id": truncatedImagePath,
          },
        });
        if(response_delete.status === 200)
        {
          console.log("Previous Image deleted successfully");
        }
      }
    const response_updateProfile = await axios.put(`${updateUserDetailsApi}/${userData.id}`,{
      avatar: null,
    })
    if(response_updateProfile.status === 200)
    {
      console.log("Image removed successfully");
      imageref.current.src = "public/profile.png";
    }
  };

  

  
  

  // Toggle Edit Mode
  const handleEditClick = () => {
    setUserName(userData?.name || "");
    setUserEmail(userData?.email || "");
    setUserPhone(userData?.phone_number || "");
    setIsEditing(true);
  };

  // Save Changes
  const handleSaveClick = async() => {
    try {
      setUpdateProfileLoading(true);
      const updatedUserData = {
        name: userName,
        email: userEmail,
        phone_number: userPhone,
        class: userClass,
      };
      // Make API call to save changes
      const response = await axios.put(`${updateUserDetailsApi}/${userData.id}`, updatedUserData);
      // console.log("Response:", response.data);
      if (response.status === 200) {
        console.log("Profile updated successfully!");
        dispatch(setUserData(response.data.user));
        
      }
      
      
    } catch (error) {
      console.error("Error saving changes:", error);
      
    }
    finally {
      setIsEditing(false);
      setUpdateProfileLoading(false);
    }
    // console.log("hello world");
    
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
                  userData?.avatar ||
                  "public/profile.png"
                }
                alt={userData?.name || "User Profile"}
                className={Style.profileImage}
                ref={imageref}
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
                {/* <button
                  onClick={handleImageUpload}
                  className={Style.UploadImage}
                >
                  <FiUpload />
                  <span>Upload a new photo</span>
                </button> */}
                <Button text="Upload a new photo" onClick={handleImageUpload} onDualMode={true} isHollow={true} className={Style.UploadImage} isDisabled={loading} isLoading={loading}>
                  <FiUpload />
                </Button>
                <p>(JPG or PNG, 800×800 px recommended)</p>
              </div>

              {/* Remove Image Button */}
              {/* {userData?.avatar && (
                <button
                  onClick={handleRemoveImage}
                  className={Style.RemoveImage}
                >
                  Remove Image
                </button>
              )} */}
            </div>
          </div>

          <div className={Style.DashboardRightProfileInformation}>
            <div className={Style.DashboardRightProfileInformationUpper}>
              <span>Personal info</span>
              {!isEditing ? (
                <Button text="Edit Details" onClick={handleEditClick} onDualMode={true} isHollow={true} className={Style.UploadImage}>
                <MdOutlineEdit />
              </Button>
              ) : (
                <Button text="Save Changes" onClick={handleSaveClick} className={Style.UploadImage} onDualMode={true} disabled={updateProfileLoading} isLoading={updateProfileLoading} isHollow={true}>
                <FaSave />
              </Button>
              )}
            </div>

            {/* Name as input */}
            {!userData ? (
              "loading..."
            ) : (
              <div className={Style.DashboardRightProfileInformationLower}>
                <div>
                  <p>Full Name:</p>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={isEditing?userName:userData.name}
                    onChange={(e) => setUserName(e.target.value)}
                    className={Style.userName}
                  />
                </div>
                {/* Email as Input */}
                <div>
                  <p>Email:</p>
                  <input
                    type="email"
                    disabled={!isEditing}
                    value={isEditing?userEmail:userData.email}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className={Style.userEmail}
                  />
                </div>
                {/* phone no as input */}
                <div>
                  <p>Phone No:</p>
                  <input
                    country={"in"}
                    type="number"
                    disabled={!isEditing}
                    value={isEditing?userPhone:userData.phone_number}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 10) {
                        setUserPhone(value);
                      }
                      // setPhoneError(
                      //   userPhone.length === 10
                      //     ? ""
                      //     : "Phone number must be 10 digits!"
                      // );
                    }}
                    className={`${Style.userPhone} ${
                      phoneError ? Style.inputError : ""
                    }`}
                  />
                  {phoneError && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {phoneError}
                    </p>
                  )}
                </div>

                {/* <div>
                  <p>Location:</p>{" "}
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    className={Style.userLocation}
                  />
                </div> */}
                <div>
                  <p>Class:</p>
                  <select
                    disabled={!isEditing}
                    value={isEditing?userClass:userData?.class || ""}
                    onChange={(e) => setUserClass(e.target.value)}
                    className={Style.userDropdown}
                  >
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="Drop">Drop</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={Style.DashboardRightProfileRight}>
          <div className={Style.pichart}>
            <div>
              <Pichart />
            </div>
          </div>
          <div className={Style.Notifications}>
            <div className={Style.NotificationsText}>
              <MdOutlineAccessAlarm />
              <h3>Notifications</h3>
            </div>
            <div className={Style.NotificationsLists}>
              <p className={Style.NotificationsList}>
                *Notification will come soon
              </p>
              {/* <p className={Style.NotificationsList}>
                <RiPagesLine />
                <span>units and measurements</span>
                <span>
                  3:00pm <p>23/12/2024</p>{" "}
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRightProfile;
