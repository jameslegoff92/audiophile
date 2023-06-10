//COMOPONENTS
import List from '../atoms/List';
import Category from '../molecules/Category';


//CSS
import categoryListStyles from './CategoryList.module.scss';


//IMAGES
import headphoneImgMobile  from './../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.png';
import headphoneImgTablet  from './../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.png';
import headphoneImgDesktop  from './../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.png';

import earphoneImgMobile  from './../assets/product-yx1-earphones/mobile/image-category-page-preview.png';
import earphoneImgTablet  from './../assets/product-yx1-earphones/tablet/image-category-page-preview.png';
import earphoneImgDesktop  from './../assets/product-yx1-earphones/desktop/image-category-page-preview.png';

import speakerImgMobile  from './../assets/product-zx7-speaker/mobile/image-category-page-preview.png';
import speakerImgTablet  from './../assets/product-zx7-speaker/tablet/image-category-page-preview.png';
import speakerImgDesktop  from './../assets/product-zx7-speaker/desktop/image-category-page-preview.png';



function CategoryList () {

  let categoryList = `${categoryListStyles['category-list']}`;
  let categoryItemStyle = `${categoryListStyles['category-list__item']}`;

  const categoryData = [
    {
      id: "1",
      heading: "headphones",
      img: {
        mobile: headphoneImgMobile,
        tablet: headphoneImgTablet,
        desktop: headphoneImgDesktop,
        alt: "headphones"
      }
    },
    {
      id: "2",
      heading: "speakers",
      img: {
        mobile: speakerImgMobile,
        tablet: speakerImgTablet,
        desktop: speakerImgDesktop,
        alt: 'speakers'
      }
    },
    {
      id: "3",
      heading: "earphones",
      img: {
        mobile: earphoneImgMobile,
        tablet: earphoneImgTablet,
        desktop: earphoneImgDesktop,
        alt: 'earphones'
      }
    },
  ]

  return (  
    <div className={categoryList} >
      <List data={categoryData} component={Category} className={categoryItemStyle} />
    </div>
  );
}

export default CategoryList ;