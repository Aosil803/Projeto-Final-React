import { useNavigate } from 'react-router-dom';
import quarto03 from "../../assets/quartoYuka.png"
import style from "./quarto03.module.css"
import home from "../../assets/home.gif"
export const QuartoYuka = () => {

  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }


  return <div>
    <div>
    <img className={style.quarto03} src={quarto03} alt="Quarto da yuka" />
    </div>
    <p className={style.tituloLocal}>Quarto Yuka</p>
    <button className={style.caixa}></button>
    <button className={style.gato}></button>
    <button className={style.sangue}></button>
    <button className={style.home} onClick={Home}></button>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>

  </div>
};