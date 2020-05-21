import { combineReducers } from "redux";
import * as TYPES from "../types";

const initialState = {
  colors: [],
};

const handleColorAPIFetchSuccess = (state, action) => {
  return {
    ...state,
    colors: action.data,
  };
};

const colorAPI = (state = initialState, action) => {
  const handlers = {
    [TYPES.FETCH_COLORAPI_SUCCESS]: handleColorAPIFetchSuccess,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

const rootReducer = combineReducers({
  colorAPI,
});

export default rootReducer;
