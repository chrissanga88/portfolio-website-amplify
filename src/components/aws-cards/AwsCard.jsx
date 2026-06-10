import { Col, Container, Image, Row } from "react-bootstrap";
import "./aws-cards.css"

function AwsCard ({icon, alt, title, content}) {
  return (
    <Container className="h-100 border-top border-bottom border-white text-center">
      <Row className="align-items-center px-4 pt-3 pb-2">
        <Col className="icon-col p-0">
          <Image className="h-100 w-100" src={icon} alt={alt}/>
        </Col>
        <Col>
          <h5>{title}</h5>
        </Col>
      </Row>
      <p className="content">{content}</p>
    </Container>
  )
}

export default AwsCard;