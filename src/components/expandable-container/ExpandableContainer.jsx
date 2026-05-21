import { Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ExpandableSemiCircle from "../expandable-semi-circle/ExpandableSemiCircle";
import "./expandable-container.css";

function ExpandableContainer({ header, imageSrc, altText, children, bgColor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
        <Container 
          fluid="lg"
          style={{backgroundColor: bgColor}}
          className="py-3 justify-content-center"
        >
          
          <Row className="justify-content-center">
            <Col xs={12} lg={8}>
            <h5 className="website-header text-white px-0 pb-3 m-0">{header}</h5>
              <Image 
              src={imageSrc}
              alt={altText}
              className="w-100"
              rounded
            />
            </Col>
          </Row>
            
        </Container>
        { isExpanded && children }
        <ExpandableSemiCircle onSelect={handleExpand} isExpanded={isExpanded}/>
    </>

  );
}

export default ExpandableContainer;