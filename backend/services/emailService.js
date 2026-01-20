import nodemailer from "nodemailer";

// Create transporter for Gmail
const createMailTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
};

// Send contact form email to company
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createMailTransporter();

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(180deg, #0B23C8 0%, #0B0B0B 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #0B23C8; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
              <td style="padding: 12px 0; color: #555;">${contactData.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; font-weight: bold; color: #333;">City:</td>
              <td style="padding: 12px 0; color: #555;">${contactData.city}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 12px 0; color: #555;">
                <a href="mailto:${contactData.email}" style="color: #0B23C8; text-decoration: none;">${contactData.email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 12px 0; color: #555;">
                <a href="tel:${contactData.phoneNumber}" style="color: #0B23C8; text-decoration: none;">${contactData.phoneNumber}</a>
              </td>
            </tr>
          </table>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #0B23C8; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap; margin: 0;">${contactData.message}</p>
          </div>

          <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="color: #0B5A7B; margin: 0;">
              <strong>✓ Privacy Policy Agreed:</strong> Yes
            </p>
          </div>

          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
            This is an automated email from Aireb Solutions Contact Form.<br>
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `${process.env.SENDER_NAME} <${process.env.GMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Form Submission from ${contactData.fullName}`,
      html: htmlTemplate,
      replyTo: contactData.email,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${process.env.COMPANY_EMAIL}`);
    return true;
  } catch (error) {
    console.error(`❌ Error sending email: ${error.message}`);
    throw error;
  }
};

// Send confirmation email to user
export const sendConfirmationEmail = async (email, fullName) => {
  try {
    const transporter = createMailTransporter();

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(180deg, #0B23C8 0%, #0B0B0B 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #333; font-size: 16px; margin-top: 0;">Hello ${fullName},</p>
          
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out to <strong>Aireb Solutions</strong>. We have received your message and appreciate your interest in our services.
          </p>

          <p style="color: #555; line-height: 1.6;">
            Our team will review your inquiry and get back to you within <strong>24-48 hours</strong> with a response to your questions.
          </p>

          <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #0B5A7B; margin: 0; font-weight: bold;">What happens next?</p>
            <ul style="color: #0B5A7B; margin: 10px 0 0 0; padding-left: 20px;">
              <li>Our team will review your inquiry</li>
              <li>We'll evaluate how we can best help you</li>
              <li>You'll receive a detailed response from our team</li>
            </ul>
          </div>

          <p style="color: #555; line-height: 1.6;">
            In the meantime, feel free to visit our website to learn more about our services and expertise.
          </p>

          <p style="color: #555;">
            Best regards,<br>
            <strong>Aireb Solutions Team</strong>
          </p>

          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
            This is an automated response. Please do not reply directly to this email.<br>
            Contact us: ${process.env.COMPANY_EMAIL}
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `${process.env.SENDER_NAME} <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We Received Your Message - Aireb Solutions",
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`❌ Error sending confirmation email: ${error.message}`);
    throw error;
  }
};
