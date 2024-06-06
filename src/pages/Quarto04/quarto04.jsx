import { useNavigate } from 'react-router-dom';
import quarto04 from "../../assets/quartoLorencini.png"
import style from "./quarto04.module.css"
import home from "../../assets/home.gif"


export const QuartoLorencini = () => {

  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }

  return <div>
      <div>
        <img className={style.quarto04} src={quarto04} alt="Quarto do Lorencini" />
      </div>
      <button className={style.home} onClick={Home}></button>
      <p className={style.tituloLocal}>Quarto do Lorencini</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <button className={style.balde}></button>
    <button className={style.computador}></button>
    <button className={style.dever}></button>
  </div>
};