import s from "./index.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const About = () => {
  return (
    <main>
      <Swiper
        pagination={{ clickable: true }}
        breakpoints={{
          10: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
            
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={40}
    
        navigation={{
          nextEl: ".swiper-button-left",
          prevEl: ".swiper-button-right",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className={s.mobile_button}>
        <button className="swiper-button-left">назад</button>
        <button className="swiper-button-right">вперед</button>
      </div>
    </main>
  );
};

export default About;
