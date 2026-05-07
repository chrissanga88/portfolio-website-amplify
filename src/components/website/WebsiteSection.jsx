import { Container, Image, Row } from "react-bootstrap";
import "./website-section.css";

function WebsiteSection () {
  return (
    <section className="website-section p-3 px-lg-5">
      <Container className="website-container">
        <Row className="justify-content-center">
          <h5 className="website-header text-white px-0 pb-3 m-0">nomadic_node_website</h5>
          <Image 
            src="/home_screenshot.png"
            alt="homepage screenshot"
            className="website-screenshot p-0"
            rounded
          />
        </Row>
      </Container>
    </section>
  )
}

export default WebsiteSection;