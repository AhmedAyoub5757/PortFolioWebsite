// ContactSection.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ContactForm from './ContactForm'; // Adjust the path based on your file structure
import ci from "../assets/img/contact-img.svg"

const ContactSection = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div
      // initial={{ opacity: 0, x: -100 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 0.8 }}
      className="contact-section"
      style={fadeIn}
    >
      <Container>
      <Row>
          <Col md={12} className="contact-heading">
            <h1>Let's Build A Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="contact-image">
            {/* Place your image component or image tag here */}
            <Image src={ci} alt="Contact" fluid />
          </Col>
          <Col md={6} className="contact-form">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default ContactSection;
