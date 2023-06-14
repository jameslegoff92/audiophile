import React from "react";

//INTERFACES
import { ComponentProps } from "../interfaces";

interface PictureProps extends ComponentProps {
  src: string;
  alt: string;
  className: string;
  smImg?: string;
  mdImg?: string;
  lgImg?: string;
  smScreen?: string;
  mdScreen?: string;
  lgScreen?: string;
}

const Picture: React.FC<PictureProps> = ({ src, alt, className, smImg, mdImg, lgImg, smScreen, mdScreen, lgScreen }) => {
  return (
    <picture>
      <source media={`(min-width: ${lgScreen}`} srcSet={lgImg} />
      <source media={`(min-width: ${mdScreen}`} srcSet={mdImg} />
      <img className={className} src={src} alt={alt} />
    </picture>
  );
};

export default Picture;
