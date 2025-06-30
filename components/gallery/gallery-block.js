'use client';

import { useState } from 'react';
import Image from 'next/image';

const GalleryBlock = () => {
  const images = [
    '1.png', '2.jpg', '3.jpg', '4.jpg', '5.png', '6.jpeg',
    '2.jpg', '3.jpg', '4.jpg', '5.png', '6.jpeg', '2.jpg',
    '3.jpg', '4.jpg', '5.png', '6.jpeg', '2.jpg', '3.jpg',
    '4.jpg', '5.png', '6.jpeg', '2.jpg', '3.jpg', '4.jpg'
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const closeModal = () => setSelectedImage(null);
  const toggleShow = () => setShowAll(prev => !prev);

  const imagesToShow = showAll ? images : images.slice(0, 12);

  return (
    <>
      <section className="bg-black py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagesToShow.map((img, index) => {
            const originalIndex = images.indexOf(img, index); // Ensures consistent delay for original image order
            const delay = originalIndex < 12 ? (originalIndex * 0.05).toFixed(1) : null;

            return (
              <div
                key={index}
                className="relative w-full h-[250px] rounded-md overflow-hidden cursor-pointer group fade-in"
                onClick={() => setSelectedImage(img)}
                {...(delay !== null && { 'data-delay': delay })}
              >
                <Image
                  src={`/gallery/${img}`}
                  alt={`Gallery image ${index + 1}`}
                  height={250}
                  width={500}
                  className="object-cover h-full w-full transition-all duration-300 group-hover:scale-105"
                />
              </div>
            );
          })}
          </div>

          {images.length > 12 && (
            <div className="flex justify-center mt-10">
              <button
                className="button button--primary"
                onClick={toggleShow}
              >
                {showAll ? 'Show Less Images' : 'Show More Images'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/${selectedImage}`}
              alt="Enlarged"
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[90vh]"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-primary z-10 text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryBlock;