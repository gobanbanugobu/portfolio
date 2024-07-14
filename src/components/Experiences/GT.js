import React from "react";
import "./GT.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gtimg from "./gtimg.jpg";
import Spinner from 'react-bootstrap/Spinner';
function GT() {
  return (
    <div>
      <h1 style={{ color: "green" }} className="heading">
        Experience
        <Spinner animation="border" variant="success" style={{fontSize:"20px"}} className="spinners" />
      </h1>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{ borderRadius: "30px", marginTop: "5px" }}>
            <Card.Header as="h5">
              <span style={{ color: "green" }}>GT</span>&nbsp;softwares,
              Coimbatore(<span style={{ color: "red" }}>Intern,</span>3 months)
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <img src={gtimg} className="gtimg"></img>
              </Card.Text>
              <a href="https://www.gtcollege.in/" >
              <Button
                variant="outline-danger"
                style={{ borderRadius: "30px" }}
                className="locationbutton"
              >
              Know more
              </Button></a>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={8}>
          <Card style={{ borderRadius: "30px", marginTop: "5px" }}>
            <Card.Header>
              <Card.Title>
                Worked three months as a Intern in GT softwares{" "}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <span style={{ color: "red" }}>MongoDB:</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Understanding of NoSQL databases and MongoDB's document-based
                data model. Proficiency in <span style={{color:"green"}}> CRUD (Create, Read, Update, Delete)</span>
                operations using MongoDB. Querying data using MongoDB's query
                language and operators.
                <br />
                <span style={{ color: "red" }}> Express.js:</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}> Building
                RESTful APIs</span> and web servers using Express.js. Middleware
                concepts for handling HTTP requests and responses.
                <br />
                <span style={{ color: "red" }}>React.js:</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Proficiency in building interactive user interfaces using
                React.js. Understanding of React component lifecycle methods.
                State management with React hooks, Context API, or state
                containers like Redux. Handling forms and form validation in
                React applications. Routing in single-page applications (SPA)
                using React Router.Responsive design principles and CSS
                frameworks (e.g., Bootstrap)


                <br />
                <span style={{ color: "red" }}>  Node.js:</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Server-side JavaScript programming with Node.js.
                Database <span style={{color:"green"}}>interactions with MongoDB </span> and other databases using drivers or ORMs.
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GT;
