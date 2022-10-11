import React from "react";
import slider from "../../images/slider.jpeg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="">
      <div className="slider">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block mb-5 ">
                <h1>Let's Play The</h1>
                <h3>Test your skills and become a master.</h3>
                <p>We organize quizzes on various topics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
