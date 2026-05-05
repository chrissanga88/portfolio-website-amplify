import { useState } from "react";
import { Button, Container, Nav, Row, Col } from "react-bootstrap";
import "./experience.css";
import ExperienceCard from "../experience-cards/ExperienceCard";
import { motion } from "motion/react";

function Experience() {

  const EXPERIENCEDATA = {
    education: [
      {
        id: 1,
        cardImage: "/dynamic_photos/usc_logo.png",
        header: "University of Southern California",
        line1: "B.S. Business Administration",
        line2: "Mixed Concentration:",
        line3: "Entrepreneurship & Marketing"
      },
      {
        id: 2,
        cardImage: "/dynamic_photos/mesa_logo.png",
        header: "San Diego Mesa College",
        line1: "All credits met for:",
        line2: "A.A. Applied Math",
        line3: "A.A. Spanish"
      },
      {
        id: 3,
        cardImage: "/dynamic_photos/grossmont_logo.png",
        header: "Grossmont-Cuyamaca College",
        line1: "A.A. Computer Science Info Sys.",
        line2: "Computer Programming",
        line3: null
      }
    ],
    work: [
      {
        id: 4,
        cardImage: "/dynamic_photos/hartford_logo.png",
        header: "The Hartford Insurance",
        line1: "Consumer Operations Specialist",
        line2: "Property & Casualty Sales Agent",
        line3: null
      },
      {
        id: 5,
        cardImage: "/dynamic_photos/mmc_logo.png",
        header: "Marsh & McLennan Agency",
        line1: "Client Associate",
        line2: "Client Executive",
        line3: null
      },
      {
        id: 6,
        cardImage: "/dynamic_photos/wh_logo.png",
        header: "Watering Hope",
        line1: "Lead Intern",
        line2: "Software Development",
        line3: null
      },
      {
        id: 7,
        cardImage: "/dynamic_photos/rei_logo.png",
        header: "Recreational Equipment, Inc.",
        line1: "Sales Specialist",
        line2: null,
        line3: null
      }
    ],
    certification: [
      {
        id: 8,
        cardImage: "/dynamic_photos/aws_saa.png",
        header: "Amazon Web Services",
        line1: "Certified Solutions Architect",
        line2: "Associate",
        line3: null
      },
      {
        id: 9,
        cardImage: "/dynamic_photos/institutes_logo.png",
        header: "The Institutes",
        line1: "Chartered Property & Casualty",
        line2: "Underwriter",
        line3: null
      },
      {
        id: 10,
        cardImage: "/dynamic_photos/udemy_logo.png",
        header: "Udemy",
        line1: "Learn Figma - UI/UX Design",
        line2: "Ultimate AWS Certified SAA",
        line3: "React - The Complete Guide"
      }
    ]
  };

  const [ selectedExp, setSelectedExp ] = useState('education');

  function handleSelect(selectedButton) {
    setSelectedExp(selectedButton);
  }

  return (
    <section className="experience-section pb-0">
      <Container className="experience-toggle px-0">
        <Col>
          <Nav className="mx-auto px-3 pb-4 pb-md-5 pt-lg-5">
            <Nav.Item>
              <Button 
                onClick={() => handleSelect('education')} 
                className={selectedExp === 'education' ? 'active' : undefined}
              >
                Education
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button 
                onClick={() => handleSelect('work')} 
                className={selectedExp === 'work' ? 'active' : undefined}
              >
                Work
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button 
                onClick={() => handleSelect('certification')} 
                className={selectedExp === 'certification' ? 'active' : undefined}
              >
                Certification
              </Button>
            </Nav.Item>
          </Nav>
          <div
            className="row justify-content-center mx-3 gap-3 gap-md-5 mb-md-5">
              {EXPERIENCEDATA[selectedExp].map((card) => (
                <ExperienceCard key={card.id} cardImage={card.cardImage} header={card.header} line1={card.line1} line2={card.line2} line3={card.line3}/>
              ))}
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Experience;