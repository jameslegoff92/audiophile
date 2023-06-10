//COMPONENTS
import Card from './Card';
import Typography from './../atoms/Typography';
import Button from './../atoms/Button';

//SCSS
import scss from './Category.module.scss';


/**
 * <Category>
 * 
 * A call to action component to direct a user to a product category
 * 
 * @component 
 * @param {object} data - Displays the heading of the product category and determines the local css class that will be applied to the component. 
 * @param {string} styles - Adds css class styling from a parent component. 
 * 
 * @returns A composite component
 * 
 * @example 
 */

function Category ({ data, className }:any) {

  let category = `${className} ${scss['category']}`;
  let imgStyle;

  switch (data.heading) {
    case 'headphones':
      imgStyle = `${scss['category__img-headphones']}`;
      break;
    case 'speakers':
      imgStyle = `${scss['category__img-speakers']}`;
      break;
    case 'earphones':
      imgStyle = `${scss['category__img-earphones']}`;
      break;
    default:
  }



  return (  
    <Card className={category} >
      <picture>
        <source srcSet={data.img.desktop} media="(min-width: 1200px)" />
        <source srcSet={data.img.tablet} media="(min-width: 1200px)" />
        <img  className={imgStyle} src={data.img.mobile} alt={data.img.alt}/>
      </picture>
      <Typography type="h5" >
        {data.heading}
      </Typography>
      <Button type="alt">
        shop
      </Button>
    </Card>
  );
}

export default Category ;