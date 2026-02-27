import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh] bg-sage text-cream overflow-hidden">
            <div className="relative w-full h-full flex flex-col items-center justify-start pt-32">
                {/* Left and Right Side texts */}

                {/* Logo Illustration */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 flex justify-center pointer-events-none">
                    <div className="w-[90vw] max-w-[400px] sm:max-w-[500px] aspect-square md:w-[35rem] md:h-[35rem] lg:w-[45rem] lg:h-[45rem] xl:w-[50rem] xl:h-[50rem] relative flex items-center justify-center pointer-events-auto">
                        <Image
                            src="/LOGO.svg"
                            alt="Aboe Restaurant Logo"
                            fill
                            className="object-contain brightness-0"
                            priority
                        />
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-lg md:text-xl tracking-wide font-caveat leading-relaxed text-cream/80 z-10 w-full text-shadow-sm">
                    Keep scrolling for<br />the good stuff.
                </div>
            </div>
        </section>
    );
}
