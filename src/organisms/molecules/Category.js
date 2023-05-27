//COMPONENTS
import Card from './Card';
import Typography from './atoms/Typography';

//SCSS
import cardStyles from './Card.module.scss';
import scss from './Category.module.scss';

//IMAGES
import headphoneImgMobile  from './../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg';

function Category () {
  return (  
    <Card>
      <img style={{height: "50px", width: "50px" }} src={headphoneImgMobile} alt="" />
      <Typography type="h5" >
        headphones
      </Typography>
    </Card>
  );
}

export default Category ;