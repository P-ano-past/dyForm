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
              <Container>
                <Row className="formEdit">
                  <Form className="formCont">
                    <Form.Control
                      className="formStyle"
                      placeholder={initText}
                      onChange={(e) => {
                        setInitText(
                          e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1)
                        );
                      }}
                      type="text"
                      autoComplete="off"
                      autoFocus
                    />
                  </Form>
                  <Col className="iconCont">
                    <Col className="icon">
                      <i
                        onClick={(e) => {
                          submitTextChange(e);
                          setTestChange((textChange) => !textChange);
                        }}
                        className="fa-solid fa-check"
                      ></i>
                    </Col>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container>
                <Row className="viewText">
                  <Col>
                    <h1>{initText}</h1>
                  </Col>
                  <Col className="iconCont">
                    <i
                      onClick={() => {
                        setTestChange((textChange) => !textChange);
                      }}
                      className="fa-solid fa-pen-to-square"
                    ></i>
                  </Col>
                </Row>
              </Container>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
