import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { practicesData } from "../data";
import "./Home.css";

const practices = practicesData;

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Консультации по Ба Цзы, Феншуй, Цимень | Юлия — китайский астролог";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Консультации по Ба Цзы, Феншуй и Цимень. Разбор карты рождения, выбор благоприятной даты, активация удачи. Китайский астролог Юлия. Онлайн и офлайн.";
  }, []);

  return (
    <div className="home-page">
    <div className="home-bg">
    <img src="/harmony.jpg" alt="фон японский сад" />
  </div>
  <div className="home-card">
    <p className="home-eyebrow">Бацзы · Цимень · Фэншуй</p>
    <p className="home-desc">
      Помогаю найти ясность, принять верные решения и выстроить жизнь в потоке удачи — через древние китайские практики.
    </p>
    <div className="home-btns">
      <button className="home-btn-primary" onClick={() => navigate("/service")}>
        Записаться на консультацию
      </button>
      <button className="home-btn-secondary" onClick={() => navigate("/about")}>
        Обо мне
      </button>
    </div>
  </div>


      <div className="home-practices">
        <p className="practices-label">С чем я работаю</p>
        <div className="practices-grid">
          {practices.map((p) => (
            <div className="practice-card" key={p.id} onClick={() => navigate("/service")}>
              <span className="practice-icon">{p.icon}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="practice-link">Узнать подробнее →</span>
            </div>
          ))}
        </div>
      </div>
     

    </div>
  );
}

export default Home;