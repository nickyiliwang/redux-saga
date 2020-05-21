import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./StarWars/sagas";

import StarWars from "./StarWars/StarWars";
import reducer from "./reducers";
import { TYPES } from "./StarWars/types";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <StarWars
      value={store.getState()}
      onFetchCall={() => action(TYPES.FETCH_STAR_WARS_REQUEST)}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
