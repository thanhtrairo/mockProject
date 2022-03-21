import React, { useState } from "react";
import "./banner.scss";
import { ImagesData } from "./ImagesData";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import img1 from "./img/slide1.jpg";
import img2 from "./img/slide2.jpg";
import img3 from "./img/slide3.jpg";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
  ];
  return (
    <div className="banner">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={item.imgSrc}
                style={{ width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
