import React from "react";
import { Container, Button } from "semantic-ui-react";

const Tabs = () => (
  <div>
    <Container fluid style={{ padding: "0px" }}>
      <Button
        basic
        color="blue"
        disabled
        style={{
          borderRadius: "20px",
          width: "135px",
          marginRight: "25px"
        }}
      >
        Real-time
      </Button>
      <Button
        basic
        color="yellow"
        disabled
        style={{
          borderRadius: "20px",
          width: "135px",
          marginRight: "25px"
        }}
      >
        Snapshot
      </Button>
      <Button
        color="red"
        active
        style={{ borderRadius: "20px", width: "135px" }}
      >
        Historical
      </Button>
    </Container>
  </div>
);

export default Tabs;
