// import Navbar from "../components/Navbar"; // Import the Navbar component
import Section from "../components/Section"; // Import the Section component
import ContentItem from "../components/ContentItem"; // Import the ContentItem component

const About = () => {
  return (
    <>
      {/* <Navbar /> Include the Navbar at the top */}
      <Section id="about" title="About Me">
        <div className="content-list">
          {/* About Me Section */}
          <ContentItem 
            title="About Me" 
            details={[
              "✨ Passionate web developer specializing in:",
              "  - 💻 JavaScript and Angular for web application development.",
              "  - 🎨 Crafting intuitive and scalable user experiences.",
              "  - 🚀 Transforming ideas into reality."
            ]}
          />

          {/* Interests & Hobbies Section */}
          <ContentItem 
            title="Interests & Hobbies" 
            details={[
              "🌍 When I'm not coding, I enjoy:",
              "  - ✈️ Traveling to explore new landscapes and cultures.",
              "  - 🚴‍♂️ Biking through scenic trails to connect with nature.",
              "  - 🌟 These adventures fuel my creativity and keep my spirit vibrant."
            ]}
          />

          {/* Core Values Section */}
          <ContentItem 
            title="Core Values" 
            details={[
              "🤝 I prioritize:",
              "  - 🤗 Collaboration and teamwork in projects.",
              "  - 💡 Innovation and creativity in problem-solving.",
              "  - 🧑‍🤝‍🧑 User-centered design for impactful solutions.",
              "  - ✍️ Writing clean, ethical code."
            ]}
          />
        </div>
      </Section>
    </>
  );
};

export default About;
