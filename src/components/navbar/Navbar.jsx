import logo from "../../helper/logo.png"

const Navbar = () => {
  return (
    <section>
      <a href="#Horoscope">Horoscope</a>
      <a href="#Daily">Daily</a>
      <a href="#Tarot">Tarot</a>
      <a href="#Article">Article</a>
      <a href="#Contact">Contact</a>
      <div>
        <img src={logo} alt="" width={"50px"}/>
      </div>
    </section>
  );
};
export default Navbar;
