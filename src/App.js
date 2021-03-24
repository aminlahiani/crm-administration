import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} />
      </Switch>
    </Router>
  );
}