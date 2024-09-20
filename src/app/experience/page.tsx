// import Navbar from "../components/Navbar"; // Update path if needed
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Experience = () => (
  <>
    {/* <Navbar /> Add the Navbar component here */}
    <Section id="experience" title="Work Experience">
      <div className="content-list">
        <ContentItem 
          title="Software Developer Trainee at Loyalty Partner IT Solutions" 
          details={[
            <span style={{ fontWeight: 'bold' }}>Apr 2024 - Present:</span>, // Inline styling for duration
            " Developed web applications using Angular and Node.js.",
            " Built server-side logic and APIs.",
            " Integrated components and collaborated with senior developers."
          ]}
          link="#" // Add a link if needed
        />
        <ContentItem 
          title="Web Automation Testing Intern at VVnT SeQuor, Noida" 
          details={[
            <span style={{ fontWeight: 'bold' }}>Jan 2022 - Jun 2022:</span>, // Inline styling for duration
            " Developed automated testing scripts.",
            " Maintained automation frameworks.",
            " Analyzed test results and identified defects."
          ]}
          link="#" // Add a link if needed
        />
      </div>
    </Section>
  </>
);

export default Experience;
