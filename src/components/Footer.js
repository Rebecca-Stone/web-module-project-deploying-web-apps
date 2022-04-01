import React from "react";

const Footer = (props) => {
  const { resetClick } = props;
  return (
    <section className="footer">
      <button onClick={() => resetClick()} className="restButton">Rest Game</button>
    </section>
  );
};

export default Footer;
