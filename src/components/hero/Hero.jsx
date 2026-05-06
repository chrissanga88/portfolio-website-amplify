import { Container, Row, Col, Image } from "react-bootstrap";
import AnimateLetters from "../animations/animateLetters";
import BootstrapControlled from "../carousels/BootstrapControlled";
import BodyCards from "../body-cards/BodyCards";
import { CarouselItem } from 'react-bootstrap';
import "./hero.css";


function Hero() {
  const animationWords = ['developer.', 'leader.', 'adventurer.'];
  const cardData = [
    { 
      id: 1, 
      title: "Trailhead",
      content: "I began my career in the insurance industry and eventually stepped into a leadership role, where I led a team, built and managed a book of business, and learned how to operate in high-accountability environments. Over time, I became increasingly focused on how technology could improve workflows and eliminate inefficiencies—but without the technical skills to execute, those ideas stayed on paper. So I made the leap into software development."
    },
    {
      id: 2,
      title: "The Climb",
      content: "Over the past few years, I’ve immersed myself in building that foundation with the goal of becoming someone who helps teams move faster and smarter while driving innovation and bringing forward-thinking ideas to life. During this period, I also traveled around the world, pushing myself physically and mentally as I gained perspective that continues to shape how I approach challenges and growth."
    },
    {
      id: 3,
      title: "Next Ascent",
      content: "I’m now looking to join a growing company that values continuous learning and initiative, where I can take ownership of complex problems and go the extra mile to build meaningful solutions."
    }
  ]
  return (
    <section className="hero-section pb-lg-5 d-flex">
      <Container className="p-0">
        <Row className="g-0 rounded-lg-5  overflow-hidden">
          <Col lg={6} xs={12} className="position-relative">
            <Image 
              src="/chris_mountain.png" 
              alt="Chris on a mountain" 
              style={{
                width: '100%',
                height: '100%',
                minHeight: '50vh', // Ensure it has height on mobile
                objectFit: 'cover'  // Mimics background-size: cover
              }}
              className="rounded-md-5" 
            />
          </Col>
          <Col lg={6} xs={12} className="d-flex flex-column p-4 p-md-5 bg-black align-items-center">
            <div>
              <h1 className="animation-text text-light mb-3">
                Hi, I&apos;m Chris. I&apos;m glad you&apos;re here!
              </h1>
              <h1 className="animation-text text-light">
                Get to know me as <span><AnimateLetters words={animationWords}/></span>
              </h1>
            </div>
            <div className="flex-grow-1 w-100 mt-4 mt-md-5">
              <BootstrapControlled className="flex-grow-1 w-100 d-flex flex-column">
                {cardData.map((card) => (
                  <CarouselItem key = {card.id} className="h-100">
                    <BodyCards
                      title = {card.title}
                      content = {card.content}
                      customColor={"#1F3D2B"}
                      textColor={"white"}
                    />
                  </CarouselItem>
                ))}
            </BootstrapControlled>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;