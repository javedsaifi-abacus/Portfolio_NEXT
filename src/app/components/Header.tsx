import Image from "next/image";
import styles from "../components/Header.module.css"; // Ensure the path is correct

const Header: React.FC = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>JAVED SAIFI</h1>
          <p className={styles.subtitle}>Innovative MERN Stack Developer</p>
          <p className={styles.description}>
            Passionate about creating dynamic and efficient web applications. Leveraging cutting-edge technologies to build scalable solutions and drive digital transformation.
          </p>
          <p className={styles.location}>Based in Faridabad, Haryana, India</p>
          <p className={styles.contact}>+91-8527019853 | saifijaved616@gmail.com</p>
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
  </div>
);

export default Header;
