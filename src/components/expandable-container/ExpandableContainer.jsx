import { Container, Image, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ExpandableSemiCircle from "../expandable-semi-circle/ExpandableSemiCircle";
import "./expandable-container.css";

function ExpandableContainer({ header, imageSrc, altText, isExpanded, onExpand, children }) {
  return (
    <>
        <Container 
          fluid
          className="pb-5 px-3 px-md-4 px-lg-0"
        >
          <Row className="justify-content-center">
            <Col xs={12} lg={8} xl={6} className="px-lg-0">
            <h5 className="text-white py-3 m-0">{header}</h5>
              <Image 
              src={imageSrc}
              alt={altText}
              className="w-100"
              rounded
            />
            </Col>
          </Row>
          { !isExpanded && <ExpandableSemiCircle onSelect={onExpand} isExpanded={isExpanded}/> }
        </Container>
        { isExpanded && children}
    </>

  );
}

export default ExpandableContainer;