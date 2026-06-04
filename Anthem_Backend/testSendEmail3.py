import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Set up the SMTP server and login credentials
smtp_server = 'smtp.gmail.com'
smtp_port = 587
smtp_username = 'your-email@gmail.com'
smtp_password = 'your-app-password'
smtp_sender = 'your-email@gmail.com'

# Set up the email message
msg = MIMEMultipart()
msg['From'] = smtp_sender
msg['To'] = 'contact@anthemgt.com'
msg['Subject'] = 'Test Email'
body = 'This is a test email.'
msg.attach(MIMEText(body, 'plain'))

# Connect to the SMTP server and send the email
with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.ehlo()
    server.starttls()
    server.login(smtp_username, smtp_password)
    server.sendmail(smtp_sender, 'contact@anthemgt.com', msg.as_string())
