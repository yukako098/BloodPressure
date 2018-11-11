import React, { Component } from "react";

class AddPressure extends Component {
  constructor(props) {
    super(props);

    this.dateInput = React.createRef();
    this.systolicInput = React.createRef();
    this.diastolicInput = React.createRef();
    this.pulseInput = React.createRef();
    this.weightInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const pressure = {
      date: this.dateInput.current.value,
      systolic: this.systolicInput.current.value,
      diastolic: this.diastolicInput.current.value,
      pulse: this.pulseInput.current.value,
      weight: this.weightInput.current.value
    };

    console.log(pressure);
  };

  static defaultProps = {
    date: "1/2",
    systolic: "129",
    diastolic: "89",
    pulse: "70",
    weight: "50"
  };

  render() {
    const { date, systolic, diastolic, pulse, weight } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Pressure Record</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                className="form-control form-control-lg"
                placeholder="Enter Date..."
                defaultValue={date}
                ref={this.dateInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="systolic">Systolic</label>
              <input
                type="text"
                name="systolic"
                className="form-control form-control-lg"
                placeholder="Enter Systolic..."
                defaultValue={systolic}
                ref={this.systolicInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="diastolic">Diastolic</label>
              <input
                type="text"
                name="diastolic"
                className="form-control form-control-lg"
                placeholder="Enter Diastolic..."
                defaultValue={diastolic}
                ref={this.diastolicInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pulse">Pulse</label>
              <input
                type="text"
                name="pulse"
                className="form-control form-control-lg"
                placeholder="Enter Pulse..."
                defaultValue={pulse}
                ref={this.pulseInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                name="weight"
                className="form-control form-control-lg"
                placeholder="Enter Weight..."
                defaultValue={weight}
                ref={this.weightInput}
              />
            </div>
            <input
              type="submit"
              value="Add Record"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddPressure;
