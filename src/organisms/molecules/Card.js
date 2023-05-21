function Card({ children, style }) {

  const styles = `${style}` ;

  return <div className={styles} >{children}</div>;
}

export default Card;
