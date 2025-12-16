import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)


def send_contact_email(name: str, email: str, phone: str, message: str, recipient_email: str):
    """
    Send contact form submission via email
    """
    try:
        # Email configuration from environment variables
        smtp_host = os.getenv('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', '587'))
        smtp_user = os.getenv('SMTP_USER', '')
        smtp_password = os.getenv('SMTP_PASSWORD', '')
        
        # If SMTP credentials are not configured, log the message instead
        if not smtp_user or not smtp_password:
            logger.info(f"Email functionality not configured. Contact form submission:")
            logger.info(f"From: {name} ({email})")
            logger.info(f"Phone: {phone}")
            logger.info(f"Message: {message}")
            return True
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Contact Form Submission from {name}'
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        
        # Create HTML email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <div style="background: linear-gradient(135deg, #1a5f7a 0%, #4db5c0 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
              </div>
              <div style="padding: 20px; background: #f9f9f9;">
                <h3 style="color: #1a5f7a; border-bottom: 2px solid #4db5c0; padding-bottom: 10px;">Contact Details</h3>
                <table style="width: 100%; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 10px; font-weight: bold; width: 120px;">Name:</td>
                    <td style="padding: 10px;">{name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Email:</td>
                    <td style="padding: 10px;"><a href="mailto:{email}" style="color: #1a5f7a;">{email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px;">{phone if phone else 'Not provided'}</td>
                  </tr>
                </table>
                <h3 style="color: #1a5f7a; border-bottom: 2px solid #4db5c0; padding-bottom: 10px;">Message</h3>
                <div style="padding: 15px; background: white; border-radius: 4px; white-space: pre-wrap;">
                  {message}
                </div>
              </div>
              <div style="padding: 15px; text-align: center; background: #e9e9e9; border-radius: 0 0 8px 8px;">
                <p style="margin: 0; color: #666; font-size: 12px;">This email was sent from the Tryxcel Technologies contact form</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Attach HTML content
        html_part = MIMEText(html, 'html')
        msg.attach(html_part)
        
        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        logger.info(f"Contact form email sent successfully to {recipient_email}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact form email: {str(e)}")
        # Don't fail the request if email fails
        return False
