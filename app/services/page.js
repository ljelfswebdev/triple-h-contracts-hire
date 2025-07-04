import Banner from "@/components/globals/banner";
import ServicesMainBlock from "@/components/services/main-block";
import dynamic from 'next/dynamic';
const Usps = dynamic(() => import('@/components/globals/usps'));
const Accreditations = dynamic(() => import('@/components/globals/accreditations'));

const ServicesPage = () => {
    return ( 
        <>
            <Banner 
                title="Our Services" 
                background="/banners/about.png" 
            />
            <Usps />
            <ServicesMainBlock/>
            <Accreditations />
        </>
     );
}
 
export default ServicesPage;