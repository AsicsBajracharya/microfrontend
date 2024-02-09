import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
export default function App({history}) {
  console.log('history', history)
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
