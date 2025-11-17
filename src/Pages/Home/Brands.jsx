import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/brands/amazon.png";
import img2 from "../../assets/brands/amazon_vector.png";
import img3 from "../../assets/brands/casio.png";
import img4 from "../../assets/brands/moonstar.png";
import img5 from "../../assets/brands/randstad.png";
import img6 from "../../assets/brands/star.png";
import img7 from "../../assets/brands/start_people.png";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div className="w-full container mx-auto py-10">
      <h1 className="text-center text-2xl font-semibold my-8">
        We've helped thousands of sales teams
      </h1>
      <Swiper
       modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        centeredSlides={true}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >

        <SwiperSlide className="rounded-lg">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg">
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg">
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg">
          <img src={img7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
