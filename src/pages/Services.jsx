import { useState } from "react";
import { data } from "../data";
import "./Services.css";

function Services() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = data.filter((s) => {
    if (filter === "all") return true;
    if (filter === "mini") return s.price <= 20;
    if (filter === "premium") return s.price > 20;
    return true;
  });

  return (
    <div className="services-page">
      <h1 className="services-title">Услуги</h1>

      <div className="filter-buttons">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>Все</button>
        <button className={`filter-btn ${filter === "mini" ? "active" : ""}`} onClick={() => setFilter("mini")}>До 20 $</button>
        <button className={`filter-btn ${filter === "premium" ? "active" : ""}`} onClick={() => setFilter("premium")}>Премиум</button>
      </div>

      <div className="services-grid">
        {filtered.map((s) => (
          <div className="service-card" key={s.id} onClick={() => setSelected(s)}>
            <span className="service-name">{s.service}</span>
            <span className="service-price">{s.price.toLocaleString()} $</span>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <h2 className="modal-title">{selected.service}</h2>
            <p className="modal-desc">{selected.description}</p>
            <span className="modal-price">{selected.price.toLocaleString()} $</span>
            <br />
            <a 
              href="https://t.me/code_bazi_qimen"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
            >
              Записаться в Telegram →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;