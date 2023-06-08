import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./App.css";

function App() {
  const [textChange, setTestChange] = useState(false);
  const [initText, setInitText] = useState("Edit this");

  const submitTextChange = () => {};

  return (
    <Container className="App">
      <Container className="rfc">
        <Row>
          <Col className="formCont">
            {textChange ? (
              <Col>
                <Form className="mb-3 formCont">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      placeholder={initText}
                      onChange={(e) => {
                        setInitText(
                          e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1)
                        );
                      }}
                      type="text"
                      autoComplete="off"
                    />
                  </Form.Group>
                </Form>
                <i
                  onClick={(e) => {
                    submitTextChange(e);
                    setTestChange((textChange) => !textChange);
                  }}
                  className="fa-solid fa-check"
                ></i>
              </Col>
            ) : (
              <Col>
                <h1>{initText}</h1>
                <i
                  onClick={() => {
                    setTestChange((textChange) => !textChange);
                  }}
                  className="fa-solid fa-pen-to-square"
                ></i>
              </Col>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
