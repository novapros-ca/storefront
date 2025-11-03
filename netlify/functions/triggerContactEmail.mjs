import fetch from "node-fetch";

const handler = async function(event) {
    if (event.body === null) {
        return {
            statusCode: 400,
            body: JSON.stringify("Payload required"),
        };
    }

    const formData = JSON.parse(event.body);

    await fetch(
        `${process.env.URL}/.netlify/functions/emails/contacts`,
        {
            headers: {
                "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
            },
            method: "POST",
            body: JSON.stringify({
                from: `Demande de contact <${process.env.FROM_EMAIL}>`,
                to: `NovaPros <${process.env.PUBLIC_EMAIL}>`,
                subject: `Nouveau message de ${formData.name} (Tel: ${formData.phone})`,
                parameters: {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    comments: formData.comments,
                    currentYear: new Date().getFullYear(),
                },
            }),
        }
    );

    return {
        statusCode: 200,
        body: JSON.stringify("Subscribe email sent!"),
    };
};

export  { handler };
