import React from 'react';
import {Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/wrapper/Header.css';

function Header() {
  return (
    <Header className='header-section' expand="lg" bg="dark" variant="dark">
      <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='align-items-center h-100'>
        <Col xs={12} md={8}>
          <h1 className='fs-100 h-100 left-heading'>optimization the potential</h1>
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      </Container>
    </Header>
  );
}

export default Header;
