import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-cream text-sage-dark py-24 pb-0 relative z-20">

            {/* Top section: Find Us */}
            <div className="max-w-6xl mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Text Details */}
                <div className="flex flex-col space-y-8 text-sage">
                    <h2 className="text-4xl md:text-5xl font-bristol uppercase tracking-tight text-sage-dark">
                        Find Us
                    </h2>

                    <div className="font-caveat text-lg uppercase tracking-widest leading-relaxed">
                        <p className="font-bold text-sage-dark mb-1">Location</p>
                        <p>Peponi Gardens, 7, H3</p>
                        <p>Nairobi 00100</p>
                    </div>

                    <div className="font-caveat text-lg uppercase tracking-widest leading-relaxed">
                        <p className="font-bold text-sage-dark mb-1">Hours</p>
                        <p>Monday - Sunday</p>
                        <p>10:00 - 22:00</p>
                    </div>

                    <div className="font-caveat text-lg uppercase tracking-widest leading-relaxed">
                        <p className="font-bold text-sage-dark mb-1">Contact</p>
                        <p>070 000 1880</p>
                    </div>
                </div>

                {/* Right Side: Map Embed */}
                <a
                    href="https://www.google.com/maps/place/ABOE+(A+Bit+Of+Everything)/@-1.2498738,36.8036565,18.73z/data=!4m6!3m5!1s0x182f170053d04993:0x9bfa186433e6255b!8m2!3d-1.2501152!4d36.8040698!16s%2Fg%2F11yryyxqt2?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-sage hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer block group"
                >
                    <Image
                        src="/MAP.png"
                        alt="ABOE Location Map"
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                    />
                </a>

            </div>

            {/* Logo Section */}
            <div className="w-full flex justify-center pb-24">
                <Image
                    src="/LOGO.svg"
                    alt="ABOE Logo"
                    width={400}
                    height={150}
                    className="w-[60vw] max-w-[400px] brightness-0 opacity-80"
                />
            </div>

            {/* Very Bottom Copyright & links bar (matching sage background) */}
            <div className="w-full h-48 bg-sage px-6 py-8 flex items-end justify-center md:justify-between">
                <div className="text-cream font-caveat text-xs uppercase opacity-70">
                    © ABOE 2026
                </div>
                <div className="hidden md:flex space-x-6 text-cream font-caveat text-xs uppercase opacity-70">
                    <a href="https://www.instagram.com/aboe.kenya/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
