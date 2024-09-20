// import Navbar from "../components/Navbar"; // Import the Navbar component
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Education = () => (
  <>
    {/* <Navbar /> Include the Navbar at the top */}
    <Section id="education" title="Educational Background">
      <div className="content-list">
        <ContentItem 
          title="Bachelor of Technology in Computer Science & Engineering" 
          details={["YMCA University of Science and Technology (2018 - 2022)"]} 
          link="#" // Optional link, replace with actual link if available
        />
        <ContentItem 
          title="Intermediate/12th" 
          details={["Shanti Niketan Public School (2018): Specialization in Non-medical"]} 
          link="#" // Optional link, replace with actual link if available
        />
      </div>
    </Section>
  </>
);

export default Education;
