const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'mrgich@mail.io',
        subject: 'welcome',
        text: `Welcome to the app, ${name}.` 
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mrgich@mail.io',
        subject: 'Goodbye',
        text: `Sorry to see you go ${name}.`
    })
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
