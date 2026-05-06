import { Col, Row } from "react-bootstrap";
import { motion } from "motion/react";
import "./experience-card.css";


function ExperienceCard({cardImage, header, line1, line2, line3}) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, scale: .6},
        visible: { 
          opacity: 1, 
          scale: 1, 
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
          }
        },
      }}
      initial="hidden"
      animate="visible"
      className="container experience-card bg-white m-0 px-3 px-md-4 py-3 rounded-3"
      >
        <Row className="d-flex align-items-center flex-nowrap g-0">
          <Col className="image-wrapper d-flex align-items-center p-0">
            <img
              src={cardImage}
              className=""
              alt="Card image"
            />
          </Col>
          <Col className="card-body">
            <div className="text-center">
              <h1 className="m-0">{header}</h1>
              <p className="m-0">{line1}</p>
              <p className="m-0">{line2}</p>
              <p className="m-0">{line3}</p>
            </div>
          </Col>
        </Row>
    </motion.div>
  );
}

export default ExperienceCard;