import scss from './Card.module.scss';

function Card({ children, styles, style }) {

  const classes = `${styles} ${scss}` ;

  return <div style={style} className={classes} >{children}</div>;
}

export default Card;
