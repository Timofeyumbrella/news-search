import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Favourites from "./pages/Favourites/Favourites";

import Header from "./components/Header/Header";

import "./App.scss";

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/:articleId" component={Article} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </div>
  );
};

export default App;
