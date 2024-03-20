import React from 'react';
import '../assets/wrapper/Partner.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Partner = () => {
  return (
    <Container fluid className="partner-container">
      <Row className="justify-content-center mt-5">
      <Col xs={12} sm={12} md={6} lg={2} className="mb-3">
          <Card className="partner-card bg-body-secondary">
            <img
              src="https://i.ibb.co/4dp1XCK/image-1.png"
              className="card-img-top img-fluid w-100"
              alt="partner image"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={2} className="mb-3">
          <Card className="partner-card bg-body-secondary">
            <img
              src="https://i.ibb.co/1n2khpD/image.png"
              className="card-img-top img-fluid w-100"
              alt="partner image"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={2} className="mb-3">
          <Card className="partner-card bg-body-secondary">
            <img
              src="https://i.ibb.co/M2zFcGD/image.png"
              className="card-img-top img-fluid w-100"
              alt="partner image"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12}  md={6} lg={2} className="mb-3">
          <Card className="partner-card bg-body-secondary">
            <img
              src="https://i.ibb.co/wYR2wDY/image.png"
              className="card-img-top img-fluid w-100"
              alt="partner image"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={2} className="mb-3">
          <Card className="partner-card bg-body-secondary">
            <img
              src="https://i.ibb.co/bgfNCBt/image.png"
              className="card-img-top img-fluid w-100"
              alt="partner image"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="partner-content text-center mt-5">
            <p className="partner-text  fs-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <p className="partner-text  fs-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <p className="partner-text  fs-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Partner;
