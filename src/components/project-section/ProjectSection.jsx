import { Container, Image, Row, Col } from "react-bootstrap";
import "./project-section.css";

function ProjectSection({header, children, headerRight = true, ...props}) {
  const headerClass = headerRight ? "website-header px-0 py-3 m-0 text-end" : "website-header px-0 py-3 m-0";
  return (
    <Container 
      fluid
      {...props}
        >
          <Row className="justify-content-center px-md-3 px-lg-0">
            <Col xs={12} lg={8} xl={6} className="px-lg-0">
              <h6 className={headerClass}>{header}</h6>
              {children}
            </Col>
          </Row>
        </Container>
  );
}

export default ProjectSection;