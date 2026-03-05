import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <span className="footer-logo">Astrologia</span>
          <p>Консультации по Ба Цзы, Цимень и Фэншуй. Помогаю найти ясность и выстроить жизнь в потоке удачи.</p>
        </div>

        <div className="footer-links">
          <span className="footer-section-title">Навигация</span>
          <Link to="/">Главная</Link>
          <Link to="/about">Обо мне</Link>
          <Link to="/forecast">Энергии</Link>
          <Link to="/fengshui">Феншуй</Link>
          <Link to="/service">Услуги и цены</Link>
          <Link to="/contact">Контакты</Link>
        </div>

        <div className="footer-social">
          <span className="footer-section-title">Связаться</span>
          <a href="https://t.me/code_bazi_qimen" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="/contact">Написать сообщение</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Astrologia · Юлия</span>
        <span>Сайт создан с ❤️ Julia_MX</span>
      </div>
    </footer>
  );
}

export default Footer;