import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../components/MainNavbar';

export default function Contact() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Contact Me</h2>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
                </Form.Group>

                <Button variant="primary" type="submit" disabled>
                  Send (Not connected yet)
                </Button>
              </Form>
              <p className="mt-3 text-muted">
                *This form doesn't send messages yet — you can link it with services like Formspree, EmailJS or integrate a backend later.
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </>
  );
}
