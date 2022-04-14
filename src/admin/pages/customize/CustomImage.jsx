import React, { useState, useEffect } from "react";

const CustomImage = ({ file }) => {
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (file?.size) {
      const reader = new FileReader();
      const url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setPreview(reader.result);
      };
    }
  }, [file]);
  console.log(file);
  return (
    <div>
      <img src={preview} style={{ width: "80px", height: "100px" }} />
    </div>
  );
};

export default CustomImage;
