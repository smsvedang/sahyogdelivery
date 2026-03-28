import 'dotenv/config';
import { google } from 'googleapis';
import readline from 'readline';

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI || "http://localhost:3000/oauth2callback"
);

if (!process.env.GMAIL_CLIENT_ID || !process.env.GMAIL_CLIENT_SECRET) {
  throw new Error('Missing GMAIL_CLIENT_ID or GMAIL_CLIENT_SECRET in environment.');
}

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: ['https://www.googleapis.com/auth/gmail.modify'],
});

console.log('\n👉 Open this URL in browser:\n', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n🔑 Paste the code here: ', async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  console.log('\n✅ TOKENS RECEIVED:\n', tokens);
  rl.close();
});
