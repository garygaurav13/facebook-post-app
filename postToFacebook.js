require('dotenv').config();
const axios = require('axios');

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const PAGE_ID = process.env.PAGE_ID;
// const message = 'Hello, World! This is a test post from Gaurav (Developer)';


const messages = [
    'Welcome back to the jungle',
    'give me somw',
    'sunsine',
    'give me some',
    'rain',
    'give me some',
    'Jam',
    'Lets Fun yheee...'
];


async function postToFacebookPage(message) {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/${PAGE_ID}/feed`,
            null, // No request body
            {
                params: {
                    access_token: PAGE_ACCESS_TOKEN,
                    message: message,
                },
            }
        );

        console.log('Post ID:', response.data.id);
    } catch (error) {
        console.error('Error posting to Facebook:', error.response ? error.response.data : error.message);
    }
}

async function postMessages() {
    for (const message of messages) {
        await postToFacebookPage(message);
        // Optional: Add a delay between posts to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
    }
}

postMessages();
