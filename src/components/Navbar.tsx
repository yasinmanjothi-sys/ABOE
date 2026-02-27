'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar({ alwaysShow = false }: { alwaysShow?: boolean }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(!alwaysShow);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (alwaysShow) return;

        // Wait until we scroll past 90vh (almost the entire Hero section)
        if (typeof window !== 'undefined') {
            const threshold = window.innerHeight * 0.9;
            if (latest > threshold) {
                setHidden(false);
            } else {
                setHidden(true);
            }
        }
    });

    return (
        <motion.nav
            initial={{ opacity: alwaysShow ? 1 : 0, y: alwaysShow ? 0 : -20, pointerEvents: alwaysShow ? 'auto' : 'none' }}
            animate={{
                opacity: hidden ? 0 : 1,
                y: hidden ? -20 : 0,
                pointerEvents: hidden ? 'none' : 'auto'
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 ${alwaysShow ? 'text-sage-dark bg-cream/80 backdrop-blur-md shadow-sm' : 'mix-blend-difference text-cream'}`}
        >
            <div className="flex-1">
                <Link href="/#menu" className="hidden md:inline-block text-xs uppercase tracking-widest font-caveat border border-current px-4 py-2 rounded-full hover:bg-sage hover:text-cream transition-colors">
                    Menu
                </Link>
            </div>

            <div className="flex-1 text-center">
                <Link href="/" className="font-bristol text-3xl tracking-tight uppercase">
                    ABOE
                </Link>
            </div>

            <div className="flex-1 flex justify-end">
                <Link href="/reserve" className="hidden md:inline-block text-xs uppercase tracking-widest font-caveat border border-current px-4 py-2 rounded-full hover:bg-sage hover:text-cream transition-colors">
                    Book a table
                </Link>
            </div>
        </motion.nav>
    );
}
