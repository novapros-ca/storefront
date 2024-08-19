import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import React from 'react';

export const metadata = {
    title: "NovaPros - Contact",
}

const ContactUs = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Contact" title="Contactez-nous">
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle7>
        </>
    );
};

export default ContactUs;
