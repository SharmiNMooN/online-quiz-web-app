import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const QuizQuestion = ({ quiz, index }) => {
  return (
    <div className="card text-center mt-2">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-xl-10">
            <h5 className="card-title text-info">
              Quiz {index + 1}: {quiz.question}{" "}
            </h5>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-1 col-xl-1">
            <FontAwesomeIcon
              className="text-danger"
              icon={faEye}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="row gap-4 justify-content-center">
          {quiz.options.map((question, index) => (
            <QuizOption
              key={index}
              correctAnswer={quiz.correctAnswer}
              question={question}
            ></QuizOption>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
