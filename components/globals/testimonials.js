'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Star = () => (
  <svg
    className="w-5 h-5 text-primary"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.164 3.584a1 1 0 00.95.69h3.767c.969 0 1.371 1.24.588 1.81l-3.047 2.213a1 1 0 00-.364 1.118l1.164 3.584c.3.921-.755 1.688-1.54 1.118l-3.047-2.213a1 1 0 00-1.176 0L5.23 17.044c-.784.57-1.838-.197-1.539-1.118l1.164-3.584a1 1 0 00-.364-1.118L1.443 9.01c-.783-.57-.38-1.81.588-1.81h3.767a1 1 0 00.95-.69l1.164-3.584z" />
  </svg>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/testimonials.json');
      const data = await res.json();
      setTestimonials(data);
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container">
      <div className="flex flex-col gap-8 max-w-full [&_.swiper]:max-w-full [&_.swiper-slide]:!h-auto [&_.swiper]:!pb-10">
        
            <div className="h2 text-white">Testimonials</div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white p-8 rounded-md flex flex-col gap-4 h-full fade-in"
                data-delay={(index * 0.05).toFixed(1)} // Staggered delay
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="text-sm text-black">{item.testimonial}</p>
                <div className="text-primary font-bold mt-auto">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;