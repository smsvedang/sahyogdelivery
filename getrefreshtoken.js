import { google } from 'googleapis';
import readline from 'readline';

const oAuth2Client = new google.auth.OAuth2(
  "1064383914642-dagne0o1dnm206kqdeus7qskot8ajqrc.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/oauth2callback"
);

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
