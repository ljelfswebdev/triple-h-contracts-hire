import Banner from "@/components/globals/banner";
import dynamic from 'next/dynamic';

const Usps = dynamic(() => import('@/components/globals/usps'));
const ContactBlock = dynamic(() => import('@/components/contact/contact-block'));
const Accreditations = dynamic(() => import('@/components/globals/accreditations'));

const Contact = () => {
    return ( 
        <>
            <Banner 
                title="Contact Us" 
                background="/banners/about.png" 
            />
            <Usps/>
            <ContactBlock />

            <Accreditations />
        
        </>
     );
}
 
export default Contact;