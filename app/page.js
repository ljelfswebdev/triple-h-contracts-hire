'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with SSR disabled
const HeroBanner = dynamic(() => import('@/components/homepage/hero-banner'), {
  ssr: false,
});
const Usps = dynamic(() => import('@/components/globals/usps'), {
  ssr: false,
});
const Services = dynamic(() => import('@/components/globals/services'), {
  ssr: false,
});
const AboutBlock = dynamic(() => import('@/components/homepage/about'), {
  ssr: false,
});
const Parallax = dynamic(() => import('@/components/globals/parallax'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('@/components/globals/testimonials'), {
  ssr: false,
});
const Accreditations = dynamic(() => import('@/components/globals/accreditations'), {
  ssr: false,
});

// Generic loading fallback
const Loading = () => (
  <div className="min-h-[100px] animate-pulse bg-gray-100 rounded-md" />
);

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroBanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Usps />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AboutBlock />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Parallax />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Accreditations />
      </Suspense>
    </main>
  );
}