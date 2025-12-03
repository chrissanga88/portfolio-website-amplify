import Container from "react-bootstrap/Container";
import TextAnimation from "../animations/TextAnimation";


function Hero() {
  const animationWords = ['developer', 'leader', 'adventurer'];
  return (
    <section  
        className="hero-section bg-black">
      <Container style={{
        backgroundImage: 'url("/city_night.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }} className="d-flex flex-column flex-md-row p-0">
        <Container className="d-flex flex-column rounded m-5 p-5 bg-black w-50 bg-opacity-75">
          <h1 className="text-light mb-5" style={{fontSize: '3rem'}}>
            Hi, I&apos;m Chris. <br/> I&apos;m glad you&apos;re here!
          </h1>
          <h1 className="text-light" style={{fontSize: '3rem'}}>
            Get to know me as <br/>a<span><TextAnimation words={animationWords}/></span>
          </h1>
        </Container>
      </Container>
    </section>
  );
}

export default Hero;