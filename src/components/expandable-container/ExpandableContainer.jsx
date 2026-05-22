import { Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ExpandableSemiCircle from "../expandable-semi-circle/ExpandableSemiCircle";
import "./expandable-container.css";

function ExpandableContainer({ header, imageSrc, altText, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
        <Container 
          fluid
        >
          <Row className="justify-content-center">
            <Col xs={12} lg={6}>
            <h5 className="text-white px-0 py-3 m-0">{header}</h5>
              <Image 
              src={imageSrc}
              alt={altText}
              className="w-100"
              rounded
            />
            </Col>
          </Row>
          { !isExpanded && <ExpandableSemiCircle onSelect={handleExpand} isExpanded={isExpanded}/> }
        </Container>
        { isExpanded && children }
        { isExpanded && <ExpandableSemiCircle onSelect={handleExpand} isExpanded={isExpanded}/>}
    </>

  );
}

export default ExpandableContainer;