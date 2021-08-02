import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Header from "./components/Header/Header";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
