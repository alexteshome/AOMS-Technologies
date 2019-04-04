import React from "react";
import Chart from "../components/Chart";

export default class ChartData extends React.Component {
  state = { data: [] };
  //generate random temps only once when the component is first mounted
  componentDidMount() {
    let data = [];
    let time;
    //Random temperature generator from 18:10 to 18:16
    for (let i = 0; i <= 6; i++) {
      time = "18:1" + i;
      data.push({
        time,
        "CH01 SE01": (Math.random() * (200 - -50) - 50).toFixed(2),
        "CH01 SE14": (Math.random() * (200 - -50) - 50).toFixed(2),
        "CH03 SE01": (Math.random() * (200 - -50) - 50).toFixed(2)
      });
    }
    this.setState({ data });
  }
  render() {
    //pass down selected props from Apps.js and Dropdown.js
    return <Chart data={this.state.data} selected={this.props.selected} />;
  }
}
