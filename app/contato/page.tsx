import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ContactSection from '@/components/contato/ContactSection';

export default function Contato() {
    return (
        <>
            <Navbar />
            <ContactSection />
            <Footer />
            <WhatsAppButton />
        </>
    );
}