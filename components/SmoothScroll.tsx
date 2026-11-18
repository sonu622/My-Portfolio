'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        window.lenis = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const updateTicker = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(0);

        // Global smooth scroll interceptor for hash anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                if (href === '#' || href === '#top') {
                    e.preventDefault();
                    lenis.scrollTo(0, { duration: 1.2 });
                    return;
                }
                const id = href.slice(1);
                const element = document.getElementById(id);
                if (element) {
                    e.preventDefault();
                    lenis.scrollTo(element, { offset: -70, duration: 1.2 });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
            gsap.ticker.remove(updateTicker);
            delete window.lenis;
        };
    }, []);

    return <>{children}</>;
}