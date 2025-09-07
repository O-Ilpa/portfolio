# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails directly from your portfolio contact form without needing a backend server.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Connect your Gmail account (omarilpa09@gmail.com)
5. Note down your **Service ID** (looks like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>
  
  <div style="margin-bottom: 15px;">
    <strong>Name:</strong> {{from_name}}
  </div>
  
  <div style="margin-bottom: 15px;">
    <strong>Email:</strong> {{from_email}}
  </div>
  
  <div style="margin-bottom: 15px;">
    <strong>Phone:</strong> {{phone}}
  </div>
  
  <div style="margin-bottom: 20px;">
    <strong>Message:</strong>
    <div style="margin-top: 10px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; border-left: 4px solid #6366f1;">
      {{message}}
    </div>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
    <p>This message was sent from your portfolio contact form.</p>
    <p>Reply directly to: <a href="mailto:{{from_email}}">{{from_email}}</a></p>
  </div>
</div>
```

4. Set the **To Email** to: `omarilpa.eg@gmail.com`
5. Note down your **Template ID** (looks like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like a long string of characters)

## Step 5: Update Your Code

Replace the placeholder values in `src/App.jsx`:

```javascript
const serviceId = 'service_xxxxxxx' // Your actual service ID
const templateId = 'template_xxxxxxx' // Your actual template ID  
const publicKey = 'your_public_key_here' // Your actual public key
```

## Step 6: Test the Form

1. Run your portfolio: `npm run dev`
2. Fill out the contact form
3. Submit and check if you receive the email at `omarilpa.eg@gmail.com`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be more than enough for a portfolio contact form!

## Troubleshooting

**Form not sending emails:**
- Check browser console for errors
- Verify all IDs and keys are correct
- Make sure your Gmail account is properly connected

**Emails going to spam:**
- Add your domain to Gmail's safe senders list
- The emails should come from your connected Gmail account

**Template variables not working:**
- Make sure variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Check that you're passing the correct parameters in the code

## Security Note

The public key is safe to use in frontend code - it's designed for client-side use. Your Gmail credentials are never exposed to the frontend.
