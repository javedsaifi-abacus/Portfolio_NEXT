import Navbar from "../components/Navbar"; // Import the Navbar component
import Section from "../components/Section"; // Ensure this path is correct
import styles from "../about/AboutMe.module.css"; // Import the CSS module

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <Section id="about" title="About Me">
          <div className={styles.columnContainer}>
            {/* About Me Section */}
            <div className={styles.contentBlock}>
              <h3 className={styles.header}>About Me</h3>
              <p className={styles.paragraph}>
                I am a passionate and driven web developer with a keen interest in building scalable and user-centric applications. With a strong foundation in JavaScript and Angular, I strive to create intuitive and responsive web experiences that delight users.
              </p>
              <p className={styles.paragraph}>
                My journey in web development began with a fascination for technology and a love for problem-solving. Since then, I have honed my skills through various projects, where I embraced new challenges and continuously sought to learn and adapt to the ever-evolving tech landscape.
              </p>
              <p className={styles.paragraph}>
                I am a collaborative team player who thrives in dynamic environments and enjoys working with like-minded professionals. My goal is to leverage my technical expertise, creativity, and attention to detail to build meaningful digital solutions that make a difference.
              </p>
            </div>

            {/* Interests & Hobbies Section */}
            <div className={styles.contentBlock}>
              <h3 className={styles.header}>Interests & Hobbies</h3>
              <p className={styles.paragraph}>
                When I am not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enhancing my knowledge in areas such as cloud computing, AI, and machine learning. I also enjoy playing chess, reading books on self-improvement, and engaging in community tech events.
              </p>
            </div>

            {/* Core Values Section */}
            <div className={styles.contentBlock}>
              <h3 className={styles.header}>Core Values</h3>
              <p className={styles.paragraph}>
                I believe in the power of collaboration, innovation, and continuous learning. My approach to development is rooted in writing clean, efficient code and prioritizing user experience. I am committed to ethical practices and building applications that are accessible to all.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default About;
