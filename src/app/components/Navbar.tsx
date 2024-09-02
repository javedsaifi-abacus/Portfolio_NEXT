// /src/components/Navbar.tsx
import Link from "next/link";
import styles from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="#about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#skills">Skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#tools">Tools</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#experience">Experience</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#education">Education</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
