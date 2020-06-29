import { all, takeLatest, call } from "redux-saga/effects";

import * as t from "./actionTypes";
import { DummyAPIRequest } from "./actions";

import { api } from "../utils/api";

export function* handleDummyAPIRequest(action: DummyAPIRequest) {
  const { resolve, reject } = action;

  let resolved = false;
  try {
    const { ok, data, status } = yield call(api.get, "/hello");
    if (ok) {
      resolve({ status, data });
      resolved = true;
    }
  } catch (e) {
    console.log(`Error completing API call ${e}`);
  }

  if (!resolved) {
    reject("Failed to complete call");
  }
}

export function* watchDummyAPIRequest() {
  yield takeLatest(t.DUMMY_API_REQUEST, handleDummyAPIRequest);
}

export default function* () {
  yield all([watchDummyAPIRequest()]);
}
