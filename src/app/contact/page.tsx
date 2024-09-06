import Navbar from "../components/Navbar"; // Update path if needed
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <>
    <Navbar /> {/* Add the Navbar component here */}
    <section id="contact" className="section contact">
      <ContactForm />
    </section>
  </>
);

export default Contact;
