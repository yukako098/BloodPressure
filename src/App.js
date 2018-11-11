import React, { Component } from "react";
import AddPressure from "./components/AddPressure";
import SideNav from "./components/layout/SideNav";
import PressueGraph from "./components/PressureGraph";
import ShowPressureData from "./components/ShowPressureData";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const mainStyle = {
  marginLeft: "25%"
};

class App extends Component {
  render() {
    return (
      <div>
        <SideNav name="Marie" isActive="active" />
        <div className="" style={mainStyle}>
          <AddPressure />
          <ShowPressureData />
          <PressueGraph />
        </div>
      </div>
    );
  }
}

export default App;
