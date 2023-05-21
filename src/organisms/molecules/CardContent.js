import Typography from "./atoms/Typography";

//SCSS
import scss from "./CardContent.module.scss";

function CardContent() {
  return (
    <div>
      <Typography type="h1">XX99 Mark II Headphones</Typography>
      <Typography type="p" color="light">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music
        enthusiast.
      </Typography>
    </div>
  );
}

export default CardContent;
