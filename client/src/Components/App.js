import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyle";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
