import { combineReducers } from "redux";

import dummy, { DummyState } from "../App/reducer";

export interface RootState {
  dummy: DummyState;
}

export default combineReducers({
  dummy,
});
