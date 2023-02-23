import React from "react";
import Carousel from "react-bootstrap/Carousel";
import primer from "./../../assets/1.png";
import segundo from "./../../assets/2.png";
import tercero from "./../../assets/3.png";
import cuarto from "./../../assets/4.png";
import quinto from "./../../assets/5.png";
import sexto from "./../../assets/6.png";
import siete from "./../../assets/7.png";
import ocho from "./../../assets/8.png";

function Card() {
  return (
    <Carousel class="slide">
      <Carousel.Item interval={3000}>
        <img loading="lazy" className="d-block w-100" src={primer} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img loading="lazy" className="d-block w-100" src={segundo} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img loading="lazy" className="d-block w-100" src={tercero} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img loading="lazy" className="d-block w-100" src={cuarto} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img loading="lazy" className="d-block w-100" src={quinto} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img loading="lazy" className="d-block w-100" src={sexto} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img loading="lazy" className="d-block w-100" src={siete} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img loading="lazy" className="d-block w-100" src={ocho} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Card;
