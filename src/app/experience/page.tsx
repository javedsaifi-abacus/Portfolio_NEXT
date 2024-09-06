import Navbar from "../components/Navbar"; // Update path if needed
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Experience = () => (
  <>
    <Navbar /> {/* Add the Navbar component here */}
    <Section id="experience" title="Work Experience">
      <div className="content-list">
        <ContentItem 
          title="Software Developer Trainee at Loyalty Partner IT Solutions" 
          details="Apr 2024 - Present: Developed web applications using Angular and Node.js, built server-side logic and APIs, integrated components, collaborated with senior developers." 
        />
        <ContentItem 
          title="Web Automation Testing Intern at VVnT SeQuor, Noida" 
          details="Jan 2022 - Jun 2022: Developed automated testing scripts, maintained automation frameworks, analyzed test results, identified and documented defects." 
        />
      </div>
    </Section>
  </>
);

export default Experience;
