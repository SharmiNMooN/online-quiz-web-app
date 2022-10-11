import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const QuizDetails = () => {
  const { id } = useParams();
  const { quiz } = useLoaderData();
  console.log({ id, quiz });
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">QUIZ OF {quiz.name.toUpperCase()}</div>
        <div className="card-body">
          <h5 className="card-title">Quiz details will be here</h5>
          <p className="card-text">Quiz details</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
