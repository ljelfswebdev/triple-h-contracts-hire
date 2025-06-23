'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/team.json');
      const data = await res.json();
      setTeam(data);
    };
    fetchData();
  }, []);

  return (
    <section className="pb-20 bg-black">
      <div className="container">
        <div className="flex flex-col gap-8 max-w-full [&_.swiper]:!pb-10 [&_.swiper]:max-w-full [&_.swiper-slide]:!h-auto">
          <div className="h2 text-white">Our Team</div>

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
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col items-center text-center gap-2 group fade-in"
                  data-delay={(index * 0.2).toFixed(1)}
                >
                  <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={`/team/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover transition-all group-hover:scale-105 mb-2"
                    />
                  </div>
                  <div className="text-white font-semibold h5">{member.name}</div>
                  <div className="text-primary h6">{member.job_title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;