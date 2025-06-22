const Parallax = () => {
    return ( 
      <section
        className="relative bg-cover bg-center bg-fixed py-20"
        style={{ backgroundImage: `url('/parallax.jpg')` }}
      >
        <div className="absolute h-full w-full top-0 left-0 bg-primary/80"></div>
        <div className="container relative z-[2] py-24">
          <div className="h2 text-white text-center max-w-6xl mx-auto">
            Triple H Contracts & Hire: Powering National Highways with precision logistics, cutting-edge JCB machinery, and the muscle to move what matters — safely, reliably, on time.
          </div>
        </div>
      </section>
    );
  };
  
  export default Parallax;