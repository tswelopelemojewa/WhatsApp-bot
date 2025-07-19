import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const sendTestMessage = async () => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${process.env.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: "27790985214",
        type: "text",
        text: {
          body: "✅ WhatsApp API token is working!"
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Success:", response.data);
  } catch (err) {
    console.error("❌ Error Message:", err.response?.data || err.message);
  }
};

sendTestMessage();
