"use client"
import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const handleForm = (event) => {
        const target = event.target;
        event.preventDefault()
        const htmlCollections = target.elements;
        const formData = {
            name: htmlCollections.name.value,
            email: htmlCollections.email.value,
            phone: htmlCollections.phone.value.replace(/\D/g, ''),
            comments: htmlCollections.comments.value,
        };

        fetch("./.netlify/functions/triggerContactEmail", {
            method: "POST",
            body: JSON.stringify(formData)
        });

        toast.success("Merci, nous vous contacterons bientôt.")

        target.reset();
    }
    return (
        <>
            <form className="contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Nom complet" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Courriel*" type="email" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Téléphone*" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Parlez-nous de vos besoins *" autoComplete='off' required></textarea>
                        </div>
                    </div>
                </div>
                <div className="row submit-container">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            <i className="fa"></i> Prendre contact
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
