import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10916.522537384646!2d-71.28308633052396!3d46.841118238074856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897331aac3039%3A0xe687196ad0e3c62f!2sNovaPros!5e0!3m2!1sfr!2sca!4v1724024978318!5m2!1sfr!2sca"
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
