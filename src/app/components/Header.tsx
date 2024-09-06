import Image from "next/image";
import styles from "../components/Header.module.css"; // Ensure the path is correct

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.textSection}>
        <h1>Javed Saifi</h1>
        <p>MERN Stack Developer | Faridabad, Haryana, India</p>
        <p>+91-8527019853 | saifijaved616@gmail.com</p>
      </div>
      <div className={styles.imageSection}>
        <Image
          src="/javed.png"
          alt="Javed Saifi"
          width={300} // Increased width for larger size
          height={200} // Adjusted height for rectangle
          className={styles.profilePic}
        />
      </div>
    </div>
  </header>
);

export default Header;
