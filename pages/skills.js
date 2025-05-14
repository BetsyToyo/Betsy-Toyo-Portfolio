import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { DiPhp, DiMysql } from 'react-icons/di';
import { SiLaravel, SiPostgresql } from 'react-icons/si';

import CustomNavbar from '../components/MainNavbar';

const skills = [
  { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} color="#F0DB4F" /> },
  { name: "PHP", icon: <DiPhp size={40} color="#777BB4" /> },
  { name: "Laravel", icon: <SiLaravel size={40} color="#FF2D20" /> },
  { name: "MySQL", icon: <DiMysql size={40} color="#00758F" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} color="#E44D26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#264de4" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F1502F" /> }
];

export default function Skills() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Skills</h2>
          <Row>
            {skills.map((skill, index) => (
              <Col xs={6} md={4} className="mb-4 text-center" key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Card className="p-4 shadow-sm">
                    <div className="mb-2">{skill.icon}</div>
                    <h5>{skill.name}</h5>
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
