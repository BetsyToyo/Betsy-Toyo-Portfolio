import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../components/MainNavbar';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Next.js.",
    link: "https://yourportfolio.vercel.app"
  },
  {
    title: "Task Manager App",
    description: "A to-do list web app with user authentication and CRUD features.",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Displays real-time weather info using an external API.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Project
                      </a>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </>
  );
}
