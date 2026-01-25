# 📧 EmailJS Setup Guide

## How to Enable Email Notifications

Your portfolio now has backend email integration using **EmailJS** - a free service that sends emails directly from JavaScript without needing a backend server.

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. After login, go to **Email Services**
2. Click **Add Service**
3. Choose **Gmail** (or another email provider)
4. Follow the steps to connect your email account
5. Your Service ID will be something like: `service_xxxxxxx`

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

4. Set your Personal Email in **TO_EMAIL** field: `nilansha777@gmail.com`
5. Your Template ID will be something like: `template_xxxxxxx`
6. Save the template

### Step 4: Update Portfolio Code

Replace the EmailJS configuration in `script.js`:

Find this section:
```javascript
function initializeEmailJS() {
  emailjs.init({
    publicKey: "EBBpQJ-t1tKCiN6OG"
  });
}
```

And update with your credentials:
```javascript
function initializeEmailJS() {
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY_HERE"
  });
}
```

Find the `emailjs.send()` call and update:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### Step 5: Get Your Credentials

1. Go to your EmailJS dashboard
2. Click **Account** (top right)
3. Under **API Keys**, copy your **Public Key**
4. Use this in the code above

### Example Updated Code:

```javascript
function initializeEmailJS() {
  emailjs.init({
    publicKey: "abc123xyz789"  // Your actual public key
  });
}

// In handleContactForm function:
emailjs.send('service_abc123', 'template_def456', templateParams)
```

### Step 6: Test the Form

1. Open your portfolio
2. Fill out the contact form
3. Click "Send Message"
4. Check your email (nilansha777@gmail.com) for the message
5. You should receive emails with sender's name, email, phone, and message

## Email Received Features

When someone submits the contact form, you'll receive:
- ✅ Their full name
- ✅ Their email address
- ✅ Their phone number (from form)
- ✅ Their complete message

## Troubleshooting

### "Error: Please check your keys"
- Your Public Key is wrong
- Copy it again from Account > API Keys

### "Email not sent"
- Service not connected properly
- Check Email Services are linked
- Verify template is created correctly

### "Invalid Service/Template ID"
- Double-check the IDs in your code
- Make sure they match exactly

## Alternative: Contact Form Data

If EmailJS doesn't work, you can:
1. Use [Formspree](https://formspree.io/) - Free form submissions
2. Use [Basin](https://usebasin.com/) - Simple form handling
3. Set up a backend (Node.js, Python, etc.)

## Security Note

Your Public Key is meant to be public (it's in client-side code). The actual email sending is protected by:
- EmailJS rate limiting
- CORS restrictions
- Your template setup

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- Chat Support available on their website
- Check spam folder if email doesn't appear

---

**Once configured, your contact form will be fully functional!** 🎉
