import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Newarrivals from './Newarrivals';

function Card1() {
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items:4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const  productData =[
    {
        id:1,
        imageurl:"https://starlet.pk/cdn/shop/articles/457096566_816328697331693_5537305557894720667_n_70e662a9-a9f4-4b2b-8ba7-3217aa6dd055.jpg?v=1740545518",
      name:"sports sneakers",
      price: "Rs 2000 /-",
      descript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
           {
        id:2,
        imageurl:"https://m.media-amazon.com/images/I/71QqH2D8ecL._AC_SY695_.jpg",
      name:"Rhinestone Flat shoe",
      price: "Rs 4000 /-",
      descript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },   {
        id:3,
        imageurl:"https://www.hopkicks.pk/image/cache/catalog/2025/Aug-25/Tahir-Local-Order/12/1-500x500.jpg",
      name:"Running Shoes ",
      price: "Rs 3000 /-",
      descript:"Lorem ipsum dolor sit ametconsectetur adipisicing elit."
        },   {
        id:4,
        imageurl:"https://loomedcharm.in/wp-content/uploads/2025/06/YSL-Opyum.webp",
       name:" YSL HEELS ",
        price: "Rs 8000 /-",
      descript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },   {
        id:5,
        imageurl:"https://i5.walmartimages.com/asr/b91b09e6-989c-4dc8-857e-3494d0f9a046.fa13cb85bfd37ddbbaac38632e575da4.jpeg",
      name:" Sneaker for Men" ,
      price: "Rs 1500 /-",
      descript:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
] 
const product =  productData.map(item =>(
  <Newarrivals 
  name={item.name} 
  Url={item.imageurl}
  price={item.price}
  descript={item.descript}/> 
))
  return (
    <div className='bg-[#121212] py-8 px-6'>
        <h1 className='text-3xl font-semibold text-[#e6d00e] mb-6  text-center'>New Arrivals soon</h1>
        <hr className="w-26 border-0 h-1 mx-auto bg-[#e6d00e]  mb-4" />
<Carousel responsive={responsive} infinite autoPlay interval={1000}>

    {product}</Carousel>
    </div>
  )
}

export default Card1
