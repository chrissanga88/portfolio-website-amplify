import homeScreen from "/home_screenshot.png"
import ExpandableContainer from "../expandable-container/ExpandableContainer";
import "./website-section.css";

function WebsiteSection () {

  return (
    <section className="website-project">
      <ExpandableContainer header="Nomadic Node Website" imageSrc={homeScreen} alt="homepage screenshot" bgColor={"#2E5E4E"}>
    
      </ExpandableContainer>
    </section>
  )
}

export default WebsiteSection;