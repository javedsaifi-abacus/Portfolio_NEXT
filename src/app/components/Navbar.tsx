import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image for optimized images

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      {/* Logo on the left linking to the home page */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/logojaved.png" // Replace with the path to your logo image
            alt="JAVED Logo"
            width={30} // Adjust width as needed
            height={1} // Adjust height as needed
            className="logo-img"
          />
        </Link>
      </div>

      {/* Navigation items on the right */}
      <ul className="nav-links">
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
        {/* <li>
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
