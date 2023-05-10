//Components
import Nav from "./molecules/Nav";
import MobileNav from "./molecules/MobileNav";

//SCSS Files
import scss from "./Header.module.scss";

//Images
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";

function Header() {
  return (
    <header className={scss.header}>
      <div className={scss.header__navIcon} >
        <MobileNav />
      </div>

      <img src={logo} alt="Company Logo" />

      <Nav />

      <img className={scss.header__cart} src={cart} alt="Store Shopping Cart" />
    </header>
  );
}

export default Header;
