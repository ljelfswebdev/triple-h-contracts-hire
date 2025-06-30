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
            const delay = parseFloat(el.dataset.delay || '0');
            animate(el, final, {
              duration: 1,
              delay,
              easing: 'ease-out',
            });
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
      const isMobile = window.innerWidth < 640;
    
      Object.keys(animationMap).forEach((key) => {
        const elements = document.querySelectorAll(`.${key}`);
        elements.forEach((el) => {
          if (el.dataset.motionApplied) return;
    
          const override = el.classList.contains('motion-override');
    
          // ⛔ Skip both style and animation setup on mobile unless overridden
          if (isMobile && !override) return;
    
          el.dataset.motionApplied = 'true';
          animateOnView(el, key);
        });
      });
    };

    scanAndAnimate();

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