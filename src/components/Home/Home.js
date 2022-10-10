import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const { quizes } = useLoaderData();
  console.log(quizes);
  return (
    <div>
      <Slider></Slider>

      <div className="row gap-4 justify-content-center">
        {quizes.map((data) => (
          <Quiz key={data.id} quiz={data}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
