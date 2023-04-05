import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../optimizadas_tamaño_original/pngsmart.png";
import LogoA from "./../smartS/LogoSmart";
import fac from "./../../optimizadas_tamaño_original/facebook.png";
import tik from "./../../optimizadas_tamaño_original/tik-tok.png";
import ig from "./../../optimizadas_tamaño_original/instagram.png";
import tw from "./../../optimizadas_tamaño_original/gorjeo.png";
import what from "./../../optimizadas_tamaño_original/whatsapp.png";
import gmail from "./../../optimizadas_tamaño_original/gmail.png";
import claro from "./../../optimizadas_tamaño_original/claro.png"
import tigo from "./../../optimizadas_tamaño_original/tigo.png"

function AppBar() {
  return (
    <Navbar collapseOnSelect className="nav" variant="dark" expand="lg">
      <Container>
        <img class src={logo} alt="" width="80" height="90" />
        <LogoA></LogoA>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/main">Inicio</Nav.Link>
            <Nav.Link href="/¿Quienessomos?">¿Quienes somos?</Nav.Link>
            <Nav.Link href="https://wa.me/50582013323? text=Hola, buen dia me interesa el servicio de GPS ¿Me puede brindar informacion?">
              🛒Cotizar
            </Nav.Link>
            <NavDropdown title="Contactanos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="mailto:smartsystems120304@gmail.com">
                <img src={gmail} alt="" width="20px" height="20px" /> Gmail
              </NavDropdown.Item>
              <NavDropdown.Item href="tel:+50581655166" >
                <img src={tigo} alt="" width="20px" height="20px" /> Linea
                Telefonica Tigo
              </NavDropdown.Item>
             <NavDropdown.Item href="tel:+50582013323 ">
                <img src={claro} alt="" width="20px" height="20px" /> Linea
                Telefonica Claro
              </NavDropdown.Item> 
              <NavDropdown.Item href="tel:+50585057214 ">
                <img src={claro} alt="" width="20px" height="20px" /> Linea
                Telefonica Claro
              </NavDropdown.Item>
              <NavDropdown.Item href="https://wa.me/50582013323? text=Hola, buen dia me interesa el servicio de gps para motocicletas">
                <img src={what} alt="" width="20px" height="20px" /> WhatsApp
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title="Puedes visitarnos en"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="https://www.facebook.com/controlsystems01/?mibextid=ZbWKwL">
                <img src={fac} alt="" width="20px" height="20px" /> Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href="https://msng.link/o/?smartsystems2">
                <img src={tik} alt="" width="20px" height="20px" /> Tik Tok
              </NavDropdown.Item>
              <NavDropdown.Item href="/main">
                <img src={ig} alt="" width="20px" height="20px" /> Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="/main">
                <img src={tw} alt="" width="20px" height="20px" /> Twitter
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
