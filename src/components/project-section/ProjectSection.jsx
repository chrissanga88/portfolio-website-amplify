import { Container, Image, Row, Col } from "react-bootstrap";
import "./project-section.css";

function ProjectSection({header, children, ...props}) {
  return (
    <Container 
      fluid
      {...props}
        >
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
            <h6 className="website-header text-white px-0 py-3 m-0 text-end">{header}</h6>
            <div className="">{children}</div>
            </Col>
          </Row>
        </Container>
  );
}

export default ProjectSection;