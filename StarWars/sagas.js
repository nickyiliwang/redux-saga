import { put, takeEvery, all, call } from "redux-saga/effects";

export const api = (url) => fetch(url).then((response) => response.json());

export function* fetchPeople(action) {
  try {
    const person = yield call(api, "https://swapi.dev/api/people/");
    yield put({ type: "FETCH_STAR_WARS_SUCCESS", data: person.results });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchPeople() {
  yield takeEvery("FETCH_PEOPLE", fetchPeople);
}

export default function* rootSaga() {
  yield all([fetchPeople(), watchFetchPeople()]);
}
