import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../components/MainNavbar';

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Row className="align-items-center" style={{ minHeight: '70vh' }}>
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Hello! I'm [Your Name] 👋</h1>
              <p className="lead">
                I'm a full-stack developer passionate about building clean and scalable applications with modern web technologies.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
