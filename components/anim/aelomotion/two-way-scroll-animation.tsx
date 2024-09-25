"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const TwoWayScrollAnimation = ({ children, animate, initial, reverse, threshold = 0.5 }: ScrollProps) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (scrollDirection === 'down') {
                        controls.start({ opacity: animate.opacity, y: animate.y });
                    } else {
                        controls.start({ opacity: reverse.opacity, y: reverse.y });
                    }
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls, animate, reverse, threshold, scrollDirection]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: initial.opacity, y: initial.y }}
        >
            {children}
        </motion.div>
    );
};

export default TwoWayScrollAnimation;
