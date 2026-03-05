import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">Карта возможностей </Link>
        <button className="burger" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
        <div className="nav-links desktop">
          <Link to="/about">Обо мне</Link>
          <Link to="/">Главная</Link>
          <Link to="/forecast">Энергии</Link>
          <Link to="/fengshui">Феншуй</Link>
          <Link to="/service">Услуги и цены</Link>
          <Link to="/contact">Контакты</Link>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setOpen(false)}>✕</button>
          <Link to="/about" onClick={() => setOpen(false)}>Обо мне</Link>
          <Link to="/" onClick={() => setOpen(false)}>Главная</Link>
          <Link to="/forecast" onClick={() => setOpen(false)}>Энергии</Link>
          <Link to="/fengshui" onClick={() => setOpen(false)}>Феншуй</Link>
          <Link to="/service" onClick={() => setOpen(false)}>Услуги и цены</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Контакты</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;