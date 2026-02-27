import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-cream flex flex-col pt-24">
            <Navbar alwaysShow={true} />

            <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-sage-dark relative z-10">
                <h1 className="text-6xl md:text-8xl font-bristol uppercase tracking-tight text-center mb-8">
                    Book a Table
                </h1>

                <p className="font-caveat text-2xl md:text-3xl uppercase tracking-widest text-center max-w-lg mb-16 text-sage">
                    We can&apos;t wait to host you. Reach out to secure your spot.
                </p>

                <div className="flex flex-col md:flex-row gap-6 w-full max-w-md mx-auto">
                    {/* Primary Booking via Call */}
                    <a
                        href="tel:0700001880"
                        className="flex-1 text-center py-6 px-8 rounded-full bg-sage text-cream font-bristol text-2xl uppercase tracking-wider hover:bg-sage-dark transition-colors shadow-lg hover:shadow-xl"
                    >
                        Call Us
                    </a>

                    {/* Secondary Booking via WhatsApp */}
                    <a
                        href="https://wa.me/254700001880"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-6 px-8 rounded-full border-2 border-sage text-sage font-bristol text-2xl uppercase tracking-wider hover:bg-sage hover:text-cream transition-colors shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* Existing Footer automatically pulls in the Map & Contact Details */}
            <Footer />
        </main>
    );
}
