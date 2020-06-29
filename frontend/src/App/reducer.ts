import * as t from "./actionTypes";
import { Action } from "./actions";

export interface DummyState {
  something: string;
}

const initialState: DummyState = {
  something: "something",
};

export default function (state: DummyState = initialState, action: Action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
