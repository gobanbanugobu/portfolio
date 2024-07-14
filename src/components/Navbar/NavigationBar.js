import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from "react-bootstrap/Nav";
import "./Navigationbar.css";
import logo1 from '../Navbar/logo1.jpg'
import { useNavigate } from 'react-router-dom';

function NavigationBar() {

  let navigate=useNavigate()

  const handleClick=()=>{
 navigate("/JoinMe")
  }


  return (
    <div>
         <Navbar expand="lg" className="navbar" style={{ color: "white" }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <h2 >
              <span style={{ color: "red" }}>Banu</span>{" "}
              <span style={{ color: "white" }}>Portfolio</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0,  content"
              style={{ maxHeight: "100px"  }} 
           
              navbarScroll
            >
              <Nav.Link style={{ color: "white" }} href="/Home" className="navbtn" >
                Home
              </Nav.Link>&nbsp;
              <Nav.Link style={{ color: "white" }} href="/Skill" className="navbtn">
                Skills
              </Nav.Link>&nbsp;
              <Nav.Link style={{ color: "white" }} href="/Projects" className="navbtn">
                Project
              </Nav.Link>&nbsp;
              <Nav.Link style={{ color: "white" }} href="/Qualifications" className="navbtn">
                Qualification
              </Nav.Link>&nbsp;&nbsp;
              <Dropdown as={ButtonGroup}>

      <Button variant="outline-success"  >Experience</Button>

      <Dropdown.Toggle split variant="outline-success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/Alstom">Alstom</Dropdown.Item>
        <Dropdown.Item href="/GT">GT software</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
            </Nav>
            <Button variant="outline-light" className="navbtn" 
            onClick={()=>{handleClick()}}
            
            >Join with me</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;

            <a href="/LogOut" >
            <img src={logo1}  className="lgimg" /></a>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavigationBar
