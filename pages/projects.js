import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../components/MainNavbar';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js., Bootstrap, and Framer Motion.",
    link: "http://localhost:3000/",
    image: "/images/portfolio.gif",
    technologies: ["Next.js", "Bootstrap", "Framer Motion"]
  },   
  {
    title: "Climate Solutions Page",
    description: "Academic project built with Express.js, DaisyUI, Embedded Javascript (EJS) and MongoDB.",
    link: "https://climatesolutions.vercel.app/",
    image: "/images/climate.gif",
    technologies: ["Express.js", "DaisyUI", "EJS", "MongoDB"],
  },
  {
    title: "Airbnb listing and review page",
    description: "Academic project built with Next.js, Bootstrap, MongoDB and highcharts.",
    link: "https://asigment-3-web422.vercel.app/",
    image: "/images/airbnb.gif",
    technologies: ["Next.js", "Bootstrap", "MongoDB", "Highcharts"]
  },
  {
    title: "Metropolitan Museum of Art Page",
    description: "Academic project built with Next.js and Bootstrap",
    link: "http://asigment5-web422.vercel.app",
    image: "/images/museum.gif",
    technologies: ["Next.js", "Bootstrap"]
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
                     <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title} 
                      style={{ objectFit: "cover", height: "200px" }} 
                    />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="mb-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge bg="info" key={idx} className="me-1">{tech}</Badge>
                        ))}
                      </div>
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
