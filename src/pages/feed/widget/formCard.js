import React, { useState } from "react";
import { TextField } from "@mui/material";
import { apiConst } from "../../../constants/api.constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allFeedApi } from "../../../redux/features/feed/feedSlice";

function FormCard({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image data URL for preview
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out before submitting
    if (!title || !image || !description) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:3000/feed",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        dispatch(allFeedApi());
        const data = {
          title,
          image, // This will contain the data URL of the selected image
          description,
        };
        onSubmit(data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          marginBottom: "8px",
        }}
      />
      <input
        type="file"
        accept="image/*"
        required
        onChange={handleImageChange}
        style={{
          marginBottom: "8px",
        }}
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Selected Image Preview"
          style={{
            maxWidth: "100%",
            marginBottom: "8px",
          }}
        />
      )}
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={4}
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          marginBottom: "8px",
        }}
      />
      <button
        type="submit"
        className="bg-[#FF4400] text-white px-6 rounded-sm py-1"
      >
        Post
      </button>
    </form>
  );
}

export default FormCard;
