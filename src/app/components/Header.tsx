import Image from "next/image";

const Header = () => (
  <header className="header">
    <Image
      src="/javed.png"
      alt="Javed Saifi"
      width={150}
      height={150}
      className="profile-pic"
    />
    <h1>Javed Saifi</h1>
    <p>MERN Stack Developer | Faridabad, Haryana, India</p>
    <p>+91-8527019853 | saifijaved616@gmail.com</p>
  </header>
);

export default Header;
