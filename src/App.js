import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Book" />
        <Home />
        
      </>
    );
  }
}

export default App;
