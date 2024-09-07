import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faBriefcase, faGraduationCap, faTools, faDownload } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      {/* Logo on the left linking to the home page */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logojaved.png"
            alt="JAVED Logo"
            width={30}
            height={30}
            className={styles["logo-img"]}
          />
        </Link>
      </div>

      {/* Navigation items on the right */}
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/skills">
            <FontAwesomeIcon icon={faStar} className={styles["nav-icon"]} />
            Skills
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <FontAwesomeIcon icon={faBriefcase} className={styles["nav-icon"]} />
            Experience
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <FontAwesomeIcon icon={faHome} className={styles["nav-icon"]} />
            Projects
          </Link>
        </li>
        <li>
          <Link href="/education">
            <FontAwesomeIcon icon={faGraduationCap} className={styles["nav-icon"]} />
            Education
          </Link>
        </li>
        <li>
          <Link href="/tools">
            <FontAwesomeIcon icon={faTools} className={styles["nav-icon"]} />
            Tools
          </Link>
        </li>
        <li>
          <a href="/resume.pdf" download className={styles["cv-link"]}>
            <FontAwesomeIcon icon={faDownload} className={styles["nav-icon"]} />
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
