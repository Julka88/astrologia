import { data } from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FengShui.css";

function FengShui() {
  const navigate = useNavigate();
  const [openItem, setOpenItem] = useState(null);

  const accordion = [
    {
      id: 1,
      title: "Что это вообще такое?",
      content: (
        <>
          <p>Феншуй — это система анализа пространства: расположение входа, сторон света, комнат, мебели, рабочих зон.</p>
          <p>Это не про талисманы и сувениры. Это про то, как вы спите, где работаете, куда смотрит вход, как движется энергия в помещении.</p>
          <p>Пространство влияет на концентрацию, здоровье, отношения и доход. Моя задача — чтобы жильё стало поддерживающим, бизнес стал прибыльнее, люди чувствовали устойчивость.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Почему это действительно влияет?",
      content: (
        <>
          <p>Мы проводим в помещениях 80–90% жизни. Если вход "съедает" энергию, кровать стоит в слабой позиции или рабочее место расположено неправильно — человек быстрее устаёт, принимает слабые решения и теряет возможности.</p>
          <p>Когда пространство выстроено грамотно — появляется устойчивость, лучше принимаются решения, меньше конфликтов, бизнес растёт быстрее.</p>
          <p>Это не мистика. Это среда, которая либо поддерживает, либо ослабляет.</p>
        </>
      )
    },
    {
      id: 3,
      title: "Как я работаю",
      content: (
        <ol className="fs-steps">
          <li>Анализирую расположение объекта по сторонам света</li>
          <li>Изучаю планировку и входную группу</li>
          <li>Смотрю распределение комнат</li>
          <li>Определяю сильные и слабые зоны</li>
          <li>Даю конкретные рекомендации по изменениям</li>
        </ol>
      )
    },
    {
      id: 4,
      title: "С чем я помогаю",
      content: (
        <ul className="fs-list">
          <li>Анализ уже купленного жилья</li>
          <li>Выбор новой квартиры, дома или офиса</li>
          <li>Помощь при долгой продаже недвижимости</li>
        </ul>
      )
    },
   
    {
      id: 5,
      title: "Формат работы",
      content: (
        <ul className="fs-list">
          <li>Очные консультации</li>
          <li>Дистанционный формат по плану и фото/видео</li>
          <li>Результат — конкретные рекомендации</li>
        </ul>
      )
    },
  ];

  return (
    <div className="fengshui-page">
      <div className="fengshui-content">

        {/* Hero */}
        <div className="fs-hero">
          <h1 className="fengshui-title">Феншуй — это не магия.</h1>
          <h2 className="fs-hero-sub">Это грамотная организация пространства.</h2>
          <p className="fs-hero-text">Ваш дом или бизнес может либо помогать вам расти, либо незаметно тормозить. Я помогаю сделать пространство работающим на вас.</p>
        </div>

        {/* Accordion */}
        <div className="fs-accordion">
          {accordion.map((item) => (
            <div
              key={item.id}
              className={`fs-item ${openItem === item.id ? "open" : ""}`}
            >
              <div
                className="fs-item-header"
                onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
              >
                <span>{item.title}</span>
                <span className="fs-arrow">{openItem === item.id ? "▲" : "▼"}</span>
              </div>
              {openItem === item.id && (
                <div className="fs-item-body">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fengshui-cta">
          <h2>Пространство либо помогает вам, либо работает против вас.</h2>
          <p>Лучше сразу выбрать сильное.</p>
          <button className="cta-btn" onClick={() => navigate("/service")}>
            Записаться на консультацию →
          </button>
        </div>

      </div>
    </div>
  );
}

export default FengShui;