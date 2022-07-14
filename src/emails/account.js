const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    try {
        sgMail.send({
            to: email, 
            from: 'bmrgich@mail.io',
            subject: 'welcome',
            text: `Welcome to the app, ${name}.` 
        })
    } catch (e) {
        throw new Error("SendGrid Error.")
    }
}

const sendGoodbyeEmail = (email, name) => {
    try {
        sgMail.send({
            to: email,
            from: 'bmrgich@mail.io',
            subject: 'Goodbye',
            text: `Sorry to see you go ${name}.`
        })
    } catch (e) {
        throw new Error("SendGrid Error.")
    }
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}

// sgMail.send({
//     to: 'mrgich@mail.io',
//     from: 'mrgich@mail.io',
//     subject: 'First email using node',
//     text: 'hummana hummana home on the range',
// })
