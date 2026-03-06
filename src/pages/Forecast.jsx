import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data";
import "./Forecast.css";

function Forecast() {
  const navigate = useNavigate();
  const [feels, setFeels] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const { id, image, nameFeeling, title, service, price, description } = data[feels];

  useEffect(() => {
  document.title = `${service} — консультация по Ба Цзы | Юлия`;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
  meta.content = `${service}. ${description.substring(0, 120)}. Консультация онлайн и офлайн.`;
}, [feels]);

  const previosFeels = () => {
    setFeels((feels) => {
      feels--;
      if (feels < 0) return data.length - 1;
      return feels;
    });
    setShowMore(false);
  };

  const nextFeels = () => {
    setFeels((feels) => {
      feels++;
      if (feels > data.length - 1) feels = 0;
      return feels;
    });
    setShowMore(false);
  };

  return (
    <div className="home-page">
      <div className="home-bg">
        <img key={id} src={`/${image}`} alt="feeling" />
      </div>

      <h1 className="home-title">Энергии</h1>

      <div className="home-card">
        <h2>{nameFeeling}</h2>
        <h2>{title}</h2>
        <p>{showMore ? description : description.substring(0, 88) + '....'}</p>
        <button className="btn-show" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Скрыть' : 'Показать подробнее'}
        </button>
        {showMore && (
          <button className="btn-navigate" onClick={() => navigate("/service")}>
            Записаться — {price.toLocaleString()} $ →
          </button>
        )}
      </div>

      <div className="home-nav">
        <button onClick={previosFeels}>←</button>
        <button onClick={nextFeels}>→</button>
      </div>
    </div>
  );
}

export default Forecast;