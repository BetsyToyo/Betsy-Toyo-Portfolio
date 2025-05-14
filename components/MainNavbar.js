import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router'; 


export default function MainNavbar() {
  const router = useRouter(); 
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Link href="/" className="custom-link">
          <Navbar.Brand >My Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as="div">
              <Link href="/" className="custom-link">About me</Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link href="/projects" className="custom-link">Projects</Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link href="/skills" className="custom-link">Skills</Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link href="/contact" className="custom-link">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}