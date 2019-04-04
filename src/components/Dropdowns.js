import React from "react";
import { Header, Grid, Dropdown } from "semantic-ui-react";

const Tabs = props => {
  return (
    <div>
      <Grid columns={4} padded>
        <Grid.Row padded>
          <Grid.Column>
            <Header size="small" className="font-wrapper">
              <div className="font-wrapper">Sensor Type</div>
            </Header>
            <Dropdown
              fluid
              selection
              options={[{ text: "Humidity", value: "Humidity" }]}
              defaultValue={"Humidity"}
            />
          </Grid.Column>
          <Grid.Column>
            <Header size="small">
              <div className="font-wrapper">Sensors</div>
            </Header>
            <Dropdown
              fluid
              multiple
              selection
              options={[
                { key: "1", text: "CH01 SE01", value: "CH01 SE01" },
                { key: "2", text: "CH01 SE14", value: "CH01 SE14" },
                { key: "3", text: "CH03 SE01", value: "CH03 SE01" }
              ]}
              //state from Apps.js is updated for each sensor selected/removed
              onChange={props.onChange}
            />
          </Grid.Column>
          <Grid.Column>
            <Header size="small">
              <div className="font-wrapper">Data Granularity</div>
            </Header>
            <Dropdown
              fluid
              selection
              options={[{ text: "5 Min", value: "5 Min" }]}
              defaultValue={"5 Min"}
            />
          </Grid.Column>
          <Grid.Column>
            <Header size="small">
              <div className="font-wrapper">Time Range</div>
            </Header>
            <Dropdown
              fluid
              selection
              options={[{ text: "Past 1 Day", value: "Past 1 Day" }]}
              defaultValue={"Past 1 Day"}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Tabs;
