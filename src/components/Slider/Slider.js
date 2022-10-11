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
              <img src={slider} className="d-block w-100" alt="slider" />
              <div className="carousel-caption mb-md-5">
                <h1 className="	d-none d-sm-block">Let's Play The</h1>
                <h3 className="	d-none d-sm-block">
                  Test your skills and become a master.
                </h3>
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
