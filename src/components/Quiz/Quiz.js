import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  return (
    <div className="card col-xs-12 col-sm-12 col-md-4 col-xl-3 bg-light mt-2 p-2">
      <div className="p-4">
        <img src={quiz.logo} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">{quiz.name}</h3>

          <p>Total Quiz: {quiz.total}</p>
        </div>
        <div className="card-footer bg-transparent  border-0">
          <a className="btn w-100 btn align-self-end btn-info">
            <Link to={"/quiz/" + quiz.id}> Start Practice</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
