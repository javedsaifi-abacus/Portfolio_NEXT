// /src/app/tools/page.tsx
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Tools = () => (
  <Section id="tools" title="Tools & Software">
    <div className="content-list">
      <ContentItem title="VS Code" />
      <ContentItem title="Putty" />
      <ContentItem title="FileZilla" />
      <ContentItem title="Postman" />
      <ContentItem title="DBeaver" />
    </div>
  </Section>
);

export default Tools;
