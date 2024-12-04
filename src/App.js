import * as React from "react";
import "./App.css";
import { initialState, reducer } from "./Reducer/reducer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoundStats from "./components/RoundStats";
import Scorecard from "./components/Scorecard";
import StartRound from "./components/StartRound";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="app">
      <Header />
      {state.isRoundStarted ? (
        <Scorecard state={state} dispatch={dispatch} />
      ) : state.isRoundFinished ? (
        <RoundStats state={state} dispatch={dispatch} />
      ) : (
        <StartRound state={state} dispatch={dispatch} />
      )}
      <Footer />
    </div>
  );
};

export default App;
