import homeScreen from "/home_screenshot.png"
import ExpandableContainer from "../expandable-container/ExpandableContainer";
import "./website-section.css";
import { Image } from "react-bootstrap";
import ProjectSection from "../project-section/ProjectSection";

function WebsiteSection () {

  return (
    <section className="website-project">
      <ExpandableContainer header="nomadic_node_website" imageSrc={homeScreen} alt="homepage screenshot" >
        <ProjectSection header="/design">
          <Image src="/figma_screenshot.png" rounded className="w-100">

          </Image>
        </ProjectSection>
      </ExpandableContainer>
    </section>
  )
}

export default WebsiteSection;