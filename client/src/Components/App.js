import React from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Home from "Routes/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home} />
      </Router>
    );
  }
}

export default App;
