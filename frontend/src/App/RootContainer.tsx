import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import createStore from "../store/createStore";
import routes, { history } from "../routes";

interface Props {}

const App: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const store = createStore();

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">{routes}</div>
      </Router>
    </Provider>
  );
};

export default App;
