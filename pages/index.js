import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../components/MainNavbar';
import CustomFooter from '../components/CustomFooter';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter  } from 'react-icons/fa';
import { DiPhp, DiMysql } from 'react-icons/di';
import { SiLaravel, SiPostgresql, SiCplusplus, SiPython, SiLivewire, SiNextdotjs, SiMongodb, SiOracle, SiPostman, SiFigma, SiDocker, SiAdobexd} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare size={30} color="#F0DB4F" /> },
      { name: "PHP", icon: <DiPhp size={30} color="#777BB4" /> },
      { name: "C++", icon: <SiCplusplus size={30} color="#00599C" /> },      
      { name: "Python", icon: <SiPython size={30} color="#3776AB" /> }       
    ]
  },
  {
    title: "Front-End",
    skills: [      
      { name: "HTML5", icon: <FaHtml5 size={30} color="#E44D26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={30} color="#264de4" /> },
      { name: "React", icon: <FaReact size={30} color="#61DBFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={30} color="#000000" /> },
      { name: "Blade", icon: <SiLaravel size={30} color="#FF2D20" /> }, 
      { name: "Livewire", icon: <SiLivewire size={30} color="#4E56A6" /> }
    ]
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" /> },
      { name: "Express.js", icon: <FaNodeJs size={30} color="#000000" /> },
      { name: "Laravel", icon: <SiLaravel size={30} color="#FF2D20" /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <DiMysql size={30} color="#00758F" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={30} color="#336791" /> },
      { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
      { name: "Oracle DB", icon: <SiOracle size={30} color="#F80000" /> }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={30} color="#F1502F" /> },
      { name: "Docker", icon: <SiDocker size={30} color="#2496ED" /> },
      { name: "Visual Studio Code", icon: <BiLogoVisualStudio size={30} color="#007ACC" /> },
      { name: "Postman", icon: <SiPostman size={30} color="#FF6C37" /> },
      { name: "Figma", icon: <SiFigma size={30} color="#A259FF" /> }
    ]
  }
];

const projects = [     
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
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js., Bootstrap, and Framer Motion.",  
    image: "/images/portfolio.gif",
    technologies: ["Next.js", "Bootstrap", "Framer Motion"]
  }
];

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <Container>
        {/* Home Section */}
        <section id="home" style={{ minHeight: '70vh', paddingTop: '60px' }}>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>Hello! I’m Betsy 👋</h1>
                <p className="lead">
                  I’m a full-stack developer passionate about building clean and scalable applications with modern web technologies.
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
                  src="/images/avatar.png"
                  alt="Profile"
                  className="ms-3 img-fluid rounded-circle shadow-sm"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </motion.div>
            </Col>
          </Row>
        </section>
        {/* About Section */}        
        <section id="about" style={{ minHeight: '70vh', paddingTop: '60px', paddingBottom: '60px' }}>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >    
                <h2 className="mb-4 section-title">About Me</h2> 
                <div className="lead">        
                  <p>
                  Hello! I’m Betsy, a <strong>Software Developer</strong> and <strong>Technical Support Specialist</strong> passionate about creating dynamic, scalable web applications and delivering outstanding IT support experiences.
                  </p>
                  <p>
                  With professional experience in full-stack development and database management, I’ve built and maintained applications using <strong>PHP (7.0–8.0)</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Laravel</strong>, <strong>React</strong>, <strong>Next.js</strong>, and <strong>MySQL/PostgreSQL</strong>. I thrive on writing clean, efficient code and ensuring seamless deployments using SSH, SFTP, and Git/GitHub/GitLab workflows.
                  </p>                                        
                  <p>
                  Let’s connect! If you’re looking for a detail-oriented, results-driven developer who is passionate about building better digital experiences.
                  </p>
                </div> 
              </motion.div>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="ms-3 img-fluid rounded-circle shadow-sm"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </motion.div>
            </Col>
          </Row>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ paddingTop: '30px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 section-title">Skills</h2>
            {skillGroups.map((group, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="mb-3 text-center">{group.title}</h5>
                <Row className="justify-content-center">
                  {group.skills.map((skill, index) => (
                    <Col xs={4} sm={3} md={2} className="mb-3 text-center" key={index}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 250 }}
                      >
                        <Card className="p-2 shadow-sm border-0">
                          <div className="mb-1">{skill.icon}</div>
                          <small>{skill.name}</small>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </motion.div>
        </section>
        {/* Projects Section */}
        <section id="projects" style={{ paddingTop: '60px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 section-title">Projects</h2>
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
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View Project
                          </a>
                        )}
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </section>
         {/* Contact Me Section */}
        <section id="contact" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 section-title">Contact Me</h2>
            <Row className="justify-content-center">
              {/* Contact Information Column */}
              <Col md={5} className="mb-4 mb-md-0">
                <Card className="p-4 shadow-sm border-0 h-100">
                  <h5 className="mb-4">Contact Information</h5>
                  <div className="mb-3 d-flex align-items-center">
                    <span className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: 44, height: 44, background: "var(--background)" }}>
                      <FaEnvelope size={22} color="var(--primary)" />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.9rem", color: "#888" }}>Email</div>
                      <div>betsytoyo23@gmail.com</div>
                    </div>
                  </div>                  
                  <div className="mb-4 d-flex align-items-center">
                    <span className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: 44, height: 44, background: "var(--background)" }}>
                      <FaMapMarkerAlt size={22} color="var(--primary)" />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.9rem", color: "#888" }}>Location</div>
                      <div>Toronto, Canada</div>
                    </div>
                  </div>
                  <h5 className="mb-3">Follow Me</h5>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/BetsyToyo" target="_blank" rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{ width: 44, height: 44, background: "var(--background)" }}>
                      <FaGithub size={22} color="var(--primary)" />
                    </a>
                    <a href="https://www.linkedin.com/in/betsy-toyo-avila/" target="_blank" rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{ width: 44, height: 44, background: "var(--background)" }}>
                      <FaLinkedin size={22} color="var(--primary)" />
                    </a>                    
                  </div>
                </Card>
              </Col>
              {/* Form Column */}
              <Col md={7}>
                <Card className="p-4 shadow-sm border-0 h-100">
                  <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="7127b19c-366e-44a2-94aa-4390e95b2342"></input>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows={4} name="message" placeholder="Your message"></textarea>
                    </div>
                     <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                    <button type="submit" className="btn btn-primary">Send</button>
                  </form>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </section>
      </Container>
      <CustomFooter />
    </>
  );
}