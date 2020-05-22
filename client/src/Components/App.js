import React from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/tv" component={TV} />
      </Router>
    );
  }
}

export default App;
