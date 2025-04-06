import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Step02 = () => {
  return (
    <>
    <div className='w-full h-screen'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChangeTransitionStart={
            (swiper)=>{
                console.log(swiper);
                console.log(`현재 슬라이드 : ${swiper.activeIndex + 1}`);
                const currentSlide = swiper.slides[swiper.activeIndex];
                if(swiper.activeIndex === 3){
                    currentSlide.style.backgroundColor = 'red';
                }
            }
        }
        onSlideChangeTransitionEnd={
            (swiper)=>{
                console.log(swiper);
                console.log(`현재 슬라이드 : ${swiper.activeIndex + 1}`);
                const currentSlide = swiper.slides[swiper.activeIndex];
                if(swiper.activeIndex === 2){
                    currentSlide.style.backgroundColor = 'yellow';
                }
            }
        }
      >
        <SwiperSlide>slideeee</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>      
    </>
  );
}

export default Step02