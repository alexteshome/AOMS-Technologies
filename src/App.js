import React from "react";
import Tabs from "./components/Tabs";
import Dropdowns from "./components/Dropdowns";
import ChartData from "./containers/ChartData";
import Footer from "./components/Buttons";
import "./App.css";
import { Menu, Container, Divider } from "semantic-ui-react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //Every time a new sensor is selected/removed, set the state of selected sensors and render
  handleChange = (e, data) => {
    this.setState({ selected: data.value });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="font-wrapper">
        <Menu borderless size="huge">
          <Menu.Item header>Measurement</Menu.Item>
        </Menu>
        <Container fluid>
          <Tabs />
          <br />
          <Dropdowns onChange={this.handleChange} />
          <Divider />
          <br />
          <ChartData selected={selected} />
        </Container>
        <Footer />
      </div>
    );
  }
}
