"use client"; // This directive marks the component as a Client Component

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles
import styles from './ContactForm.module.css'; // Import the CSS module

const ContactForm = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: "top-center",
          autoClose: 2000,
          onClose: () => {
            router.push('/');
          },
        });
      } else {
        toast.error('Failed to send message. Please try again.', {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="a8f92459-6c6f-4139-856f-a63b451fe731" />
          
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message..."
              required
              className={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>Submit</button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactForm;
