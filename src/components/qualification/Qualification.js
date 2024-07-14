import React from "react";
import "./Qualification.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PACR from "./PACR.webp";
import aec from "./aec.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import gt from "./gt.jpg"
function Qualification() {
  return (
    <div>


      <Row>
        <Col xs={12} md={3}>
          <Card style={{ width: "18rem"}} className="pacr"  >
            <Card.Img variant="top" src={PACR}style={{height:"130px",borderTopLeftRadius:'20px',borderTopRightRadius:"20px"}} />
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Diploma in Mechanical Engineering
              </Card.Title>
              <Card.Text>
                Learn 40% theoritical and 60% practical knowledge of Mechanical
                stream.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <span style={{ color: "red" }}>University:</span>DTE
              </ListGroup.Item>
              <ListGroup.Item>
                <span style={{ color: "red" }}>CGPA:</span>9.2
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="outline-success" style={{ marginLeft: "80px" ,borderRadius:"30px"}}>
                Location
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card style={{ width: "18rem" }} className="aec" >
            <Card.Img variant="top" src={aec} style={{height:"120px" ,borderTopLeftRadius:'20px',borderTopRightRadius:"20px"}} />
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Bachelor of Mechanical Engineering
              </Card.Title>
              <Card.Text>
                Learn 60% theoritical and 40% practical knowledge of Mechanical
                stream.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <span style={{ color: "red" }}>University:</span>Anna University
              </ListGroup.Item>
              <ListGroup.Item>
                <span style={{ color: "red" }}>CGPA:</span>7.9
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="outline-success" style={{ marginLeft: "80px",borderRadius:"30px" }}>
                Location
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3}>
          <Card style={{ width: "18rem" }} className="gt" >
            <Card.Img variant="top" src={gt}style={{height:"120px" ,borderTopLeftRadius:'20px',borderTopRightRadius:"20px"}}  />
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                {" "}
                MERN Fullstack Development{" "}
              </Card.Title>
              <Card.Text>
                Enthusiastic and recently graduated MERN stack developer from
                [GT Software Academy ], equipped with comprehensive training in
                MongoDB, Express.js, React.js, and Node.js.  
              </Card.Text>
              
            </Card.Body>
         
            <ListGroup className="list-group-flush"></ListGroup>
            <Card.Body>
              <Button variant="outline-success" style={{ marginLeft: "80px",borderRadius:"30px" }}>
                Location
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </div>
  );
}

export default Qualification;
