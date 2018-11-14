import React, { Component } from "react";

class AddPressure extends Component {
  state = {
    date: "",
    systolic: "",
    diastolic: "",
    pulse: "",
    weight: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { date, systolic, diastolic, pulse, weight } = this.state;
    return (
      <div className="card mb-3 main">
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
                value={date}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="systolic">Systolic</label>
              <input
                type="text"
                name="systolic"
                className="form-control form-control-lg"
                placeholder="Enter Systolic..."
                value={systolic}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="diastolic">Diastolic</label>
              <input
                type="text"
                name="diastolic"
                className="form-control form-control-lg"
                placeholder="Enter Diastolic..."
                value={diastolic}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pulse">Pulse</label>
              <input
                type="text"
                name="pulse"
                className="form-control form-control-lg"
                placeholder="Enter Pulse..."
                value={pulse}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                name="weight"
                className="form-control form-control-lg"
                placeholder="Enter Weight..."
                value={weight}
                onChange={this.onChange}
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
