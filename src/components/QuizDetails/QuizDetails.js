import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizDetails = () => {
  const { id } = useParams();
  const { quiz } = useLoaderData();
  console.log({ id, quiz });
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">QUIZ OF {quiz.name.toUpperCase()}</div>
        <div className="card-body">
          {quiz.questions.map((item, index) => (
            <QuizQuestion
              key={item.id}
              index={index}
              quiz={item}
            ></QuizQuestion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
