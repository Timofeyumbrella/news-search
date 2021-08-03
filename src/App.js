import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";

import Header from "./components/Header/Header";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news/:articleId" component={Article} />
      </Switch>
    </>
  );
};

export default App;
