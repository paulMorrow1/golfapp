import React from "react";
import * as actions from "../../Reducer/actions";
import "./index.css";

const PuttsBox = ({ state, dispatch }) => {
  const totalPuttsArray = [1, 2, 3, 4];
  return (
    <div className="putt-value-container">
      <p>Total Putts:</p>
      {totalPuttsArray.map((value) => (
        <button
          key={value}
          className="putt-values"
          onClick={() => dispatch(actions.setPuttsOnHole(value))}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default PuttsBox;
