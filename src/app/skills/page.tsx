import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Skills = () => (
  <>
    <Section id="skills" title="Technical Skills">
      <div className="content-list">
        <ContentItem title="HTML5 & CSS3" link="#" />
        <ContentItem title="JavaScript (ES6+)" link="#" />
        <ContentItem title="Node.js core modules" link="#" />
        <ContentItem title="Express.js" link="#" />
        <ContentItem title="Database integration (MongoDB, MySQL)" link="#" />
        <ContentItem title="Authentication & Authorization (JWT)" link="#" />
        <ContentItem title="Error handling & debugging" link="#" />
        <ContentItem title="Package management (NPM)" link="#" />
        <ContentItem title="Version control (Git & GitHub)" link="#" />
      </div>
    </Section>
  </>
);

export default Skills;
