import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      {/* Logo on the left linking to the home page */}
      <div className="logo">
        <Link href="/">
           <span className="logo-link">JAVED</span>
        </Link>
      </div>

      {/* Navigation items on the right */}
      <ul className="nav-links">
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
        <li>
          <Link href="/tools">Tools</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
