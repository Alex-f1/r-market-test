import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import HeroData from "../../data/hero-data.json";

import "./Hero.scss"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

type THero = {
  id: number,
  img: string,
}

function Hero() {

  const imgSrc: THero[] = HeroData;

  return (
    <div className="hero pb-10">
      <div className="hero__container">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="hero__slider h-80 sm:h-96 md:h-110 2xl:h-120"
        >
        {
          imgSrc.map((item) => 
            <SwiperSlide key={item.id}>
              <img className="h-full w-full object-cover object-center" src={item.img} alt="" />
            </SwiperSlide>
          )
        }
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;