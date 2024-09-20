// /src/pages/Projects.tsx

import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Projects = () => (
  <>
    <Section id="projects" title="🌟 Featured Projects">
      <div className="content-list">
        {/* Portfolio Website Project */}
        <ContentItem 
          title="Portfolio Website" 
          details={[
            "Explore my personal portfolio, a vibrant showcase of my work and skills, built with Next.js.",
            "🚀 Modern Design",
            "🖥️ Fast and Optimized",
            "📁 Showcase of my projects and accomplishments."
          ]} 
          link="https://javedportfolio.vercel.app/" 
          image="port.png" // Replace with actual image path
        />

        {/* Contact Form Project */}
        <ContentItem 
          title="Contact Form" 
          details={[
            "A fully functional contact form built with Angular, Node.js, and Express.",
            "✅ Task Management (Add, edit, and delete tasks)",
            "📅 Date and Time Integration",
            "🛠️ Robust Backend",
            "🎨 Attractive UI using Angular and Bootstrap."
          ]} 
          link="https://backend-repo-gamma.vercel.app" 
          image="contactform.png" // Replace with actual image path
        />

        {/* Dedicated Sales Force Automation (SFA) Project at SimollBath */}
        <ContentItem 
          title="Dedicated Sales Force Automation (SFA) Project at SimollBath" 
          details={[
            "Developed a sales force automation system for SimollBath using Angular, Node.js, Express.js, and XLSX.",
            "The system streamlines sales operations and provides advanced reporting features.",
            "It allows for managing sales data, tracking field sales activities, and generating reports in Excel format."
          ]} 
          link="http://simoll.theloyaltypartner.co.in/" 
          image="simoll.png" // Replace with actual image path
        />

        {/* Dedicated Sales Force Automation (SFA) Project at Marmo Solutions */}
        <ContentItem 
          title="Dedicated Sales Force Automation (SFA) Project at Marmo Solutions" 
          details={[
            "Created a comprehensive sales force automation tool for Marmo Solutions, leveraging Angular, Node.js, Express.js, and XLSX.",
            "The project focuses on automating sales workflows, tracking sales teams, and generating detailed reports.",
            "It also integrates with Excel for data analysis and reporting."
          ]} 
          link="http://marmo.theloyaltypartner.co.in/" 
          image="Marmo.jpg" // Replace with actual image path
        />
      </div>
    </Section>
  </>
);

export default Projects;
