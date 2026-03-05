import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar(){
    return(
<nav className="navbar">
    <h2> Карта возможностей</h2>
<div>
   <Link to="/about">Обо мне</Link>
   <Link to= "/"> Главная </Link>
   <Link to= "/forecast"> Энергии</Link>
   <Link to= "/fengshui"> Феншуй</Link>
   <Link to= "/service"> Услуги и цены</Link>
   <Link to= "/contact"> Контакты</Link>
</div>
</nav>
    )
}

export default Navbar;