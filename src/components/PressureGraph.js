import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    date: "10/31",
    systolic: 113,
    diastolic: 82,
    pulse: 70,
    weight: 50
  },
  {
    date: "11/1",
    systolic: 121,
    diastolic: 72,
    pulse: 62,
    weight: 53
  },
  {
    date: "11/2",
    systolic: 119,
    diastolic: 88,
    pulse: 65,
    weight: 51
  },
  {
    date: "11/3",
    systolic: 116,
    diastolic: 100,
    pulse: 78,
    weight: 58
  },
  {
    date: "11/4",
    systolic: 121,
    diastolic: 80,
    pulse: 72,
    weight: 56
  },
  {
    date: "11/5",
    systolic: 113,
    diastolic: 81,
    pulse: 71,
    weight: 45
  }
];

export default class PressureGraph extends Component {
  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="linear" dataKey="systolic" stroke="#31A8D7" />
        <Line type="linear" dataKey="diastolic" stroke="#3A35A7" />
        <Line type="linear" dataKey="pulse" stroke="#DF3C34" />
        <Line type="linear" dataKey="weight" stroke="#8880d7" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
}
