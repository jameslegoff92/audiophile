import scss from './Nav.module.scss';

function Nav() {

  const hiddenClass = scss.hidden;

  return (
    <nav className={hiddenClass} >
      <ul className={scss.nav} > 
        <li>
          <a className={scss.navlink}  href="/"> home </a>
        </li>
        <li>
          <a className={scss.navlink} href="/"> headphones </a>
        </li>
        <li>
          <a className={scss.navlink} href="/"> speakers </a>
        </li>
        <li>
          <a className={scss.navlink} href="/"> earphones </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;