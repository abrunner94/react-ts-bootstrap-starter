import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-md-left">
          <Col md="auto">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-left">
          <Col md="auto">
            <p>
              Working with React, Bootstrap, SaSS and TypeScript is now easier
              to get started with.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-left">
          <Col md="auto">
            {" "}
            <Button>Got It</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
