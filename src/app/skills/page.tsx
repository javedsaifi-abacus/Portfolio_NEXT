import Navbar from "../components/Navbar"; // Update path if needed
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Skills = () => (
  <>
    <Navbar /> {/* Add the Navbar component here */}
    <Section id="skills" title="Technical Skills">
      <div className="content-list">
        <ContentItem title="HTML5 & CSS3" />
        <ContentItem title="JavaScript (ES6+)" />
        <ContentItem title="Node.js core modules" />
        <ContentItem title="Express.js" />
        <ContentItem title="Database integration (MongoDB, MySQL)" />
        <ContentItem title="Authentication & Authorization (JWT)" />
        <ContentItem title="Error handling & debugging" />
        <ContentItem title="Package management (NPM)" />
        <ContentItem title="Version control (Git & GitHub)" />
      </div>
    </Section>
  </>
);

export default Skills;
