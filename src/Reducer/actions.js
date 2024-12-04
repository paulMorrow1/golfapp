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

export const setTotalScore = (payload) => {
  return { type: SET_TOTAL_SCORE, payload };
};

// payload = { scoreOnHole, puttsOnHole }
export const goToNextHole = (payload) => {
  return {
    type: GO_TO_NEXT_HOLE,
  };
};

// payload = boolean(true/false)
export const setFairwayHit = (payload = false) => {
  return {
    type: SET_FAIRWAY_HIT,
    payload,
  };
};

export const setGirHit = (payload = false) => {
  return {
    type: SET_GIR_HIT,
    payload,
  };
};

// payload = number
export const setScoreOnHole = (payload = 0) => {
  return {
    type: SET_SCORE_ON_HOLE,
    payload,
  };
};

export const setPuttsOnHole = (payload = 0) => {
  return {
    type: SET_PUTTS_ON_HOLE,
    payload,
  };
};

export const toggleScoreBoxOpen = () => {
  return {
    type: TOGGLE_SCORE_BOX_OPEN,
  };
};

export const togglePuttBoxOpen = () => {
  return {
    type: TOGGLE_PUTT_BOX_OPEN,
  };
};

export const setHolesForRound = (payload) => {
  return {
    type: SET_HOLES_FOR_ROUND,
    payload,
  };
};

export const toggleRoundStarted = () => {
  return {
    type: TOGGLE_ROUND_STARTED,
  };
};

export const toggleRoundFinished = () => {
  return {
    type: TOGGLE_ROUND_FINISHED,
  };
};
