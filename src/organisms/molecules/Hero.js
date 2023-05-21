//Components
import Card from "./Card";
import Typography from "./atoms/Typography";

//SCSS
import scss from "./Hero.module.scss";

function Hero() {
  let hero = `${scss["hero"]}`;
  let wrapper = `${scss["hero__wrapper"]}`;
  let heading = `${scss["hero__heading"]}`;
  let text = `${scss["hero__text"]}`;

  return (
    <div className={hero}>
      <Card style={wrapper}>
        <Typography styles={heading} type="h1">xx99 mark ii headphones</Typography>
        <Typography styles={text} type="p" color="light">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </Typography>
        <button>see product</button>
      </Card>
    </div>
  );
}

export default Hero;
