export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, telegram, message } = req.body;

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `🌟 Новая заявка с сайта\\n\\n👤 Имя: ${name}\\n📧 Email: ${email}\\n💬 Telegram: ${telegram || "не указан"}\\n\\n📝 Сообщение:\\n${message}`
      })
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Ошибка отправки" });
  }
}