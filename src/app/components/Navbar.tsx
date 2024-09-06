// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import styles from "../components/Navbar.module.css"; // Import the CSS module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/" className={styles.a}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about" className={styles.a}>About</Link>
        </li>
        <li className={styles.li}>
          <Link href="/skills" className={styles.a}>Skills</Link>
        </li>
        <li className={styles.li}>
          <Link href="/experience" className={styles.a}>Experience</Link>
        </li>
        <li className={styles.li}>
          <Link href="/projects" className={styles.a}>Projects</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact" className={styles.a}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
