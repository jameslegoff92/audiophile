import React from 'react';
import { ComponentProps } from './../interfaces';

//CSS
import buttonStyles from './Button.module.scss';

//IMAGES
import iconArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";

/**
 * <Button />
 * 
 * This component is responsible for displaying the different possible button styles for this project.
 * 
 * 
 * @param {string} type - Determines the type of button styling
 *                        Possible values: 'light', 'dark', 'alt'
 * @param {object} style - Sets inline styling css for the component.
 * @param {string} styles [parentCSS['card__heading']] - Adds css class styling from a parent component.
 * @returns - A jsx element
 * 
 * @example
 * <Buttton 
 *  type="light"
 *  styles={parentCSS}
 * />
 */

interface ButtonProps extends ComponentProps {
  type: string,
}

function Button ({ children, type, style, styles }:ButtonProps) {

  let classes = `${styles} ${buttonStyles.btn}`;

  let arrowRightIcon = <img className={buttonStyles['btn__icon']} src={iconArrowRight} alt=" " />;

  switch (type) {
    case 'light':
      classes += ` ${buttonStyles['btn--light']}`;
      break;
    case 'dark':
      classes += ` ${buttonStyles['btn--dark']}`;
      break;
    case 'alt': 
      classes += ` ${buttonStyles['btn--alt']}`;
      break;
    default: 

  }

  return (
    <button style={style} className={classes} >
      {children}
      {type === "alt" && arrowRightIcon }
    </button>
    );
}

export default Button;