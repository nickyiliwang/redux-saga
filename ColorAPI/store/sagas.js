import { delay } from "redux-saga";
import * as TYPES from "../types";
import { fetchColor } from "../actions";
import { call, put, takeLatest, all, cancel } from "redux-saga/effects";

function* mySaga() {
  yield takeLatest(TYPES.FETCH_COLORAPI_REQUEST, fetchColor);
}

export function* fetchContinuously(action) {
  yield put({ type: TYPES.FETCH_COLORAPI_REQUEST });

  yield call(delay, 2000);

  yield put({ type: TYPES.FETCH_CONTINUOUSLY });
}

export function* fetchCancelled(action) {
  yield cancel(saga);
  console.log("FETCH_CONTINUOUSLY Cancelled");
}
let saga;
function* actionWatcher() {
  saga = yield takeLatest(TYPES.FETCH_CONTINUOUSLY, fetchContinuously);
}

function* actionWatcher2() {
  yield takeLatest(TYPES.FETCH_CANCELED, fetchCancelled);
}
export default function* rootSaga() {
  yield all([actionWatcher(), actionWatcher2(), mySaga()]);
}
