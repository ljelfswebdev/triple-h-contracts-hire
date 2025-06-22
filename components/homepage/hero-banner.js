'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HeroBanner = () => {
  const images = ['1.jpg', '2.png', '3.jpg'];

  return (
<section
  className="relative h-[600px] overflow-hidden [&_.swiper]:!absolute [&_.swiper]:top-0 [&_.swiper]:left-0 [&_.swiper]:h-full [&_.swiper]:w-full"
>
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    loop={true}
    pagination={{ clickable: true }}
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="absolute top-0 left-0 h-full w-full bg-black/70 z-[1]"></div>
        <Image
          src={`/hero-banner/${img}`}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className="zoom"
          priority={index === 0}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="relative z-[2] h-full flex items-center justify-center">
    <div className="container">
      <div className="flex flex-col gap-2 items-center justify-center text-white text-center">
        <h1>Triple H Contracts & Hire</h1>
        <span className="h3 fade-in" data-delay="0">Reliable</span>
        <span className="h3 fade-in" data-delay="0.5">Resourceful</span>
        <span className="h3 fade-in" data-delay="1">Ready For Anything</span>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroBanner;