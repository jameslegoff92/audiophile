import scss from './Nav.module.scss';

function Nav() {

  const hiddenClass = scss.hidden;

  return (
    <nav className={hiddenClass} >
      <ul>
        <li>
          <a href="/"> home </a>
        </li>
        <li>
          <a href="/"> headphones </a>
        </li>
        <li>
          <a href="/"> speakers </a>
        </li>
        <li>
          <a href="/"> earphones </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;