import { useState } from "react";
import homeScreen from "/home_screenshot.png"
import ExpandableContainer from "../expandable-container/ExpandableContainer";
import "./website-section.css";
import { Image, Row, Col } from "react-bootstrap";
import ProjectSection from "../project-section/ProjectSection";
import ColorScheme from "../color-scheme/ColorScheme";
import ExpandableSemiCircle from "../expandable-semi-circle/ExpandableSemiCircle";
import BodyCards from "../body-cards/BodyCards";
import AwsCard from "../aws-cards/AwsCard";

function WebsiteSection ({...props}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = ["#1F3D2B", "#2E5E4E", "#6B7280", "#E6DDC6", "#F9FAF7"];
  const frontendCardData = [
    {
      id: 1,
      title: "React",
      content: "I used React for its component-based architecture, which allowed me to build reusable, well-structured UI components and scale the application cleanly as it grew. State management is kept intentionally lightweight and local to components where possible, keeping complexity low while maintaining clarity. React Router handles client-side navigation, with protected routes used to restrict admin-only sections and ensure a secure, predictable user flow."
    },
    {
      id: 2,
      title: "Bootstrap",
      content: "Bootstrap was used to establish a responsive layout quickly and consistently across devices. Its grid system provided a strong structural foundation, while utility classes accelerated development without sacrificing clarity. Where needed, Bootstrap styles were selectively overridden to better align with the site’s custom design system and visual identity."
    },
    {
      id: 3,
      title: "Motion",
      content: "Motion was chosen to bring the interface to life through subtle, purposeful animations such as page transitions, hover states, and section reveals. These micro-interactions help guide attention and create a sense of progression without overwhelming the user. Motion was preferred over CSS-only animations for its declarative API, better orchestration of complex animations, and tighter integration with React’s component lifecycle"
    }
  ]

  const awsCardData = [
    {
      id: 1,
      icon: "/aws_cognito.png",
      alt: "aws cognito icon",
      title: "Cognito",
      content: "AWS Cognito is used to handle user authentication and secure access to administrative features on the site. A dedicated admin user group is configured to protect the admin page, ensuring that only authenticated users with the appropriate permissions can access functionality that updates the DynamoDB database storing the website’s content."
    },
    {
      id: 2,
      icon: "/aws_amplify.png",
      alt: "aws amplify icon",
      title: "Amplify",
      content: "AWS Amplify is used to provision and manage backend resources, including authentication and data access, while also handling hosting and deployment. It integrates with AWS Cognito for secure user authentication and DynamoDB for data storage, providing a scalable backend that connects cleanly to the React frontend through a unified development workflow."
    },
    {
      id: 3,
      icon: "aws_dynamoDB.png",
      alt: "aws dynamo DB icon",
      title: "Dynamo DB",
      content: "Amazon DynamoDB is used as the backend database to store and manage the website’s content, enabling dynamic updates without requiring changes to the frontend code. Its serverless, low-latency design allows content to be securely read and updated through authenticated admin access while scaling seamlessly as the site grows."
    }
  ]

  function handleExpand() {
    setIsExpanded((expanded) => !isExpanded);
  }

  return (
    <section {...props}>
      <ExpandableContainer 
        header="nomadic_node_website" 
        imageSrc={homeScreen} 
        alt="homepage screenshot" 
        isExpanded={isExpanded} 
        onExpand={handleExpand}
      >
        <ProjectSection header=".design" style={{backgroundColor: "#000000"}} className="text-white pb-4 px-3">
          <Image src="/figma_screenshot.png" alt="figma website design" rounded className="w-100"/>
          <ColorScheme colors={colors}></ColorScheme>
          <div className="design-text text-center">
            <h1><span className="fw-bold">Aa</span> <span>Aa Roboto</span></h1>
            <p>I designed the website in Figma to quickly explore layout, hierarchy, and responsive behavior while maintaining a clear, reusable design system. The color palette draws inspiration from travel and outdoor environments, using grounded, natural tones to evoke a sense of exploration while remaining clean and professional. Roboto was chosen for its clarity, versatility, and excellent readability across devices, allowing the design to feel modern and approachable without distracting from the content.</p>
          </div>
        </ProjectSection>
        <ProjectSection header=".frontend" headerRight={false} style={{backgroundColor: "white"}} className="text-black px-3 px-lg-0">
          <div className="w-100">
            <Row className="frontend-logos d-flex justify-content-around py-3 mx-0">
              <Col xs="auto">
                <Image src="/react_logo.svg" alt="react logo"/>
              </Col>
              <Col xs="auto">
                <Image src="/bootstrap_logo.svg" alt="bootstrap logo" />
              </Col>
              <Col xs="auto">
                <Image src="/motion_logo.png" alt="motion log"/>
              </Col>
            </Row>
            <Row className="frontend-cards pb-5 g-3 justify-content-centeer mx-0">
              {frontendCardData.map((card) => 
                <Col xs={12} md={4} lg={4} key={card.id}>
                  <BodyCards title={card.title} content={card.content} customColor={"#E6DDC6"}/>
                </Col>
              )}
            </Row>
          </div>
        </ProjectSection>
        <ProjectSection header=".backend" style={{backgroundColor:"#6B7280"}} className="text-white px-3 px-lg-0 pb-5">
          <Row className="aws-cards g-3 justify-content-center mx-0">
            {awsCardData.map((card) => 
              <Col xs={12} md={4} key={card.id}>
                <AwsCard icon={card.icon} alt={card.alt} title={card.title} content={card.content} />
              </Col>
            )}
          </Row>
        </ProjectSection>
        { isExpanded && <ExpandableSemiCircle onSelect={handleExpand} isExpanded={isExpanded}/>}
      </ExpandableContainer>
    </section>
  )
}

export default WebsiteSection;