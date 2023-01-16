import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import HeroData from "../../data/hero-data.json";

import "./Hero.scss"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IHero {
  id: number,
  img: string,
}

const heroItems: IHero[] = HeroData;

function Hero() {

  const [imgSrc, setImgSrc] = useState(heroItems);

  return (
    <div className="hero">
      <div className="hero__container">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="hero__slider h-130"
        >
        {
          imgSrc.map((item) => 
            <SwiperSlide key={item.id}>
              <img src={item.img} />
            </SwiperSlide>
          )
        }
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;