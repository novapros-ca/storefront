import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5457.49835750864!2d-71.2583439415472!3d46.84862729691993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8bd7ece88b55b%3A0x5dccc641f7cf3346!2s126%2053e%20Rue%20E%2C%20Qu%C3%A9bec%2C%20QC%20G1H%202H8!5e0!3m2!1sfr!2sca!4v1762135312290!5m2!1sfr!2sca"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;
