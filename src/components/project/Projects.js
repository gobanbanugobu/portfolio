import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";
import calculator1 from "./calculator1.png";
import language1 from "./language1.png";
import age from "./age.jpg";
import todo from "./todo.jpg"
import Spinner from 'react-bootstrap/Spinner';
import qr from "./qr.png"

function Projects() {
  return (
    <div>
      <Row>
        <h1 style={{ color: "green", textAlign: "center" }}>My Projects</h1>

        <Col xs={12} md={5} className="cardmove1">
          <Card className="text-center" style={{ borderRadius: "15px" }}>
            <Card.Header>
              <h3 style={{ color: "red" }}>Arithmetic Calculator
              <Spinner animation="grow" variant="danger" style={{fontSize:"20px"}}  className="spinners"/>
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Project and Tools</Card.Title>
              <Card.Text>
                <img src={calculator1} className="calculator"></img>
                <img src={language1} className="language1"></img>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button
                style={{ borderRadius: "30px" }}
                variant="outline-danger"
              >
                Live Demo
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={5} className="cardmove2">
          <Card className="text-center" style={{ borderRadius: "15px" }}>
            <Card.Header>
              <h3 style={{ color: "blue" }}>To Do List
              <Spinner animation="grow" variant="primary" style={{fontSize:"20px"}}  className="spinners"/>
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Project and Tools</Card.Title>
              <Card.Text>
                <img src={todo} className="calculator"></img>
                <img src={language1} className="language1"></img>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button
                style={{ borderRadius: "30px" }}
                variant="outline-primary"
              >
                Live Demo
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={5} className="cardmove3">
          <Card className="text-center" style={{ borderRadius: "15px" }}>
            <Card.Header>
              <h3 style={{ color: "green" }}>Age Calculator
              <Spinner animation="grow" variant="success" style={{fontSize:"20px"}}  className="spinners"/> 
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Project and Tools</Card.Title>
              <Card.Text>
                <img src={age} className="calculator"></img>
                <img src={language1} className="language1"></img>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              {" "}
              <Button
                style={{ borderRadius: "30px" }}
                variant="outline-success"
              >
                Live Demo
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={5} className="cardmove4">
          <Card className="text-center" style={{ borderRadius: "15px" }}>
            <Card.Header>
              <h3 style={{ color: "black" }}>QR code generator
              <Spinner animation="grow" variant="dark" style={{fontSize:"20px"}}  className="spinners"/> 
              </h3>

            </Card.Header>
            <Card.Body>
              <Card.Title>Project and Tools</Card.Title>
              <Card.Text>
                <img src={qr} className="calculator"></img>
                <img src={language1} className="language1"></img>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button
                style={{ borderRadius: "30px" }}
                variant="outline-dark"
              >
                Live Demo
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
