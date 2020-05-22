import React from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact={true} component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/search" component={Search} />
  </Router>
);
