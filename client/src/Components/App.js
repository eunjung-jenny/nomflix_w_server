import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyle";

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
