import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/banner/banner1.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <Carousel
      className="mt-5"
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div className="relative">
        <img src={img1} />

        {/* Button container */}
        <div className="absolute hidden lg:block lg:top-120 lg:left-22 transform -translate-y-1/2 space-x-3">
          <button className="rounded-full btn bg-primary px-4 py-2 shadow ">
            Track Your Parcel <GoArrowRight></GoArrowRight>
          </button>

          <button className="rounded-md btn bg-white text-black px-4 py-2">
            Be A Rider
          </button>
        </div>
      </div>
      <div>
        <img src={img2} />
        <div className="absolute lg:top-120 lg:left-22 transform -translate-y-1/2 space-x-3">
          <button className="rounded-full btn bg-primary px-4 py-2 shadow ">
            Track Your Parcel <GoArrowRight></GoArrowRight>
          </button>

          <button className="rounded-md btn bg-white text-black px-4 py-2">
            Be A Rider
          </button>
        </div>
      </div>
      <div>
        <img src={img3} />
        <div className="absolute lg:top-120 lg:left-22 transform -translate-y-1/2 space-x-3">
          <button className="rounded-full btn bg-primary px-4 py-2 shadow ">
            Track Your Parcel <GoArrowRight></GoArrowRight>
          </button>

          <button className="rounded-md btn bg-white text-black px-4 py-2">
            Be A Rider
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
