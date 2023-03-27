const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mhv4lfrb@duck.com',
        subject: 'Welcome to Many-Tasks',
        text: `Welcome to the website ${name}!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'mhv4lfrb@duck.com',
        subject: 'You have been cancelled!',
        text: `Sad to see you go ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}