"use client"
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

//Import Needed Images
import adidas from "../../../public/images/addidas.png";
import binance from "../../../public/images/binance.png";
import ecolab from "../../../public/images/ecolab.png";
import konami from "../../../public/images/konami.png";
import malta from "../../../public/images/malta.png";
import remington from "../../../public/images/remington.png";
import revoult from "../../../public/images/revoult.png";
import mainLogo from "../../../public/images/supportLogo.png";

const Partnership = () => {
  return (
    <main>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 6, // Show 3 slides per view from 768px and upward
          },
        }}
      ><SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={mainLogo} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={revoult} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={binance} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={ecolab} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={konami} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={malta} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={remington} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={adidas} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={mainLogo} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={revoult} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={binance} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={ecolab} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={konami} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={malta} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={adidas} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <Image  className="w-12 sm:w-14 md:w-16 xl:w-20" src={remington} alt="Logo" />
      </SwiperSlide>
      </Swiper>
      

      <h4 className="text-blue py-10 text-center text-sm font-bold md:text-base">
        Trusted By
      </h4>
    </main>
  );
};

export default Partnership;
