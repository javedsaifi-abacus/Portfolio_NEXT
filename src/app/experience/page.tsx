// import Navbar from "../components/Navbar"; // Update path if needed
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Experience = () => (
  <>
    {/* <Navbar /> Add the Navbar component here */}
    <Section id="experience" title="Work Experience">
      <div className="content-list">
        <ContentItem 
          title="Loyalty Partner IT Solutions Pvt Ltd, Faridabad" 
          details={[
            "<strong>Software Developer Trainee</strong> (April 2024 - Present)",
            "• Developed web applications utilizing Angular and Node.js, enhancing functionality and user experience.",
            "• Built server-side logic and APIs, ensuring robust data handling and performance.",
            "• Integrated components and collaborated with senior developers to deliver high-quality software solutions."
          ]}
          link="#" // Add a link if needed
        />
        <ContentItem 
          title="VVnT SeQuor, Noida" 
          details={[
            "<strong>Web Automation Testing Intern</strong> (January 2022 - June 2022)",
            "• Developed automated testing scripts to improve testing efficiency and coverage.",
            "• Maintained automation frameworks, ensuring reliability and adaptability to changes.",
            "• Analyzed test results, identified defects, and collaborated with the development team to resolve issues."
          ]}
          link="#" // Add a link if needed
        />
      </div>
    </Section>
  </>
);

export default Experience;
