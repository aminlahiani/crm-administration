import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";

import { Provider } from "react-redux";
import store from "./redux/store";
import Abonnement from "./pages/Abonnement";

import CreatePage from "./pages/CreatePage";

export default function App() {
  return (
    <Provider store={store}>
    <Router>
       <Switch>
         <Route path="/create" component={CreatePage} />
      
      <Route path="/abonnement" component={Abonnement} />
        <Route path="/" component={SignIn} exact />
      
      </Switch>
    </Router>
    </Provider>
  );
}