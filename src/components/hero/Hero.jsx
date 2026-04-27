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
      title: "Roots",
      content: "I grew up in a small town called Brawley in Southern California and, for much of my early life, rarely had the opportunity to venture far from home. Even then, the idea of distant places—of learning new histories, cultures, and languages—felt endlessly exciting. As I got older and began traveling farther and more often, that curiosity turned into something close to an addiction."
    },
    {
      id: 2,
      title: "The Spark",
      content: "For years, I saved every bit of vacation time I could to explore somewhere new. Along the way, meeting people from different backgrounds reshaped how I thought about travel itself. The concept of slowing down—of spending months in one place to truly immerse yourself—was foreign to me, but it planted the seed for something bigger. The idea of an around-the-world journey slowly took shape."
    },
    {
      id: 3,
      title: "The Leap",
      content: "After years of planning and the pause of a global pandemic, my partner and I finally left everything familiar behind and set out on an around-the-world journey spanning five continents and 38 countries. That experience gave me confidence, perspective, and a deeper appreciation for simplicity. It changed my relationship with money and material possessions, pushed me physically and mentally, and reignited a love of learning I hadn’t felt since childhood. Most importantly, it taught me the value of living an intentional, interesting life—and of always having something to look forward to."
    }
  ]
  return (
    <section className="hero-section bg-black pb-5 d-flex">
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