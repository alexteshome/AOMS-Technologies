import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";

const Tabs = () => (
  <div>
    <Container fluid style={{ padding: "0px" }}>
      <Button
        color="blue"
        active
        floated="right"
        style={{
          width: "300px",
          marginRight: "25px"
        }}
      >
        <Icon name="download" /> Download
      </Button>
      <Button
        active
        floated="right"
        style={{
          width: "300px",
          marginRight: "25px"
        }}
      >
        CSV
      </Button>
    </Container>
  </div>
);

export default Tabs;
