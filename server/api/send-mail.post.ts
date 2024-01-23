import sgMail from '@sendgrid/mail';

export default defineEventHandler(async (event) => {

  const formData =await readBody(event)

  const SENDGRID_API_KEY = useRuntimeConfig().public.SENDGRID_API_KEY;

  if (!SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not defined.');
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: [
      { email: 'globalharvestnetwork2@gmail.com' },
      { email: 'admin@globalharvestnetworks.com' },
    ],
    from: { email: 'office@noteopx.com' }, // Replace with your preferred sender email
    subject: 'GLOBAL HARVEST NETWORK FORM',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Question: ${formData.question}
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error };
  }
});
