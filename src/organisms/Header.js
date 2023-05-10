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
    <header>
      <div className={scss.header}>
        <div className={scss.header__navIcon}>
          <MobileNav />
        </div>

        <img className={scss.header__logo} src={logo} alt="Company Logo" />

        <Nav />

        <img className={scss.header__cart} src={cart} alt="Store Shopping Cart" />
      </div>
      
    </header>
  );
}

export default Header;
