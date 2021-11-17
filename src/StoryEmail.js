//Based on stack overflow
/*const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

let mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'supportabc@gmail.com',
        pass: '11112222'
    }
});

exports.sendMail = functions.https.onCall((data, context) => {

    console.log('enter exports.sendMail, data: ' + JSON.stringify(data));

    const recipientEmail = data['recipientEmail'];
    console.log('recipientEmail: ' + recipientEmail);

    const mailOptions = {
        from: 'Abc Support <Abc_Support@gmail.com>',
        to: recipientEmail,
        html:
           `<p style="font-size: 16px;">Thanks for signing up</p>
            <p style="font-size: 12px;">Stay tuned for more updates soon</p>
            <p style="font-size: 12px;">Best Regards,</p>
            <p style="font-size: 12px;">-Support Team</p>
          ` // email content in HTML
    };

    mailOptions.subject = 'Welcome to Abc';

    return mailTransport.sendMail(mailOptions).then(() => {
        console.log('email sent to:', recipientEmail);
        return new Promise(((resolve, reject) => {
       
            return resolve({
                result: 'email sent to: ' + recipientEmail
            });
        }));
    });
});*/