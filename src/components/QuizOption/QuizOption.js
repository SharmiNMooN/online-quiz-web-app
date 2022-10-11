import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizOption = ({ question, correctAnswer }) => {
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
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === correctAnswer) {
      console.log("Correct answer");
      notify("🎉 Congrats!! You have select corerect answer!!");
    } else {
      console.log("Wrong answer");
      notify(" Oppss!! You have select incorrect answer!!");
    }
  };
  return (
    <div className="border border-warning rounded d-flex align-items-center col-xs-12 col-sm-12 col-md-4 col-xl-4 bg-light">
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
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value={question}
            id="flexRadioDefault2"
            onChange={handleChange}
          />
          {question}
        </label>
      </div>
    </div>
  );
};

export default QuizOption;
