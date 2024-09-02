// /src/app/education/page.tsx
import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Education = () => (
  <Section id="education" title="Educational Background">
    <div className="content-list">
      <ContentItem title="Bachelor of Technology in Computer Science & Engineering" details="YMCA University of Science and Technology (2018 - 2022)" />
      <ContentItem title="Intermediate/12th" details="Shanti Niketan Public School (2018): Specialization in Non-medical" />
    </div>
  </Section>
);

export default Education;
