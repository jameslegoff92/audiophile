import scss from  './MobileNav.module.scss';
import hamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

function MobileNav() {

  const hiddenClass = scss.hidden;
  return (
    <>
      <img className={hiddenClass} src={hamburgerIcon} alt="" />
    </>
  )
}

export default MobileNav;