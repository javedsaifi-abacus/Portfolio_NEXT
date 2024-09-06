import Head from "next/head";
import Header from "../app/components/Header"; // Update path if needed
import Section from "../app/components/Section"; // Update path if needed
import ContactForm from "../app/components/ContactForm"; // Update path if needed
import Navbar from "../app/components/Navbar"; // Update path if needed

// Import global styles
// import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Javed Saifi&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Javed Saifi, MERN Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Header />

      <Section id="about" title="About Me">
        <p>
          I am an enthusiastic and motivated recent graduate with a strong
          foundation in JavaScript and Angular, eager to start a career in web
          development. I seek an entry-level position to apply my skills, learn
          from experienced professionals, and contribute to innovative projects
          in a dynamic and collaborative environment.
        </p>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="content-list">
          <div className="content-item"><h3>HTML5 & CSS3</h3></div>
          <div className="content-item"><h3>JavaScript (ES6+)</h3></div>
          <div className="content-item"><h3>Node.js core modules</h3></div>
          <div className="content-item"><h3>Express.js</h3></div>
          <div className="content-item"><h3>Database integration (MongoDB, MySQL)</h3></div>
          <div className="content-item"><h3>Authentication & Authorization (JWT)</h3></div>
          <div className="content-item"><h3>Error handling & debugging</h3></div>
          <div className="content-item"><h3>Package management (NPM)</h3></div>
          <div className="content-item"><h3>Version control (Git & GitHub)</h3></div>
        </div>
      </Section>

      <Section id="tools" title="Tools & Software">
        <div className="content-list">
          <div className="content-item"><h3>VS Code</h3></div>
          <div className="content-item"><h3>Putty</h3></div>
          <div className="content-item"><h3>FileZilla</h3></div>
          <div className="content-item"><h3>Postman</h3></div>
          <div className="content-item"><h3>DBeaver</h3></div>
        </div>
      </Section>

      <Section id="experience" title="Work Experience">
        <div className="content-list">
          <div className="content-item">
            <h3>Software Developer Trainee</h3>
            <p>Loyalty Partner IT Solutions (Apr 2024 - Present)</p>
            <p>
              Developed customized web applications using Angular and
              JavaScript. Built server-side logic and APIs with Node.js.
              Integrated front-end and back-end components for seamless
              functionality. Collaborated with senior developers for hands-on
              learning and growth.
            </p>
          </div>
          <div className="content-item">
            <h3>Web Automation Testing Intern</h3>
            <p>VVnT SeQuor, Noida (Jan 2022 - Jun 2022)</p>
            <p>
              Developed and implemented automated testing scripts using tools
              such as Selenium and Cypress. Assisted in maintaining and updating
              existing automation frameworks, ensuring compatibility with new
              software updates and features. Analyzed and reported test results,
              identifying and documenting defects, and working closely with
              developers to resolve issues.
            </p>
          </div>
        </div>
      </Section>

      <Section id="education" title="Educational Background">
        <div className="content-list">
          <div className="content-item">
            <h3>Bachelor of Technology in Computer Science & Engineering</h3>
            <p>YMCA University of Science and Technology (2018 - 2022)</p>
          </div>
          <div className="content-item">
            <h3>Intermediate/12th</h3>
            <p>Shanti Niketan Public School (2018)</p>
            <p>Specialization in Non-medical</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="content-list">
          <div className="content-item">
            <h3>Dedicated Sales Force Automation (SFA) Project at SimollBath</h3>
            <p>Technology used - Angular, Node.js, Express.js, XLSX</p>
          </div>
          <div className="content-item">
            <h3>Dedicated Sales Force Automation (SFA) Project at Marmo Solutions</h3>
            <p>Technology used - Angular, Node.js, Express.js, XLSX</p>
          </div>
        </div>
      </Section>

      <ContactForm />
    </>
  );
}
