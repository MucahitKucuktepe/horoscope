import logo from "../../helper/logo.png";
import "../../scss/navbar.scss";

const Navbar = () => {
  return (
    <section className="nav_bar">
      <div>
        <ul>
          <li>
            <a href="#Horoscope">Horoscope</a>
          </li>
          <li>
            <a href="#Daily">Daily</a>
          </li>
          <li>
            <a href="#Tarot">Tarot</a>
          </li>
          <li>
            <a href="#Article">Article</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <img src={logo} alt="" width={"50px"} />
    </section>
  );
};
export default Navbar;
