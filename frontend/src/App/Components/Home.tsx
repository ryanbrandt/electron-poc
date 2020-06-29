import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import { dummyAPIRequest } from "../actions";
import { Response } from "../types";

import "../styles/App.css";

interface Props extends RouteComponentProps<any> {}

interface DispatchProps {
  dummyRequest: (resolve: any, reject: any) => void;
}

const Home = (props: Props & DispatchProps): JSX.Element => {
  const [error, setError] = useState<string | null>(null);

  const _handleClick = async (): Promise<void> => {
    await new Promise<Response>((resolve, reject) => {
      const { dummyRequest } = props;

      dummyRequest(resolve, reject);
    })
      .then((response: Response) =>
        props.history.push("/success", { response })
      )
      .catch((error: string) => setError(error));
  };

  return (
    <header className="App-header">
      <p>Dummy Electron App</p>
      <div className="App-link" onClick={() => _handleClick()}>
        Make an API Call
      </div>
      {error && <p>{error}</p>}
    </header>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dummyRequest: (resolve: any, reject: any) =>
      dispatch(dummyAPIRequest(resolve, reject)),
  };
};

export default withRouter(
  connect<{}, DispatchProps, {}, Props>(null, mapDispatchToProps)(Home)
);
