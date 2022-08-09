import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="header__logo" />
    </header>
  );
};

export default Header;
