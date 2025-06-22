import Link from "next/link";
import Image from "next/image";

const AboutBlock = () => {
    return ( 
        <section className="pb-20 bg-black">
            <div className="container">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="flex flex-col gap-4 fade-up ">
                        <div className="h2 text-white">About Us</div>
                            <div className="text-white space-y-6">
                            <p>
                                Triple H Contracts & Hire is your trusted partner for comprehensive outdoor and construction solutions across Staffordshire and beyond. With a reputation built on craftsmanship, reliability, and versatility, we offer a broad portfolio of services, including:
                            </p>

                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Building Works</strong> – From foundations to finish, we handle projects of all scales with precision and care.</li>
                                <li><strong>Landscaping & Ground Maintenance</strong> – Transforming green spaces and maintaining them to the highest standard.</li>
                                <li><strong>Groundworks</strong> – Providing essential groundwork services that lay the path for lasting infrastructure.</li>
                                <li><strong>Agricultural Contracting</strong> – Supporting the rural economy with robust, dependable agricultural solutions.</li>
                                <li><strong>Plant & Equipment Hire</strong> – Well-maintained machinery ready when you need it, for projects large or small.</li>
                            </ul>

                            <p>
                                At Triple H, we pride ourselves on delivering quality results—on time, on budget, and with a personal touch. Our experienced team works closely with clients to bring their vision to life, no matter the challenge.
                            </p>

                            <p>
                                Whether you're preparing a site, enhancing a property, or maintaining farmland, Triple H Contracts & Hire is the name you can count on.
                            </p>
                            </div>
                        <Link href="/about" className="button button--primary">About Us</Link>
                    </div>
                    <div className="fade-in w-full h-[400px] overflow-hidden rounded-md group relative ">
                    <Image
                        src="/about-home.png"
                        alt="About Triple H Contracts & Hire"
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutBlock;