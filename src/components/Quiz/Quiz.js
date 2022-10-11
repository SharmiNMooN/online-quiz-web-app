import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  return (
    <div className="card col-xs-12 col-sm-12 col-md-4 col-xl-4 bg-dark mt-2 p-2">
      <div className="p-4">
        <img src={quiz.logo} className="card-img-top" alt="" />
        <div className="card-body text-white">
          <h3 className="card-title">{quiz.name}</h3>

          <p>Total Quiz: {quiz.total}</p>
        </div>
        <div className="card-footer bg-transparent text-white border-0">
          <Link
            className="btn w-100 btn align-self-end btn-info"
            to={"/quiz/" + quiz.id}
          >
            {" "}
            Start Practice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
