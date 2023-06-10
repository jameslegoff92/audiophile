//Components
import Card from './Card';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

//SCSS
import scss from './Hero.module.scss';

function Hero() {
  let hero = `${scss["hero"]}`;
  let container = `${scss["hero__container"]}`;
  let wrapper = `${scss["hero__wrapper"]}`;
  let subtitle = `${scss["hero__subtitle"]}`;
  let heading = `${scss["hero__heading"]}`;
  let text = `${scss["hero__text"]}`;

  return (
    <div className={hero}>
      <div className={container} >
        <Card className={wrapper}>
          <Typography styles={subtitle} style={{ opacity: 0.5 }}  type={"subtitle"}>
            new product
          </Typography>
          <Typography styles={heading} type="h1">
            xx99 mark ii headphones
          </Typography>
          <Typography styles={text} style={{ opacity: 0.75 }} type="p" color="light">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </Typography>
          <Button type="dark" >
            see product
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Hero;
