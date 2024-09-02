// /src/components/ContactForm.tsx
const ContactForm = () => (
  <section id="contact" className="section contact">
    <h2>Contact Me</h2>
    <form action="https://formspree.io/f/your-form-id" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea
        name="message"
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default ContactForm;
