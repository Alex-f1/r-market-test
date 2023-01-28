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
      <div className="hero__container relative">
        
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
          <div className="absolute flex justify-center text-center items-center w-full h-full bg-black/60 top-0 left-0 z-50">
            <h1 className="text-white flex flex-col tracking-widest">
              <span className="text-8xl mb-7">[ R-Market ]</span>
              <br />
              <span className="text-4xl font-light">Большой выбор товаров <br /> по доступным ценам</span>
            </h1>
            <div className=" flex justify-center items-center border border-white rounded-lg w-4 h-8 absolute bottom-20 left-2/4 -translate-x-2/4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="stroke-white w-4 h-4 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
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