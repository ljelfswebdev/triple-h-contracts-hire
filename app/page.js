import dynamic from 'next/dynamic';
import HeroBanner from "@/components/homepage/hero-banner";

const Usps = dynamic(() => import('@/components/globals/usps'));
const Services = dynamic(() => import('@/components/globals/services'));
const AboutBlock = dynamic(() => import('@/components/homepage/about'));
const Parallax = dynamic(() => import('@/components/globals/parallax'));
const Testimonials = dynamic(() => import('@/components/globals/testimonials'));
const Accreditations = dynamic(() => import('@/components/globals/accreditations'));

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Usps />
      <Services />
      <AboutBlock />
      <Parallax />
      <Testimonials />
      <Accreditations />
    </main>
  );
}