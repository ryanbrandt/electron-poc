import { all } from "redux-saga/effects";

import dummySaga from "../App/sagas";

export default function* rootSaga() {
  yield all([dummySaga()]);
}
