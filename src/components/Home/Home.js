import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IN from "../Home/IN.png";
import GIT from "../Home/GIT.png";
import twit from "../Home/twit.jpg";
import INS from "../Home/INS.jpg";
import FB3 from "../Home/FB3.jpg";
import WHATTS from "../Home/WHATTS.jpg";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import image from "./image.png"
import resume from "./resume.pdf"
import  { useState } from 'react';

function Home() {
  

 
  return (
    <div>
    
      <Row>
        <Col xs={12} md={3}>
          <img className="banuimg" src={image}></img>
        </Col>
        <Col xs={12} md={8}>
          <Card className="midcard" >
            <Card.Body>
              <h4 style={{marginLeft:"7px"}} >Hello I am, </h4>
              <h1 className="banu" >
                Mr.<span style={{ color: "red" }}>R.Banugoban</span>
              </h1><br/>
              <h4 className="mern" >
                <span style={{ color: "green" }}>MERN </span>Fullstack Developer
              </h4>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;          Passionate and motivated recent graduate with a Bachelor's
                degree in Mechanical engineer seeking an entry-level position as a  &nbsp; 
                 <span style={{color:"green"}} >MERN (MongoDB, Express.js, React.js, Node.js)</span> Stack Developer.<br/>

               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Eager to apply theoretical knowledge gained through coursework
                and projects to contribute effectively to a dynamic development
                team while gaining practical experience in web development
                technologies.
              </p><br/>

              <a href={resume} download  style={{textDecoration:"none"}} >
              <Button className="cardbutton" style={{borderRadius:"30px" }} variant="outline-success" >
               Download CV
                </Button></a>&nbsp;
<a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <Button style={{paddingLeft:"25px",paddingRight:"25px",borderRadius:"30px"}} variant="outline-danger">Hire me</Button>{' '}</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={1}>
          <Card className="iconcard">
            <Card.Body className="cardbody">
            <a href="www.linkedin.com/in/banugobanrajendren">
              <img
                src={IN}
                style={{ height: "60px", width: "60px", borderRadius: "90px" }}
                className="icons"
              ></img></a>


              <img
                src={GIT}
                style={{ height: "60px", width: "60px", borderRadius: "90px" }}
                className="icons"
              ></img>

<a href="https://twitter.com/home?lang=en-in">
              <img
                src={twit}
                style={{ height: "60px", width: "60px" }}
                className="icons"
              ></img></a>

<a href="https://www.instagram.com/">
              <img
                src={INS}
                style={{ height: "60px", width: "60px" }}
                className="icons"
              ></img></a>

<a href="https://www.facebook.com/getting_started/" >
              <img
                src={FB3}
                style={{ height: "60px", width: "60px" }}
                className="icons"
              ></img></a>

<a href="https://web.whatsapp.com/">
              <img
                src={WHATTS}
                style={{ height: "60px", width: "60px" }}
                className="icons"
              ></img></a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </div>
  );
}

export default Home;
