import React from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact={true} component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/search/:term" component={Search} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/show/:id" component={Detail} />
  </Router>
);
