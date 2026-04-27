import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
      <Container fluid className="bg-body-tertiary">
        <Container className="d-flex align-items-center" xl="10">
          <p className="fs-6 my-3">&copy; Chris Sanga {new Date().getFullYear()}</p>
          <Navbar className="ms-auto">
            <Nav className="fs-6 d-none d-md-flex">
              <Nav.Link href="#home" className="hover-grow">Home</Nav.Link>
              <Nav.Link href="#link" className="px-4 hover-grow">Projects</Nav.Link>
              <Nav.Link href="#adventure" className="hover-grow">Adventure</Nav.Link>
            </Nav>
            <Nav className="ms-auto d-md-none">
              <Nav.Link href="https://www.linkedin.com/in/christopher-sanga-54461527/" target="_blank"><AiFillLinkedin className="text-dark hover-grow" size="2em"/></Nav.Link>
              <Nav.Link href="https://github.com/chrissanga88" target="_blank"><AiFillGithub className="text-dark hover-grow" size="1.9em"/></Nav.Link>
          </Nav>
          </Navbar>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;