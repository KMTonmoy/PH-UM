import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'tonmoyahamed2009@gmail.com',
      pass: 'xfqj dshz wdui ymtb',
    },
  });

  await transporter.sendMail({
    from: 'tonmoyahamed2009@gmail.com', 
    subject: 'Reset your password within ten mins!', 
    text: '', 
    html,  
  });
};
