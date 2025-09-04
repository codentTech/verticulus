# Verticulus Email Automation Setup Guide

## Overview

This n8n workflow automatically handles emails sent to `info@verticulus.com` by:

1. Sending an auto-reply to the sender from `no-reply@verticulus.com`
2. Notifying the admin about the new email

## Prerequisites

### 1. Email Domain Setup

- Ensure `info@verticulus.com` and `no-reply@verticulus.com` are properly configured
- Set up SPF, DKIM, and DMARC records for email deliverability
- Configure email forwarding if needed

### 2. n8n Installation

```bash
# Install n8n globally
npm install n8n -g

# Start n8n
n8n start
```

## Setup Steps

### Step 1: Install n8n with npm

```bash
# Install n8n globally
npm install n8n -g

# Start n8n
n8n start
```

### Step 2: Access n8n Dashboard

1. Open browser: `http://localhost:5678`
2. Create admin account if prompted
3. Access the n8n dashboard

### Step 3: Create IMAP Credential

1. Go to "Credentials" → "Add Credential"
2. Search for "IMAP"
3. Select "IMAP" credential type
4. Fill in the details:
   ```
   Host: server903.web-hosting.com
   Port: 993
   User: info@verticulus.com
   Password: your-email-password
   ```
5. Test the connection
6. Save the credential

### Step 4: Create SMTP Credential

1. Go to "Credentials" → "Add Credential"
2. Search for "SMTP"
3. Select "SMTP" credential type
4. Fill in the details:
   ```
   Host: server903.web-hosting.com
   Port: 465
   User: no-reply@verticulus.com
   Password: your-email-password
   ```
5. Test the connection
6. Save the credential

### Step 5: Create Email Automation Workflow

1. Go to "Workflows" → "Add Workflow"
2. Name it: "Verticulus Email Auto-Reply"

#### Add Email Trigger (IMAP) Node:

- **Credential**: Your IMAP credential
- **Mailbox Name**: INBOX
- **Action**: Mark as Read
- **Format**: Simple
- **Custom Email Rules**: `["UNSEEN"]`

#### Add Email Send Node (Auto-Reply):

- **Credential**: Your SMTP credential
- **From**: no-reply@verticulus.com
- **To**: `={{ $json.from }}`
- **Subject**: "Thank you for contacting Verticulus"
- **Message**: (see template below)

#### Add Email Send Node (Admin Notification):

- **Credential**: Your SMTP credential
- **From**: no-reply@verticulus.com
- **To**: info@verticulus.com
- **Subject**: "New Contact Form Submission - {{ $json.subject }}"
- **Message**: (see template below)

### Step 6: Activate Workflow

1. Click the "Active" toggle in the top right
2. The workflow will start monitoring for emails
3. Status should show "Active"

## Email Templates

### Auto-Reply Template

```html
<p>Dear {{ $json.from.split('@')[0] }},</p>

<p>
  Thank you for contacting Verticulus. We have received your email and will get
  back to you within 24 hours.
</p>

<p>In the meantime, here are some resources that might be helpful:</p>

<ul>
  <li>
    Our Services:
    <a href="https://verticulus.com/services"
      >https://verticulus.com/services</a
    >
  </li>
  <li>
    About Us:
    <a href="https://verticulus.com/about">https://verticulus.com/about</a>
  </li>
  <li>
    Contact:
    <a href="https://verticulus.com/contact">https://verticulus.com/contact</a>
  </li>
</ul>

<p>
  Best regards,<br />
  The Verticulus Team
</p>

<p>
  <em
    >---<br />
    This is an automated response. Please do not reply to this email.</em
  >
</p>
```

### Admin Notification Template

```html
<p>A new email was received from {{ $json.from }}.</p>

<p>
  <strong>Subject:</strong> {{ $json.subject }}<br />
  <strong>From:</strong> {{ $json.from }}<br />
  <strong>Date:</strong> {{ $json.date }}
</p>

<p>
  <strong>Content:</strong><br />
  {{ $json.text }}
</p>

<p>
  <em
    >---<br />
    This notification was sent automatically by n8n.</em
  >
</p>
```

## Testing

### Test the Workflow

1. Send a test email to `info@verticulus.com`
2. Wait 1-2 minutes for the workflow to process
3. Check if auto-reply is sent from `no-reply@verticulus.com`
4. Verify admin notification is received

### Expected Results

- ✅ Email detected by IMAP trigger
- ✅ Auto-reply sent to original sender
- ✅ Admin notification sent to info@verticulus.com
- ✅ Professional auto-reply with branding

## Troubleshooting

### Common Issues

1. **IMAP Connection Issues**: Check server settings and credentials
2. **SMTP Sending Issues**: Verify SMTP credentials and port settings
3. **Workflow Not Triggering**: Check if workflow is active and IMAP is working
4. **Emails Not Delivered**: Check spam folders and email server logs

### Monitoring

- Monitor workflow executions in n8n
- Check email delivery rates
- Review error logs for issues
- Test regularly to ensure automation works

## Security Considerations

- Use strong passwords for email accounts
- Regularly update email credentials
- Monitor for unusual email activity
- Backup workflow configurations
- Use environment variables for sensitive data
