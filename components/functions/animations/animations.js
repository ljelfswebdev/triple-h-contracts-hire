'use client';

import { useEffect } from 'react';
import { animate } from 'motion';

const animationMap = {
  'fade-up': {
    initial: { opacity: 0, transform: 'translateY(50%)' },
    final: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-right': {
    initial: { opacity: 0, transform: 'translateX(50%)' },
    final: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-left': {
    initial: { opacity: 0, transform: 'translateX(-50%)' },
    final: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-in': {
    initial: { opacity: 0 },
    final: { opacity: 1 },
  },
};

export default function AnimateRoot() {
  useEffect(() => {
    const animateOnView = (el, type) => {
      const { initial, final } = animationMap[type];
      if (!initial || !final) return;

      Object.assign(el.style, initial);

      const observer = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            animate(el, final, { duration: 0.6, easing: 'ease-out' });
            obs.unobserve(entry.target);
          }
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      observer.observe(el);
    };

    const scanAndAnimate = () => {
      Object.keys(animationMap).forEach((key) => {
        const elements = document.querySelectorAll(`.${key}`);
        elements.forEach((el) => {
          if (el.dataset.motionApplied) return;
          el.dataset.motionApplied = 'true';
          animateOnView(el, key);
        });
      });
    };

    // Initial scan
    scanAndAnimate();

    // Watch DOM for new elements
    const mutationObserver = new MutationObserver(() => {
      scanAndAnimate();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => mutationObserver.disconnect();
  }, []);

  return null;
}