'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ServicesMainBlock = () => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null); // Track selected service

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/services.json');
      const data = await res.json();
      setServices(data);
    };
    fetchData();
  }, []);

  const closeModal = () => setActiveService(null);

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container">
          <div className="h5 text-white text-center mb-10 mx-auto max-w-[900px]">
            Triple H Contracts & Hire is your trusted partner for comprehensive outdoor and construction solutions across Staffordshire and beyond. With a reputation built on craftsmanship, reliability, and versatility, we offer a broad portfolio of services, including:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 group fade-in"
                data-delay={(index * 0.3).toFixed(1)}
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
                <button
                  className="button button--primary"
                  onClick={() => setActiveService(service)}
                >
                  Find Out More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeService && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-xl p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-4 right-4 text-primary z-10 text-3xl font-bold cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="relative w-full h-[380px] mb-4 rounded-lg overflow-hidden">
              <Image
                src={`/services/${activeService.image}`}
                alt={activeService.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">{activeService.title}</h2>

            <div
              className="text-gray-800 space-y-4"
              dangerouslySetInnerHTML={{ __html: activeService.main_description }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesMainBlock;