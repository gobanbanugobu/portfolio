import React from "react";
import "./Skill.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png"
import react from "./react.png"
import bootstrap2 from "./bootstrap2.jpg"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Spinner from 'react-bootstrap/Spinner';
import node2 from "./Node.j2.png"
import expressjs1 from "./expressjs1.png"
import mongoDB from "./mongoDB.png"
import mongoose1 from "./mongoose1.jpg"


function Skill() {
  
  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{marginTop:"20px",borderRadius:"25px",height:"550px"}}>
          <Card.Header>  <h3>
          <span style={{ color: "green" }}>  Frontend</span> Technical Skills 
           <Spinner animation="border" variant="success" style={{fontSize:"20px"}} className="spinners" />
              </h3>
              
              </Card.Header>
            <Card.Body>
            
              <img className="html" src={html}></img>
              <ProgressBar  variant="danger"  animated now={85} style={{marginTop:"5px"}} />
              <img className="html" src={css}></img>
              <ProgressBar    variant="primary"animated now={70}  style={{marginTop:"5px"}} />
              <img className="html" src={js}></img>
              <ProgressBar variant="warning" animated now={60}  style={{marginTop:"5px"}} />
              <img className="react" src={react}></img>
              <ProgressBar  variant="info" animated now={80}  style={{marginTop:"5px"}} />
              <img className="bootstrap" src={bootstrap2}></img>
              <ProgressBar variant="dark" animated now={85}  style={{marginTop:"5px"}} />
            </Card.Body>
          </Card>
        </Col>





        <Col xs={12} md={4}>
          <Card  style={{marginTop:"20px",borderRadius:"25px", height:"550px" }}>
          <Card.Header><h3>
          <span style={{ color: "green" }}> Backend </span>Technical Skills
          <Spinner animation="border" variant="primary" style={{fontSize:"20px"}}  className="spinners"/>
        </h3></Card.Header>
            <Card.Body> 
            <img className="node" src={node2}></img>
              <ProgressBar variant="success" animated now={45} style={{marginTop:"5px"}} />
              <img className="express" src={expressjs1}></img>
              <ProgressBar  variant="warning" animated now={45} style={{marginTop:"5px"}} />
              <img className="html" src={mongoDB}></img>
              <ProgressBar variant="dark" animated now={85} style={{marginTop:"5px"}} />
              <img className="mongoose" src={mongoose1}></img>
              <ProgressBar  variant="danger"  animated now={45}style={{marginTop:"5px"}} /> 
            </Card.Body>
          </Card>
        </Col>


        <Col xs={12} md={4}>
          <Card  style={{marginTop:"20px",borderRadius:"25px",height:"550px"}} >
          <Card.Header><h3>
          <span style={{ color: "green" }}>    professional</span> Skills
          <Spinner animation="border" variant="danger" style={{fontSize:"20px",marginLeft:"20px"}} />
              </h3></Card.Header>
            <Card.Body >
<Row>
  <Col >
  <h3 style={{marginTop:"20px"}} >Creativity </h3>
            <div style={{ width: 70, height: 70 }}  className="creativity"  >
  <CircularProgressbar value={85} />
</div></Col>  
  <Col >
  <h3 style={{marginTop:"20px"}} >Communication </h3>
            <div style={{ width: 70, height: 70}} className="communication" >
  <CircularProgressbar value={70} />
</div></Col>
</Row>

<Row>
  <Col>
  <h3 style={{marginTop:"20px"}} >Problem solving </h3>
            <div style={{ width: 70, height: 70 }} className="problemsolving" >
  <CircularProgressbar value={85} />
</div></Col>
  <Col>
  <h3 style={{marginTop:"40px"}} >Team work </h3>
            <div style={{ width: 70, height: 70 }} className="teamwork" >
  <CircularProgressbar value={75} />
</div></Col>
</Row>




            </Card.Body>
          </Card>
        </Col>
      </Row>
    








    
    </div>
  );
}

export default Skill;
