import { Modal } from "@mui/material";
import * as React from "react";
import { FaAngleDown } from "react-icons/fa6";
import * as actions from "../../Reducer/actions";
// check out classnames library on npm
// cn({
//   "fairway-missed": !fairwayXSelected,
//   "fairway-btns x-selected": fairwayXSelected,
//   selected: fairwayXSelected
// })
// import cn from 'classnames';
import PuttsBox from "../PuttsBox";
import ScoreBox from "../ScoreBox";
import "./index.css";

// // actions.spec.js
// expect(setTotalScore(3)).toEqual({ type: 'SET_TOTAL_SCORE', payload: 3 })
// expect(goToNextHole({ scoreOnHole: 5, puttsOnHole: 3 })).toEqual({ type: 'GO_TO_NEXT_HOLE', payload: { scoreOnHole: 5, puttsOnHole: 3 }})

// // goes in component
// const [state, dispatch] = React.useReducer(reducer, initialState);
// dispatch(setTotalScore(4));

const Scorecard = ({ state, dispatch }) => {
  const goToNextHole = () => dispatch(actions.goToNextHole());

  // const fairwayCheckedBackground = fairwayCheckSelected
  //   ? "fairway-btns check-selected"
  //   : "fairway-hit";
  // const fairwayXBackground = fairwayXSelected
  //   ? "fairway-btns x-selected"
  //   : "fairway-missed";
  // const girCheckedBackground = girCheckSelected
  //   ? "gir-btns check-selected"
  //   : "gir-hit";
  // const girXBackground = girXSelected ? "gir-btns x-selected" : "gir-missed";

  React.useEffect(() => {
    console.log(`Score ${state.totalScore}`);
    console.log(
      `Fairways hit: ${state.totalFairwaysHit}/${
        state.numberOfHoles === "9" ? "7" : "14"
      }`
    );
    console.log(
      `Greens in Regulation: ${state.totalGreensInRegulation}/${state.numberOfHoles}`
    );
    console.log(`Total Number of Putts: ${state.totalNumberOfPutts}`);
  }, [state.hole]);

  return (
    <div className="scorecard-container">
      <h1 className="hole">{`Hole ${state.hole}`}</h1>
      <div className="hole-stats">
        <div className="score-on-hole-container">
          <div className="score-on-hole">
            <h3>
              Score
              <button
                onClick={() => dispatch(actions.toggleScoreBoxOpen())}
                className="dropdown-btn"
              >
                <FaAngleDown />
              </button>
            </h3>
            <p className="score-on-hole-value">{state.scoreOnHole}</p>
          </div>
          {state.isScoreBoxOpen ? (
            <Modal open={actions.toggleScoreBoxOpen}>
              <ScoreBox state={state} dispatch={dispatch} />
            </Modal>
          ) : null}
        </div>
        <div className="fairway">
          <h3>Fairway Hit</h3>
          <div className="fairway-btns">
            <label htmlFor="fir_true" className="custom-radio checked">
              <input
                id="fir_true"
                type="radio"
                name="fir"
                value={state.fairwayHit}
                checked={state.fairwayHit === true}
                onChange={() => dispatch(actions.setFairwayHit(true))}
              />
            </label>
            <label htmlFor="fir_false" className="custom-radio not-checked">
              <input
                id="fir_false"
                type="radio"
                name="fir"
                value={state.fairwayHit}
                checked={state.fairwayHit === false}
                onChange={() => dispatch(actions.setFairwayHit())}
              />
            </label>
          </div>
        </div>
        <div className="gir">
          <h3>GIR</h3>
          <div className="gir-btns">
            <label htmlFor="gir_true" className="custom-radio checked">
              <input
                id="gir_true"
                type="radio"
                name="gir"
                value={state.greenInRegulation}
                checked={state.greenInRegulation === true}
                onChange={() => dispatch(actions.setGirHit(true))}
              />
            </label>
            <label htmlFor="gir_false" className="custom-radio not-checked">
              <input
                id="gir_false"
                type="radio"
                name="gir"
                value={state.greenInRegulation}
                checked={state.greenInRegulation === false}
                onChange={() => dispatch(actions.setGirHit())}
              />
            </label>
          </div>
        </div>
        <div className="putts-on-hole-container">
          <div className="putts-container">
            <h3>
              Putts
              <button
                onClick={() => dispatch(actions.togglePuttBoxOpen())}
                className="dropdown-btn"
              >
                <FaAngleDown />
              </button>
            </h3>
            <p className="putts">{state.puttsOnHole}</p>
          </div>
          {state.isPuttBoxOpen ? (
            <Modal open={actions.togglePuttBoxOpen()}>
              <PuttsBox state={state} dispatch={dispatch} />
            </Modal>
          ) : null}
        </div>
      </div>
      {state.hole < state.numberOfHoles ? (
        <button
          className="next-hole-btn"
          disabled={
            state.scoreOnHole === 0 ||
            state.puttsOnHole === 0 ||
            state.fairwayHit === undefined ||
            state.greenInRegulation === undefined
          }
          onClick={goToNextHole}
        >
          Next Hole
        </button>
      ) : (
        <button
          className="finish-round-btn"
          onClick={() => dispatch(actions.toggleRoundFinished())}
        >
          Finish Round
        </button>
      )}
      {/* <button className="next-hole-btn" onClick={goToNextHole}>
        {hole < 18 ? "Next Hole" : "Finish Round"}
      </button> */}
      <div className="total-score-container">
        <p className="total-score">{state.totalScore}</p>
      </div>
    </div>
  );
};

export default Scorecard;
