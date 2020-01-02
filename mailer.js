const nodemailer = require('nodemailer');

module.exports = {
    sendMail: (mailTo, movie, seats) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'react.project2020@gmail.com',
            pass: 'Haslo123'
        }
    });
    
    const mailOptions = {
        from: 'react.project2020@gmail.com',
        to: `${mailTo}`,
        subject: 'Cinema-Tickets - seats reservation',
        text: `Hello!!!
        Your reservation for "${movie}" - seat: ${seats}`
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Email sent to: ${info.response}`)
        }
    })
}
}
