export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, telegram, message } = req.body;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = `
🌸 *Новая заявка с сайта*

👤 *Имя:* ${name}
📧 *Email:* ${email}
💬 *Telegram:* ${telegram || "не указан"}

📝 *Сообщение:*
${message}
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("Telegram error:", data);
      return res.status(500).json({ error: "Telegram error", details: data });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}