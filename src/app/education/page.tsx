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
          details={[
            "YMCA University of Science and Technology (2018 - 2022)",
            "• CGPA: 7.4",
            "• Specialized in software development and web technologies.",
            "• Completed projects in Angular, Node.js, and database management."
          ]} 
          link="#" // Optional link, replace with actual link if available
        />
        <ContentItem 
          title="Intermediate (12th Grade)" 
          details={[
            "Shanti Niketan Public School (2018): Specialization in Non-medical",
            "• Achieved 72.2% with a focus on Mathematics, Physics, and Computer Science."
          ]} 
          link="#" // Optional link, replace with actual link if available
        />
        <ContentItem 
          title="High School Diploma" 
          details={[
            "Blue Bird Sr. Sec. School (2016)",
            "• Achieved an overall percentage of 85.8%.",
            "• Developed strong foundational knowledge in various subjects."
          ]} 
          link="#" // Optional link, replace with actual link if available
        />
        <ContentItem 
          title="Certification in Programming in JAVA" 
          details={[
            "Swayam NPTEL (September - December 2020)",
            "• Completed a 12-week course with a score of 76%.",
            "• Gained proficiency in core Java programming concepts."
          ]} 
          link="#" // Optional link, replace with actual link if available
        />
      </div>
    </Section>
  </>
);

export default Education;
