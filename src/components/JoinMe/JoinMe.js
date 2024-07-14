import React from "react";
import "./JoinMe.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import location from "./location.webp";
import mail from "./mail.jpg";
import call from "./call.png";
import education from "./education.jpg";
import language from "./language.jpg";
import Spinner from 'react-bootstrap/Spinner';

function JoinMe() {
  return (
    <div>
      <h2 className="contactme">
        CONTACT<span style={{ color: "green" }}> ME</span>

        <Spinner animation="grow" variant="success" style={{fontSize:"20px"}} className="spinners" />
      </h2>
      <Row>
        <Col xs={12} md={6}>
          <Card
            style={{ borderRadius: "20px", marginTop: "10px", height: "480px" }}
          >
            <Card.Header as="h5" style={{ color: "green" }}>
              CONTACT ME HERE
            </Card.Header>
            <Card.Body>
              <Card.Text>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;Hi,I am Banugoban.Iam a mechanical engineering student
                ,who have interest in web designing and web developement and i
                am a MERN developer.If you want to further details about me.In
                here i have provide my contact details so &nbsp;{" "}
                <span style={{ color: "red" }}>join with me.</span>
                <br />
                <br />
                <h6>
                  <img src={location} className="location"></img>
                  <span style={{ color: "green" }}> Location   &nbsp;   &nbsp;   &nbsp;   &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;:</span>
                 
                  R.S.Mathur,Sendurai,Ariyalur
                </h6>
                <h6>
                  {" "}
                  <img src={mail} className="email"></img>
                  <span style={{ color: "green" }}>
                    &nbsp;&nbsp;Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;   &nbsp; :
                  </span>
                  gobanbanu749@gmail.com
                </h6>
                <h6>
                  {" "}
                  <img src={education} className="education"></img>
                  <span style={{ color: "green" }}> Education  &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>
                  DME,BE
                </h6>
                <h6>
                  {" "}
                  <img src={call} className="mobile"></img>{" "}
                  <span style={{ color: "green" }}> Mobile Number &nbsp; &nbsp; &nbsp;  &nbsp;  :</span>
                  9025254281
                </h6>
                <h6>
                  {" "}
                  <img src={language} className="language"></img>
                  <span style={{ color: "green" }}>Languages        &nbsp;  &nbsp;   &nbsp;   &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;:</span>{" "}
                  Tamil,English
                </h6>
              </Card.Text> 
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card
            style={{ borderRadius: "20px", marginTop: "10px", height: "480px" }}
          >
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ color: "green" }}>
                        Your Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="like that banugoban"
                        style={{ borderRadius: "30px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label style={{ color: "green" }}>
                        Your Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        style={{ borderRadius: "30px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ color: "green" }}>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="example text"
                      style={{ borderRadius: "30px" }}
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label style={{ color: "green" }}>
                    Messeage Here{" "}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    style={{ borderRadius: "15px" }}
                  />
                </Form.Group>
              </Form>
              <br />
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <Button className="sendme" variant="outline-danger">
                Send Me
              </Button>{" "}</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default JoinMe;
