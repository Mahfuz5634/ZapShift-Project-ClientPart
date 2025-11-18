import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/brands/amazon.png";
import img2 from "../../assets/brands/amazon_vector.png";
import img3 from "../../assets/brands/casio.png";
import img4 from "../../assets/brands/moonstar.png";
import img5 from "../../assets/brands/randstad.png";
import img6 from "../../assets/brands/star.png";
import img7 from "../../assets/brands/start_people.png";

const Brands = () => {
  return (
    <div className="w-full containe mx-auto py-10">
      <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-bold my-8">
        We've helped thousands of sales teams
      </h1>

      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-20">
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5  w-auto"
            src={img1}
            alt="brand"
          />
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5  w-auto"
            src={img2}
            alt="brand"
          />
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5  w-auto"
            src={img3}
            alt="brand"
          />
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5 w-auto"
            src={img4}
            alt="brand"
          />
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5  w-auto"
            src={img5}
            alt="brand"
          />
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5  w-auto"
            src={img6}
            alt="brand"
          />
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-5  w-auto"
            src={img7}
            alt="brand"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
