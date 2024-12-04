import React from "react";
import * as actions from "../../Reducer/actions";
import "./index.css";

const ScoreBox = ({ state, dispatch }) => {
  const scoreValuesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="score-on-hole-value-container">
      <p>Enter total shots taken:</p>
      {scoreValuesArray.map((value) => (
        <button
          key={value}
          className={`value-btn ${
            value < 5 ? "par-birdie" : value === 5 ? "par-bogey" : "bogey"
          }`}
          onClick={() => {
            dispatch(actions.setScoreOnHole(value));
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default ScoreBox;
