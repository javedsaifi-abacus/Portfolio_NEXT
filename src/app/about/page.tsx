// import Navbar from "../components/Navbar"; // Import the Navbar component
import Section from "../components/Section"; // Import the Section component
import ContentItem from "../components/ContentItem"; // Import the ContentItem component

const About = () => {
  return (
    <>
      {/* <Navbar /> Include the Navbar at the top */}
      <Section id="about" title="About Me">
        <div>
          {/* About Me Section */}
          <ContentItem 
            title="About Me" 
            details=
              "I am a passionate web developer with a strong foundation in JavaScript and Angular, creating intuitive and scalable web applications."
            
          />

          {/* Interests & Hobbies Section */}
          <ContentItem 
            title="Interests & Hobbies" 
            details=
              "Outside coding, I explore tech trends, contribute to open-source, and enjoy chess and self-improvement books."
            
          />

          {/* Core Values Section */}
          <ContentItem 
            title="Core Values" 
            details=
              "I prioritize collaboration, innovation, and user experience, committed to writing clean code and ethical practices."
             
          />
        </div>
      </Section>
    </>
  );
};

export default About;
