import { FunctionComponent } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImage } from "../../../data";

const CarouselCasting: FunctionComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="pb-2 mt-[-10px] w-[100%]">
      {CarouselImage.map((img, index) => (
        <img
          src={img.src}
          alt={`img ${index}`}
          className=" h-[200px] w-screen object-cover"
        />
      ))}
    </Slider>
  );
};

export default CarouselCasting;
