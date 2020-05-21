import { TYPES } from "./types";

const INITIAL_STATE = {};

export default function starWarReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.FETCH_STAR_WARS_REQUEST:
      return state + 1;
    default:
      return state;
  }
}
