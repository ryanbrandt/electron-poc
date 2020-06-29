import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import { Response } from "../types";

import "../styles/App.css";

interface Props extends RouteComponentProps<any, any, { response: Response }> {}

const SuccessfullCall: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const { location } = props;
  const { state } = location;
  const { response } = state;

  return (
    <header className="App-header">
      <p>Success</p>
      <p>Status: {response.status}</p>
      <p>Data: {response.data}</p>
      <Link className="App-link" to="/">
        Go Back
      </Link>
    </header>
  );
};

export default withRouter(SuccessfullCall);
