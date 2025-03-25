import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css"
const HomePage = () => {
  return (
    <Container fluid className="p-0">
      {/* Hero Section with Carousel */}
      {/* <Carousel fade>
        {["bn1.jpg", "bn2.jpg", "bn3.jpg"].map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={`./${img}`} alt={`Slide ${idx + 1}`} style={{ maxHeight: "600px", objectFit: "cover" }} />
            <Carousel.Caption>
              <h3>Slide {idx + 1}</h3>
              <p>Your trusted banking partner</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel> */}
      <div className="hero-section">
        {["bank-img.jpg"].map((img, idx) => (
          <img key={idx} className="d-block w-100" src={`./${img}`} alt={`Slide ${idx + 1}`} style={{ maxHeight: "1000px", objectFit: "cover" }} />
        ))}
      </div>

      {/* Card Section */}
      <div className="text-center my-5">
        <h1>Advanced Banking System</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <Row className="justify-content-center">
        {[1, 2, 3, 4].map((_, idx) => (
          <Col key={idx} md={6} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "18rem" }} className="shadow-sm">
              <Card.Body>
                <Card.Title>Banking Services</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Secure & Reliable</Card.Subtitle>
                <Card.Text>
                  We provide world-class banking solutions tailored for you.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* About Section */}
      <Row className="align-items-center my-5 p-5 bg-light">
        <Col md={6} className="text-center">
          <img src="./about-1.jpg" alt="About Us" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            We are committed to providing the best financial guidance for every stage of your life.
          </p>
          <Button variant="dark">Know More</Button>
        </Col>
      </Row>

      {/* Contact Section */}
      <Row className="bg-dark text-white text-center py-5">
        <Col>
          <h2>Get in Touch</h2>
          <p>Email: support@banking.com | Phone: +123 456 7890</p>
          <Button variant="light">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
