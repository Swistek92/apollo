import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import aa from "@/public/moon.jpeg";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
      <Carousel.Item>
        <Image alt='asd' width={100} height={100} src={aa} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
