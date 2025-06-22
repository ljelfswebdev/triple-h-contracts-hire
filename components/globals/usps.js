'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { TrafficCone, Tractor, Pickaxe, Truck } from 'lucide-react';

import 'swiper/css';

const iconMap = {
  'traffic-cone': TrafficCone,
  'tractor': Tractor,
  'pickaxe': Pickaxe,
  'truck' : Truck,
};

const Usps = () => {
  const usps = [
    { icon: 'truck', text: 'Uk Nationwide' },
    { icon: 'traffic-cone', text: 'Reliable' },
    { icon: 'tractor', text: 'Resourceful' },
    { icon: 'pickaxe', text: 'Ready For Anything' },
    
  ];

  return (
    <section className="py-4 bg-primary">
      <div className="container">
        <div className="mx-auto max-w-[900px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {usps.map((usp, index) => {
            const Icon = iconMap[usp.icon];
            if (!Icon) return null;

            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-3 text-white">
                  <Icon size={24} />
                  <span className="h6">{usp.text}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default Usps;