import Navbar from "../components/Navbar"; // Update path if needed
import Section from "../components/Section"; // Ensure this path is correct

const About = () => {
  return (
      <>
    <Navbar /> {/* Add the Navbar component here */}
    <Section id="about" title="About Me">
      <p>
        I am an enthusiastic and motivated recent graduate with a strong foundation in JavaScript and Angular, eager to start a career in web development. I seek an entry-level position to apply my skills, learn from experienced professionals, and contribute to innovative projects in a dynamic and collaborative environment.
      </p>
    </Section>
  </>
  )
}


export default About;
