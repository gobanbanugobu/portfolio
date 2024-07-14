import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Qualifications.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import annai from "./annai.jpg";
import PACR from "./PACR.webp";
import aec from "./aec.jpg";
import hsc from "./hsc.jpg";
import Spinner from 'react-bootstrap/Spinner';
function Qualifications() {
  return (
    <div>
      <h1 style={{ color: "green" }} className="qualificationhead ">
        Qualification
      </h1>
      <Row>
        <Col xs={12} md={3}>
          <Card style={{ borderRadius: "30px", marginTop: "5px" }}>
            <Card.Header>
              <h3 style={{ color: "green", textAlign: "center" }}>SSLC
              <Spinner animation="grow" variant="success" style={{fontSize:"20px",marginLeft:"20px"}} />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Annai High School,R.S.Mathur</Card.Title>
              <Card.Text>
                <img src={annai} className="annai"></img>
                <div class="item">
                  <div class="details">
                    <p>
                      <span style={{ color: "red" }}>Board:</span>State board
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Percentage:</span>90%
                    </p>
                    <p>
                      <span style={{ color: "red" }}>between:</span>2013 to 2014
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Knowledge:</span>
                      Learn the basic knowledge of Mathematics, Science, Social
                      Studies, Language (e.g., English,Tamil)
                    </p>
                    <a href="https://stackschools.com/schools/33320501108/annai-high-school-marakurichi" >
                    <Button
                variant="outline-danger"
                style={{ borderRadius: "30px" }}
                className="locationbtn"
              >
                Know more
              </Button></a>
                  </div>
                </div>
              </Card.Text>
            
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3}>
          <Card
            style={{
              borderRadius: "30px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            <Card.Header>
              <h3 style={{ color: "red" }}>HSC
              <Spinner animation="grow" variant="danger" style={{fontSize:"20px",marginLeft:"20px"}} />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Government Boys school,Sendurai</Card.Title>
              <Card.Text>
                <img src={hsc} className="annai"></img>
                <div class="item">
                  <div class="details">
                    <p>
                      <span style={{ color: "red" }}>Board:</span>State board
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Percentage:</span>73%
                    </p>
                    <p>
                      <span style={{ color: "red" }}>between:</span>2015 to 2016
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Knowledge:</span>
                      Learn the basic knowledge of Mathematics,
                      Physics,Chemistry,Botony,Zoology, Language (e.g.,
                      English,Tamil)
                    </p>
                    <a href="https://stackschools.com/schools/33130600213/govthss-sendurai" >
                    <Button
                variant="outline-danger"
                style={{ borderRadius: "30px" }}
                className="lcb"
              >
              Know more
              </Button></a>
                  </div>
                </div>
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3}>
          <Card
            style={{
              borderRadius: "30px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            <Card.Header>
              <h3 style={{ color: "blue" }}>Diploma
              <Spinner animation="grow" variant="primary" style={{fontSize:"20px",marginLeft:"20px"}} />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>P.A.C.R.Polytechnic &nbsp;Rajapalayam</Card.Title>
              <Card.Text>
                <img src={PACR} className="annai"></img>
                <div class="item">
                  <div class="details">
                    <p>
                      <span style={{ color: "red" }}>Board:</span>DTE
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Percentage:</span>91%
                    </p>
                    <p>
                      <span style={{ color: "red" }}>between:</span>2016 to 2019
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Knowledge:</span>
                      Learn 40% theoritical and 60% practical knowledge of
                      Mechanical stream.
                    </p>
                    <a href="https://www.pacrpoly.org/">
                    <Button
                variant="outline-danger"
                style={{ borderRadius: "30px" }}
                className="lcb"
              >
                Know more
              </Button></a>
                  </div>
                </div>
              </Card.Text>
             
             
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3}>
          <Card
            style={{
              borderRadius: "30px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            <Card.Header>
              <h3 style={{ color: "black" }}>BE
              <Spinner animation="border" variant="dark" style={{fontSize:"20px",marginLeft:"20px"}} /> 
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>Ariyalur Engineering College,Ariyalur</Card.Title>
              <Card.Text>
                <img src={aec} className="annai"></img>
                <div class="item">
                  <div class="details">
                    <p>
                      <span style={{ color: "red" }}>Board:</span>Anna
                      University
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Percentage:</span>81%
                    </p>
                    <p>
                      <span style={{ color: "red" }}>between:</span>2021 to 2024
                    </p>
                    <p>
                      <span style={{ color: "red" }}>Knowledge:</span>
                      Learn 60% theoritical and 40% practical knowledge of
                      Mechanical stream.
                    </p>
                    <a href="https://collegedunia.com/college/59522-ariyalur-engineering-college-aec-ariyalur" >
                    <Button
                variant="outline-danger"
                style={{ borderRadius: "30px" }}
                className="lcb"
              >
                Know more
              </Button></a>
                  </div>
                </div>
              </Card.Text>
            
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Qualifications;
