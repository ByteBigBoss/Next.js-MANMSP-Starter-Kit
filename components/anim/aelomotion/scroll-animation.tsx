"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrollProps {
    children: React.ReactNode;
    initial: ControlProps;
    animate: ControlProps;
    threshold?: number;

}

const ScrollAnimation = ({ children, animate, initial, threshold = 0.5 }: ScrollProps) => {

    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ opacity: animate.opacity, y: animate.y });
                }
            },
            { threshold }
        );

        const currentRef = ref.current; // Store ref.current in a variable

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Use the variable in cleanup
            }
        };
    }, [controls, animate, threshold]);

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

export default ScrollAnimation;
