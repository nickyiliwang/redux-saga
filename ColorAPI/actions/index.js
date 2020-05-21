import { call, put } from "redux-saga/effects";

import * as TYPES from "../types";

export const fetchColorAPIRequest = () => ({
  type: TYPES.FETCH_COLORAPI_REQUEST,
});

export const fetchCancelledRequest = () => ({
  type: TYPES.FETCH_CANCELED,
});

export const fetchContinuouslyRequest = () => ({
  type: TYPES.FETCH_CONTINUOUSLY,
});

export const api = (url) => fetch(url).then((response) => response.json());

export function* fetchColor(action) {
  try {
    const color = yield call(api, "http://www.colr.org/json/colors/random/7");
    yield put({ type: TYPES.FETCH_COLORAPI_SUCCESS, data: color.colors });
  } catch (e) {
    console.log(e);
  }
}
