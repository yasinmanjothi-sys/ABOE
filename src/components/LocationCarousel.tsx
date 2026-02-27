'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LocationCarousel() {
    const images = [
        { id: 1, src: '/images/Screenshot 2026-02-27 at 19.54.53.png', alt: 'Aboe Cafe Details 1' },
        { id: 2, src: '/images/Screenshot 2026-02-27 at 19.55.08.png', alt: 'Aboe Cafe Details 2' },
        { id: 3, src: '/images/Screenshot 2026-02-27 at 19.55.27.png', alt: 'Aboe Cafe Details 3' },
        { id: 4, src: '/images/Screenshot 2026-02-27 at 19.55.49.png', alt: 'Aboe Cafe Details 4' },
    ];

    const [cards, setCards] = useState(images);
    const [animatingOutId, setAnimatingOutId] = useState<number | null>(null);

    const handleNext = () => {
        if (animatingOutId !== null) return;
        const topId = cards[0].id;
        setAnimatingOutId(topId);

        setTimeout(() => {
            setCards((prev) => {
                const next = [...prev];
                const top = next.shift();
                if (top) next.push(top);
                return next;
            });
            setAnimatingOutId(null);
        }, 250);
    };

    const handlePrev = () => {
        if (animatingOutId !== null) return;
        setCards((prev) => {
            const next = [...prev];
            const bottom = next.pop();
            if (bottom) next.unshift(bottom);
            return next;
        });
    };

    return (
        <section className="w-full bg-cream text-sage-dark py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-20">

            {/* Text & Illustration Column */}
            <div className="relative flex flex-col justify-center w-full h-full min-h-[400px]">

                <p className="text-xl md:text-2xl font-caveat leading-snug text-sage uppercase max-w-xs md:max-w-sm relative z-10 mt-12 lg:mt-0">
                    Serving up fresh Mediterranean flavors daily. Dive into our signature sourdough pizzas, vibrant salads, and comforting pastas, with plenty of delicious vegan and vegetarian-friendly options to choose from.
                </p>

                {/* PIZZA Illustration precisely positioned in the empty middle gap on desktop, stacked on mobile */}
                <div className="relative mt-12 mx-auto lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[4rem] xl:right-[6rem] w-64 h-64 md:w-80 md:h-80 lg:w-[600px] lg:h-[600px] pointer-events-none opacity-90 z-0">
                    <Image
                        src="/PIZZA.svg"
                        alt="Pizza Sketch"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Carousel Column */}
            <div className="flex flex-col items-end">

                {/* Carousel Container */}
                <div className="relative w-full aspect-[4/3] mb-6 perspective-[1000px]">
                    {cards.map((img, index) => {
                        const isAnimatingOut = animatingOutId === img.id;
                        return (
                            <motion.div
                                key={img.id}
                                animate={{
                                    scale: isAnimatingOut ? 1.05 : 1 - index * 0.05,
                                    y: isAnimatingOut ? -20 : index * 20,
                                    x: isAnimatingOut ? 150 : 0,
                                    rotate: isAnimatingOut ? 10 : index === 0 ? 0 : index % 2 === 0 ? 4 : -4,
                                    zIndex: isAnimatingOut ? images.length + 1 : images.length - index,
                                    opacity: isAnimatingOut ? 0 : 1 - index * 0.15,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className="absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-sage-dark/30"
                                style={{ transformOrigin: 'top center' }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Carousel Controls */}
                <div className="flex space-x-4">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-[2rem] border-2 border-sage text-sage-dark flex items-center justify-center bg-cream pill-shadow"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-[2rem] border-2 border-sage text-sage-dark flex items-center justify-center bg-cream pill-shadow"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Bottom Border Line */}
            <div className="w-full absolute bottom-0 left-0 h-px bg-sage-dark/30"></div>
        </section>
    );
}
