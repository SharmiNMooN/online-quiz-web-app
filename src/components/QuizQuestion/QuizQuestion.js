import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuizQuestion.css";
import { Link } from "react-router-dom";
const QuizQuestion = ({ quiz, index }) => {
  const notify = (msg) => {
    toast(msg, {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="card bg-dark text-dark bg-gradient text-center mt-2">
      <div className="card-body">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-xl-10">
            <h5 className="card-title text-warning">
              Quiz {index + 1}: {quiz.question}{" "}
            </h5>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-1 col-xl-1">
            <Link
              className="btn btn-light"
              onClick={() =>
                notify(`The correct answer is: ${quiz.correctAnswer}`)
              }
            >
              <FontAwesomeIcon
                className="text-danger"
                icon={faEye}
              ></FontAwesomeIcon>
            </Link>
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
