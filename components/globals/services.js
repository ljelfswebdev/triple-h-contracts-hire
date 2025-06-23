'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/services.json');
      const data = await res.json();
      setServices(data);
    };
    fetchData();
  }, []);

  return (
    <section className="pt-10 pb-20 bg-black">
      <div className="container">
        <div className="flex flex-col gap-8 max-w-full [&_.swiper]:!pb-10 [&_.swiper]:max-w-full [&_.swiper-slide]:!h-auto">
          <div className="flex gap-4 justify-between flex-wrap items-center">
            <div className="h2 text-white">Our Services</div>
            <Link href="/services" className="button button--primary">
              View All Services
            </Link>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col gap-3 group fade-in"
                data-delay={(index * 0.2).toFixed(1)} // Increment delay by 0.3s
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={`/services/${service.image}`}
                    alt={service.title}
                    fill
                    className="object-cover transition-all group-hover:scale-110"
                  />
                </div>
                <div className="text-white h4 font-semibold">{service.title}</div>
                <p className="text-white">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;