import {
  GO_TO_NEXT_HOLE,
  SET_FAIRWAY_HIT,
  SET_GIR_HIT,
  SET_HOLES_FOR_ROUND,
  SET_PUTTS_ON_HOLE,
  SET_SCORE_ON_HOLE,
  SET_TOTAL_SCORE,
  TOGGLE_PUTT_BOX_OPEN,
  TOGGLE_ROUND_FINISHED,
  TOGGLE_ROUND_STARTED,
  TOGGLE_SCORE_BOX_OPEN,
} from "./constants";

export const initialState = {
  numberOfHoles: 0,
  isRoundStarted: false,
  isRoundFinished: false,
  hole: 1,
  totalScore: 0,
  scoreOnHole: 0,
  puttsOnHole: 0,
  fairwayHit: undefined,
  greenInRegulation: undefined,
  totalFairwaysHit: 0,
  totalGreensInRegulation: 0,
  totalNumberOfPutts: 0,
  isScoreBoxOpen: false,
  isPuttBoxOpen: false,
};

// action = { type, payload }
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_HOLES_FOR_ROUND:
      return {
        ...state,
        numberOfHoles: action.payload,
      };
    case TOGGLE_ROUND_STARTED:
      return {
        ...state,
        isRoundStarted: !state.isRoundStarted,
      };
    case TOGGLE_ROUND_FINISHED:
      return {
        ...state,
        isRoundFinished: !state.isRoundFinished,
        isRoundStarted: !state.isRoundStarted,
        totalScore: state.totalScore + state.scoreOnHole,
        totalNumberOfPutts: state.totalNumberOfPutts + state.puttsOnHole,
        totalFairwaysHit: state.totalFairwaysHit + (state.fairwayHit ? 1 : 0),
        totalGreensInRegulation:
          state.totalGreensInRegulation + (state.greenInRegulation ? 1 : 0),
      };
    case SET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: state.totalScore + action.payload,
      };
    case SET_FAIRWAY_HIT:
      return {
        ...state,
        fairwayHit: action.payload,
      };
    case SET_GIR_HIT:
      return {
        ...state,
        greenInRegulation: action.payload,
      };
    case SET_SCORE_ON_HOLE:
      return {
        ...state,
        scoreOnHole: action.payload,
        isScoreBoxOpen: !state.isScoreBoxOpen,
      };
    case SET_PUTTS_ON_HOLE:
      return {
        ...state,
        puttsOnHole: action.payload,
        isPuttBoxOpen: !state.isPuttBoxOpen,
      };
    case GO_TO_NEXT_HOLE:
      return {
        ...state,
        totalScore: state.totalScore + state.scoreOnHole,
        scoreOnHole: 0,
        totalNumberOfPutts: state.totalNumberOfPutts + state.puttsOnHole,
        hole: state.hole + 1,
        puttsOnHole: 0,
        fairwayHit: undefined,
        greenInRegulation: undefined,
        totalFairwaysHit: state.totalFairwaysHit + (state.fairwayHit ? 1 : 0),
        totalGreensInRegulation:
          state.totalGreensInRegulation + (state.greenInRegulation ? 1 : 0),
      };
    case TOGGLE_SCORE_BOX_OPEN:
      return { ...state, isScoreBoxOpen: !state.isScoreBoxOpen };
    case TOGGLE_PUTT_BOX_OPEN:
      return { ...state, isPuttBoxOpen: !state.isPuttBoxOpen };
  }
};
