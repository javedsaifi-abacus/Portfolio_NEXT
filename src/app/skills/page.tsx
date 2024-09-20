  import Section from "../components/Section";
  import ContentItem from "../components/ContentItem";

  const Skills = () => (
    <>
      <Section id="skills" title="Technical Skills">
        <div className="content-list">
          
          <ContentItem 
            title="Frontend Skills" 
            details={[
              "<strong>HTML5 & CSS3:</strong> Proficient in web page creation and styling.",
              "<strong>JavaScript (ES6+):</strong> Experienced in modern JavaScript practices.",
              "<strong>Angular:</strong> Skilled in building dynamic single-page applications."
            ]}
            link="#" 
          />
          
          <ContentItem 
            title="Backend Skills" 
            details={[
              "<strong>Node.js Core Modules:</strong> Well-versed in server-side development.",
              "<strong>Express.js:</strong> Skilled in building RESTful APIs.",
              "<strong>Authentication & Authorization (JWT):</strong> Knowledgeable in securing applications.",
              "<strong>Error Handling & Debugging:</strong> Adept at maintaining application stability."
            ]}
            link="#" 
          />
          
          <ContentItem 
            title="Database Skills" 
            details={[
              "<strong>Database Integration (MongoDB, MySQL):</strong> Proficient in SQL and NoSQL databases."
            ]}
            link="#" 
          />
          
          <ContentItem 
            title="Version Control" 
            details={[
              "<strong>Version Control (Git & GitHub):</strong> Proficient in Git for project collaboration."
            ]}
            link="#" 
          />
        </div>
      </Section>
    </>
  );

  export default Skills;
