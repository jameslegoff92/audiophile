import React from "react";

//COMPONENTS
import Button from "../atoms/Button";
import Card from "./Card";
import Typography from "../atoms/Typography";
import Picture from "../atoms/Picture";

//CSS
import styles from "./SpeakerCta.module.scss";

//IMAGES
import speakerImgDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import speakerImgTablet from "../assets/home/tablet/image-speaker-zx9.png";
import speakerImgMobile from "../assets/home/mobile/image-speaker-zx9.png";

const SpeakerCta = () => {
  const speakerCta = `${styles["speaker-cta"]}`;
  const containerCSS = `${styles["speaker-cta__container"]}`;
  const imgCSS = `${styles["speaker-cta__img"]}`;
  const cardCSS = `${styles["speaker-cta__card"]}`;
  const titleCSS = `${styles["speaker-cta__title"]}`;
  const textCSS = `${styles["speaker-cta__text"]}`;
  const buttonCSS = `${styles["speaker-cta__btn"]}`;

  return (
    <Card style={{ borderRadius: "8px" }} className={speakerCta}>
      <div className={containerCSS}>
        <Picture
          className={imgCSS}
          src={speakerImgMobile}
          alt="The ZX9 speaker product"
          mdScreen="768px"
          mdImg={speakerImgTablet}
          lgScreen="1024px"
          lgImg={speakerImgDesktop}
        />
        <Card className={cardCSS}>
          <Typography className={titleCSS} type="h1">
            ZX9 <br /> Speaker{" "}
          </Typography>
          <Typography className={textCSS} type="p" color="light">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </Typography>
          <Button className={buttonCSS} type="black">
            see product
          </Button>
        </Card>
      </div>
    </Card>
  );
};

export default SpeakerCta;
