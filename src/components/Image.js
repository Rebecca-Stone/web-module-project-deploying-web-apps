import React from "react";
import "./styles/Image.css";

const Image = (props) => {
  const { compImage, userImage } = props;
  return (
    <div className="imageChoice-wrapper">
      <div className="userChoice-image">{userImage}</div>
      <div className="computerChoice-image">{compImage}</div>
    </div>
  );
};

export default Image;
