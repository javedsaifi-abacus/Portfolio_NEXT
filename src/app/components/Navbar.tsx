import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/" className="a">Home</Link>
        </li>
        <li>
          <Link href="/about" className="a">About</Link>
        </li>
        <li>
          <Link href="/skills" className="a">Skills</Link>
        </li>
        <li>
          <Link href="/experience" className="a">Experience</Link>
        </li>
        <li>
          <Link href="/projects" className="a">Projects</Link>
        </li>
        <li>
          <Link href="/education" className="a">Education</Link>
        </li>
        <li>
          <Link href="/tools" className="a">Tools</Link> {/* New Tools Link */}
        </li>
        <li>
          <Link href="/contact" className="a">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
