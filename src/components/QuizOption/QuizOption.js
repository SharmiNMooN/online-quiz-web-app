import React from "react";

const QuizOption = ({ question, correctAnswer }) => {
  const handleChange = (event) => {
    // console.log(event.target.value);
    const selectedValue = event.target.value;
    if (selectedValue === correctAnswer) {
      console.log("Correct answer");
    } else {
      console.log("Wrong answer");
    }
  };
  return (
    <div className="border border-warning rounded d-flex align-items-center col-xs-12 col-sm-12 col-md-2 col-xl-4 bg-light">
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
