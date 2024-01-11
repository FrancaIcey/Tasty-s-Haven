import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";
import Buttons from "../component/Buttons/Buttons";

export default function Swip() {
  const numberList = [1, 2, 3, 4];
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Set the time interval between slides in milliseconds
          disableOnInteraction: true, // Autoplay continues even when user interacts with slides
        }}
      >
        {/* {ImageList.map((data, index) => (
          <SwiperSlide key={index} >
            style={{ position: "relative" }}
            <img
              src={data.strMealThumb}
              alt={`Slide ${index}`}
              onClick={(e) => {
                idName(data.strMeal);
                detailDisplay(data.strInstructions);
              }}
              style={{ position: "relative" }}
            />
          </SwiperSlide>
        ))} */}
        {numberList.map((number, index) => (
          <SwiperSlide key={index} style={{ position: "relative" }}>
            <p style={{ fontSize: "2em", textAlign: "center" }}>{number}</p>
          </SwiperSlide>
        ))}
        <div
          style={{
            position: "absolute",
            marginTop: "-32%",
            marginLeft: "25%",
            fontSize: "60px",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.1em",
            }}
          >
            <h3> Flavor's for all delight</h3>
            <Buttons NameBtn={"View Menu"} width={"15vw"} />
          </div>
        </div>
      </Swiper>
      {/* </Swiper> */}
    </>
  );
}
