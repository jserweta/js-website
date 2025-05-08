'use server';

import {config} from 'dotenv';
import FormData from 'form-data'; // form-data v4.0.1
import Mailgun from 'mailgun.js'; // mailgun.js v11.1.0
import {ContactFormSchema} from '../schema/contactFormSchema';

config();

export async function sendContactFormMessage(contactFormData: ContactFormSchema) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || 'API_KEY',
    // When you have an EU-domain, you must specify the endpoint:
    // url: 'https://api.mailgun.net/v3/',
  });
  try {
    await mg.messages.create('sandbox0a9a412dcff94a13bbb36d693cfc147f.mailgun.org', {
      'from': 'Mailgun Sandbox <postmaster@sandbox0a9a412dcff94a13bbb36d693cfc147f.mailgun.org>',
      'to': ['Jakub Serweta <contact.jserweta@gmail.com>'],
      'subject': 'Hello Jakub Serweta',
      'template': 'js website - contact form',
      'h:X-Mailgun-Variables': JSON.stringify({
        message: contactFormData.message,
        name: contactFormData.name,
      }),
      'h:Reply-To': contactFormData.email,
      'h:Content-Type': 'text/html; charset=utf-8',
    });
  } catch (error) {
    console.error('Mailgun error:', error);
    throw new Error('Mailgun service internal error.');
  }
}
