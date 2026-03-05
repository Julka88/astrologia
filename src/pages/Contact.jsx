import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {

  useEffect(() => {
    document.title = "Консультация по Ба Цзы, Феншуй, Цимень | Юлия";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Консультации по Ба Цзы, Феншуй и Цимень. Разбор карты рождения, выбор благоприятной даты, активация удачи. Онлайн и офлайн.";
  }, []);

  const [form, setForm] = useState({ name: "", email: "", telegram: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setSent(true);
      setTimeout(() => {
        setForm({ name: "", email: "", telegram: "", message: "" });
        setSent(false);
      }, 4000);
    } catch (error) {
      alert("Ошибка отправки. Напишите напрямую в Telegram.");
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-glow"></div>
      <div className="contact-content">
        <h1>Связаться</h1>
        <p className="subtitle">Запишитесь на консультацию или задайте вопрос</p>

        {sent ? (
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h3>Сообщение отправлено</h3>
            <p>Я отвечу вам в течение 24 часов</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder=" " required />
              <label>Ваше имя</label>
            </div>
            <div className="input-row">
              <div className="input-group">
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder=" " required />
                <label>Email</label>
              </div>
              <div className="input-group">
                <input type="text" name="telegram" value={form.telegram} onChange={handleChange} placeholder=" " />
                <label>Telegram (@username)</label>
              </div>
            </div>
            <div className="input-group">
              <textarea name="message" value={form.message} onChange={handleChange} placeholder=" " rows="4" required />
              <label>О чём хотите поговорить?</label>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Отправить →"}
            </button>
          </form>
        )}

        <div className="direct-contact">
          <span>или напишите напрямую</span>
          <a href="https://t.me/code_bazi_qimen" target="_blank" rel="noopener noreferrer" className="telegram-link">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;