import React from "react";
import "./styles/Image.css";

const Image = (props) => {
  const { compImage, userImage } = props;
  return (
    <div className="imageChoice-wrapper">
      <div id="userChoice-image" className={userImage}>
      </div>
      <div id="computerChoice-image" className={compImage}>
      </div>
    </div>
  );
};

export default Image;
