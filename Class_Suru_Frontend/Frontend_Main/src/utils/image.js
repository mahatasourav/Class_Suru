import axios from "axios";
import { deleteImageApi, uploadImageApi } from "../apis";

const uploadImage = async (file, path) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(`${uploadImageApi}/${path}`, formData);
  return response;
};

const deleteImage = async (path) => {
  const imagePath = path.split("/").slice(-3).join("/");
  const truncatedImagePath = imagePath.replace(/\.[^/.]+$/, "");

  const response_delete = await axios.delete(deleteImageApi, {
    data: {
      public_id: truncatedImagePath,
    },
  });

  return response_delete;
};

export { uploadImage, deleteImage };
