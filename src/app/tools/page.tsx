import Section from "../components/Section";
import ContentItem from "../components/ContentItem";

const Tools = () => (
  <>
    <Section id="tools" title="Tools & Software">
      <div className="content-list">

        {/* Development Tools */}
        <ContentItem 
          title="Development Tools" 
          details={[
            "<strong>VS Code:</strong> A lightweight yet powerful code editor with rich extension support.",
            "<strong>Putty:</strong> A popular SSH and telnet client for remote access to servers.",
            "<strong>XAMPP:</strong> A free and open-source cross-platform web server solution stack package."
          ]}
          link="#" 
        />
        
        {/* API Tools */} 
        <ContentItem 
          title="API Tools" 
          details={[ 
            "<strong>Postman:</strong> An API client for testing and documenting APIs.",
            "<strong>Insomnia:</strong> A powerful REST API client with a clean interface."
          ]}
          link="#" 
        />
        
        {/* File Transfer Tools */}
        <ContentItem 
          title="File Transfer Tools" 
          details={[
            "<strong>FileZilla:</strong> A free FTP solution for file transfer and management.",
            "<strong>WinSCP:</strong> An open-source SFTP client for Windows."
          ]}
          link="#" 
        />

        {/* Database Tools */}
        <ContentItem 
          title="Database Tools" 
          details={[
            "<strong>DBeaver:</strong> A universal database tool for developers and database administrators.",
            "<strong>phpMyAdmin:</strong> A web-based tool for managing MySQL databases.",
            "<strong>MongoDB:</strong> A NoSQL database for high-volume data storage."
          ]}
          link="#" 
        />
        
      </div>
    </Section>
  </>
);

export default Tools;
