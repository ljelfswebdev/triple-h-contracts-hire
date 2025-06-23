import Banner from "@/components/globals/banner";
import dynamic from 'next/dynamic';

const Usps = dynamic(() => import('@/components/globals/usps'));
const GalleryBlock = dynamic(() => import('@/components/gallery/gallery-block'));
const Accreditations = dynamic(() => import('@/components/globals/accreditations'));

const Gallery = () => {
    return ( 
        <>
            <Banner 
                title="Gallery" 
                background="/banners/about.png" 
            />
            <Usps/>
            <GalleryBlock />

            <Accreditations />
        </>
     );
}
 
export default Gallery;