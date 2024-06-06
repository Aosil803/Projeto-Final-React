import quarto01 from "../../assets/quartoAlex.png"
import style from "./quarto01.module.css"
import { useNavigate } from 'react-router-dom';
import home from "../../assets/home.gif"


export const QuartoAlex = () => {
  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }


  return <div>
      <img className={style.quarto01} src={quarto01} alt="Quarto do Alex" />
      <p className={style.tituloLocal}>Quarto Alex</p>
      <button className={style.home} onClick={Home}></button>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>

  </div>
};