import { transporter } from '../utils/nodeMailer.utils.js';

export const sendEmail = async (email) => {
    
    await transporter.sendMail({
        from: 'Cervecería Potter',
        to: email.to,
        subject: email.subject,
        html: email.html
    });
};