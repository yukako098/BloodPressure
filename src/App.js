import React, { Component } from "react";
import AddPressure from "./components/AddPressure";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AddPressure />
      </div>
    );
  }
}

export default App;
