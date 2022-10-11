import React from "react";
import QuizOption from "../QuizOption/QuizOption";

const QuizQuestion = ({ quiz, index }) => {
  return (
    <div className="card text-center mt-2">
      <div className="card-body">
        <h5 className="card-title text-info">
          Quiz {index + 1}: {quiz.question}
        </h5>
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
