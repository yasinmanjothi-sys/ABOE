import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section className="w-full bg-cream text-sage-dark py-32 px-6 flex flex-col items-center justify-center relative z-20">

            {/* Curved Text Top */}
            <div className="mb-8 relative w-80 h-40 md:w-96 md:h-48 overflow-hidden flex justify-center">
                <svg viewBox="0 0 200 100" className="w-full h-full text-sage font-caveat tracking-widest text-[14px] uppercase transition-all duration-300">
                    <path id="curve" d="M 20, 90 A 80,80 0 0,1 180,90" fill="transparent" />
                    <text>
                        <textPath href="#curve" startOffset="50%" textAnchor="middle">
                            A BIT OF EVERYTHING
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Main Copy */}
            <div className="max-w-3xl text-center mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-caveat font-medium leading-snug tracking-tight text-sage-dark uppercase">
                    ABOE is for laidback dining, catch-ups with friends, takeaway goodies, & days that you never want to end.
                </h2>
            </div>

            {/* Action Button */}
            <button className="px-8 py-3 rounded-[2rem] border-2 border-sage text-sage-dark font-caveat text-xs tracking-widest uppercase bg-cream pill-shadow">
                Book a table
            </button>

            {/* Bottom Border Line to next section */}
            <div className="w-full absolute bottom-0 left-0 h-px bg-sage-dark/30"></div>
        </section>
    );
}
