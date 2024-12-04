import React from "react";
import "./index.css";

const RoundStats = ({ state, dispatch }) => {
  return (
    <div className="stats-container">
      <h2>Round Stats</h2>
      <div className="stats">
        <div className="final-score">
          <h4>Score:</h4>
          <h2>{state.totalScore}</h2>
        </div>
        <div className="final-fairways">
          <h4>Fairways Hit:</h4>
          <h2>{state.totalFairwaysHit}</h2>
        </div>
        <div className="final-greens">
          <h4>Greens In Regulation:</h4>
          <h2>{state.totalGreensInRegulation}</h2>
        </div>
        <div className="final-putts">
          <h4>Total Putts:</h4>
          <h2>{state.totalNumberOfPutts}</h2>
        </div>
      </div>
    </div>
  );
};

export default RoundStats;
