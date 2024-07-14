import React from "react";
import "./Alstom.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import alstom from "./alstom.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

function Alstom() {
  return (
    <div>
      <h1 style={{ color: "green" }} className="heading">
        Experience
        <Spinner animation="grow" variant="success" style={{fontSize:"20px"}}  className="spinners"/>
      </h1>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{ borderRadius: "30px", marginTop: "5px" }}>
            <Card.Header as="h5">
              <span style={{ color: "green" }}>ALSTOM </span>Transport
              Ltd,Coimbatore(<span style={{color:"red"}}>Trainee,</span>2019 to 2021)
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <img src={alstom} className="alsimg"></img>
              </Card.Text>
              <a href="https://www.alstom.com/press-releases-news/2021/11/alstom-inaugurates-new-components-manufacturing-facility-coimbatore" >
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
              {" "}
              <Card.Title>Worked two years as a trainee in production line</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <span style={{ color: "red" }}> Learning and Development:</span>{" "}
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Engage in
                on-the-job training to gain practical experience in my in{" "}
                <span style={{ color: "green" }}>
                  {" "}
                  Traction and CVS convertor{" "}
                </span>
                . <br />
                <span style={{ color: "red" }}> Project Support: </span> <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Assist with
                various projects within your department or team. This might
                involve conducting research, gathering data, analyzing
                information, and preparing reports for{" "}
                <span style={{ color: "green" }}>
                  {" "}
                  ICNG,TI,XCC,CMRL,KMRL,RERNG.
                </span>
                <br />
                <span style={{ color: "red" }}>
                  Documentation and Reporting:
                </span>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Maintain
                accurate records of your activities, projects, and progress.
                This could include documenting procedures, writing reports, and{" "}
                <span style={{ color: "green" }}>
                  {" "}
                  Board updation,SI,Task sequence sheet,NCR report,Document
                  updation.
                </span>
                <br />
                <span style={{ color: "red" }}>Collaboration: </span>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Work closely
                with colleagues and team members to contribute to achieve target
                with in hours and follow{" "}
                <span style={{ color: "green" }}> MES</span> . This could
                involve participating in 5mins meetings at both morning and
                evening and share the{" "}
                <span style={{ color: "green" }}> SQCD </span>points for the
                collaborative projects.
                <br />
                <span style={{ color: "red" }}>Problem-solving: </span>
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Develop
                problem-solving skills by addressing the defects by my knowledge.
                This might involve troubleshooting technical issues, resolving
                conflicts, or finding <span style={{color:'green'}}>Creaction </span>to improve processes.
               
                <br/> 
                
              </Card.Text>
            </Card.Body>
          </Card> 
        </Col>
      </Row>
    </div>
  );
}

export default Alstom;
