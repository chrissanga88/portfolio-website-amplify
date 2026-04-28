import { Button, Container, Nav } from "react-bootstrap";
import "./experience.css";

function Experience() {
  return (
    <section className="experience-section pb-5">
      <Container className="">
        <Nav className="m-0 justify-content-center p-lg-4 gap-3 gap-md-5">
          <Nav.Item><Button className="rounded-pill">Education</Button></Nav.Item>
          <Nav.Item><Button className="rounded-pill">Work</Button></Nav.Item>
          <Nav.Item><Button className="rounded-pill">Certification</Button></Nav.Item>
        </Nav>
      </Container>
    </section>
  );
};

export default Experience;