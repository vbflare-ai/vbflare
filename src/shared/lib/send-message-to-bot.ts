'use server';

import axios from "axios";

const BOT_TOKEN = process.env.BOT_TOKEN!;
const CHAT_ID = process.env.CHAT_ID!;

type SendMessageToBotParams = {
    email: string;
    name: string;
    description: string;
};

export const sendMessageToBot = async ({description, name, email}: SendMessageToBotParams) => {
    if (!BOT_TOKEN || !CHAT_ID) {
        throw new Error('BOT_TOKEN or CHAT_ID is not defined in environment variables');
    }

    const text = `<b>📧 Email:</b> ${email} \n
<b>👤 Name:</b> ${name} \n
<b>📝 Description:</b> ${description}`;

    try {
        const data = {
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML',
            disable_web_page_preview: true
        };

        console.log('Sending message to Telegram:', { chat_id: CHAT_ID, token: BOT_TOKEN ? 'exists' : 'missing' });

        const response = await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, data);

        console.log('Message sent successfully:', response.data);
        return response.data;
    } catch (e) {
        console.log('error send tg ', e)
    }
}