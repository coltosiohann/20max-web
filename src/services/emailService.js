// src/services/emailService.js - Email service utilities
export const emailTemplates = {
  // Template for internal notification
  internalNotification: (formData) => ({
    subject: `New inquiry from ${formData.name} - ${formData.projectType || 'General'}`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #991b1b 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">
            20<span style="color: #ef4444;">MAX</span> - New Contact Form Submission
          </h1>
        </div>
        
        <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Company:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.phone || 'Not provided'}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 18px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Project Type:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.projectType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Timeline:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.timeline || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Subject:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${formData.subject || 'No subject'}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: white; padding: 25px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
          <p style="color: #374151; line-height: 1.6; margin: 0;">${formData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: #dcfce7; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #166534; font-weight: 600;">
            ⚡ Response Required: Please follow up within 24 hours
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
          <p>This message was sent from the 20MAX website contact form on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission - 20MAX

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not provided'}
- Phone: ${formData.phone || 'Not provided'}

Project Details:
- Type: ${formData.projectType || 'Not specified'}
- Timeline: ${formData.timeline || 'Not specified'}
- Subject: ${formData.subject || 'No subject'}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
    `
  }),

  // Template for customer confirmation
  customerConfirmation: (formData) => ({
    subject: `Thank you for contacting 20MAX - We'll respond within 24 hours`,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #991b1b 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">
            20<span style="color: #ef4444;">MAX</span>
          </h1>
          <p style="color: #d1d5db; margin: 10px 0 0 0; font-size: 16px;">Engineering Excellence for the Future</p>
        </div>
        
        <div style="padding: 0 10px;">
          <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 22px;">Thank you for your inquiry!</h2>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Dear ${formData.name},
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            We have received your inquiry and appreciate your interest in 20MAX engineering solutions. 
            Our team of expert engineers will review your requirements and respond with detailed 
            technical feedback within 24 hours.
          </p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px;">Your Submission Summary:</h3>
            <ul style="color: #374151; margin: 0; padding-left: 20px;">
              <li>Project Type: ${formData.projectType || 'General inquiry'}</li>
              <li>Timeline: ${formData.timeline || 'To be discussed'}</li>
              <li>Submitted: ${new Date().toLocaleDateString()}</li>
            </ul>
          </div>
          
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
            <ol style="color: #1e40af; margin: 0; padding-left: 20px;">
              <li>Our engineering team reviews your requirements</li>
              <li>We prepare a detailed technical response</li>
              <li>You receive our reply within 24 hours</li>
              <li>We schedule a consultation to discuss your project</li>
            </ol>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            If you have any urgent questions or need immediate assistance, please don't hesitate 
            to contact us directly at <a href="mailto:info@20max.com" style="color: #dc2626;">info@20max.com</a> 
            or call us at +40 XXX XXX XXX.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <h3 style="color: #1f2937; margin: 0 0 15px 0;">Why Choose 20MAX?</h3>
            <div style="display: inline-block; text-align: left;">
              <p style="margin: 5px 0; color: #374151;">✓ Security-first engineering approach</p>
              <p style="margin: 5px 0; color: #374151;">✓ Rapid response and agile methodologies</p>
              <p style="margin: 5px 0; color: #374151;">✓ Precision engineering with OEM standards</p>
              <p style="margin: 5px 0; color: #374151;">✓ ISO-compliant and NATO-cleared facilities</p>
            </div>
          </div>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 30px;">
            Best regards,<br>
            <strong>The 20MAX Engineering Team</strong><br>
            <em>Engineering Excellence for the Future</em>
          </p>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">
            This is an automated confirmation email. Please do not reply to this email.<br>
            For direct inquiries, contact us at info@20max.com
          </p>
        </div>
      </div>
    `,
    text: `
Thank you for contacting 20MAX!

Dear ${formData.name},

We have received your inquiry and appreciate your interest in 20MAX engineering solutions. Our team will review your requirements and respond within 24 hours.

Your Submission Summary:
- Project Type: ${formData.projectType || 'General inquiry'}
- Timeline: ${formData.timeline || 'To be discussed'}
- Submitted: ${new Date().toLocaleDateString()}

What happens next?
1. Our engineering team reviews your requirements
2. We prepare a detailed technical response
3. You receive our reply within 24 hours
4. We schedule a consultation to discuss your project

For urgent questions, contact us directly:
Email: info@20max.com
Phone: +40 XXX XXX XXX

Best regards,
The 20MAX Engineering Team
Engineering Excellence for the Future
    `
  })
}