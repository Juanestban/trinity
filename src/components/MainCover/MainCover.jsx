import React from "react";
import imageCoverProgrammer from "../../assets/programmer.svg";
import "./MainCover.css";

const MainCover = () => {
  return (
    <section className="MainCover">
      <div className="container">
        <div className="boxInfo">
          <p>Lorem ipsum dolor sit amet. Ut molestiae perferendis.</p>
        </div>
        <div className="boxImage">
          <img src={imageCoverProgrammer} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MainCover;
