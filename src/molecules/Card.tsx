import React from 'react';

import scss from './Card.module.scss';

/**
 * <Card />
 * 
 * This component is used to wrap a content block.
 *
 * @param {string} key - Adds the id of the data set as a key to the component. 
 * @param {string} className - Adds css class styling from a parent component.
 * @param {obj} style - Adds inline css styling.    
 * 
 * @returns React.JSX.Element
 * 
 * @example
 * <Card/>
 */

interface CardProps {
  key?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ key, children, className, style }):React.JSX.Element => {

  const classes = `${className} ${scss}` ;

  return <div key={key} style={style} className={classes} >{children}</div>;
}

export default Card;
