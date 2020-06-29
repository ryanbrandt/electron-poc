import * as t from "./actionTypes";

export interface DummyAPIRequest {
  type: t.DUMMY_API_REQUEST;
  resolve: any;
  reject: any;
}

export function dummyAPIRequest(resolve: any, reject: any): DummyAPIRequest {
  return {
    type: t.DUMMY_API_REQUEST,
    resolve,
    reject,
  };
}

export type Action = DummyAPIRequest;
