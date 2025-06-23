import Banner from "@/components/globals/banner";
import dynamic from 'next/dynamic';

const Usps = dynamic(() => import('@/components/globals/usps'));
const AboutBlock = dynamic(() => import('@/components/homepage/about'));
const Team = dynamic(() => import('@/components/about/team'));
const Parallax = dynamic(() => import('@/components/globals/parallax'));
const Testimonials = dynamic(() => import('@/components/globals/testimonials'));
const Accreditations = dynamic(() => import('@/components/globals/accreditations'));


const AboutPage = () => {
    return (
        <>
            <Banner 
                title="About Us" 
                background="/banners/about.png" 
            />


            <Usps />
            <AboutBlock className="pt-20" />
            <Team />


            <Parallax />
            <Testimonials />
            <Accreditations />
        </>
    );
};

export default AboutPage;