import { call, put } from "redux-saga/effects";

import { fetchColor, api } from "../actions";
import * as TYPES from "../types";

const gen = fetchColor();

test("should hit api", () => {
  expect(gen.next().value).toEqual(
    call(api, "http://www.colr.org/json/colors/random/7")
  );
});

test("on success dispatch success action", () => {
  const color = { results: [] };
  expect(gen.next(color).value).toEqual(
    put({ type: TYPES.FETCH_COLORAPI_SUCCESS, data: color.results })
  );
});
