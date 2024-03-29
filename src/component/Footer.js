import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/suganthb2004" target="_blank" rel="noopener noreferer"><img src={navIcon2} alt="" /></a>
            <a href="https://www.linkedin.com/in/suganth-b-a7813b21a" target="_blank" rel="noopener noreferer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/__s_u_g_a_n_t_h?igsh=YnV4dzNmZG80N2xs" target="_blank" rel="noopener noreferer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>&copy; Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
