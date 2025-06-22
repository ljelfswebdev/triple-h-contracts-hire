import Image from "next/image";

const Accreditations = () => {
  const accs = ['construction.png', 'national-highways.webp', 'nhss.jpg'];

  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="flex flex-col gap-8 items-center">
          <div className="h3 text-white">Our Partners</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[700px]">
          {accs.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-0 flex items-center justify-center h-40 fade-in"
              data-delay={(index * 0.3).toFixed(1)} // Staggered delay
            >
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={`/accreditations/${img}`}
                  alt={`Accreditation ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;