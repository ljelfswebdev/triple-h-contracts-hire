import Image from "next/image";

const Banner = ({ title, background }) => {
    return (
        <section className="py-10 relative h-[300px]">
            {/* Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-black/80 z-[1]" />

            {/* Background Image */}
            <div className="absolute top-0 left-0 h-full w-full z-0">
                <Image
                    src={background}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Title */}
            <div className="container relative z-[2] h-full flex items-center justify-center">
                <h1 className="text-white text-center text-4xl font-bold">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default Banner;