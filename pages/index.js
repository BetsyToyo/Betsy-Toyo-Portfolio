import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../components/MainNavbar';

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Row className="align-items-center" style={{ minHeight: '70vh' }}>
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Hello! I'm Betsy 👋</h1>
              <p className="lead">
                I'm a full-stack developer passionate about building clean and scalable applications with modern web technologies.
              </p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="img-fluid rounded-circle shadow-sm"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
