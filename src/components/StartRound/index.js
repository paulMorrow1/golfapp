import * as React from "react";
import * as actions from "../../Reducer/actions";
import "./index.css";

const StartRound = ({ state, dispatch }) => {
  return (
    <div className="main">
      <div>
        <p>How many holes will you be playing?</p>
        <div className="hole-select">
          <p>9 Holes</p>
          <input
            className="radio-btn"
            type="radio"
            name="9or18"
            value={9}
            onChange={({ target }) => {
              dispatch(actions.setHolesForRound(target.value));
            }}
          />
        </div>
        <div className="hole-select">
          <p>18 Holes</p>
          <input
            className="radio-btn"
            type="radio"
            name="9or18"
            value={18}
            onChange={({ target }) => {
              dispatch(actions.setHolesForRound(target.value));
            }}
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(actions.toggleRoundStarted())}
          className="btn"
        >
          Start Round
        </button>
      </div>
    </div>
  );
};

export default StartRound;
