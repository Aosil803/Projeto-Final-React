import quarto02 from "../../assets/quartoBonas.png"
import style from "./quarto02.module.css"
import { useNavigate } from 'react-router-dom';
import home from "../../assets/home.gif"


export const QuartoBonas = () => {

  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }


  return <div>
      <div>
        <img className={style.quarto02} src={quarto02} alt="Quarto do Bonas" />
      </div>
      <p className={style.tituloLocal}>Quarto Bonas</p>
      <button className={style.home} onClick={Home}></button>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
      <button className={style.notebook}></button>
      <button className={style.diario}></button>
      <button className={style.canivete}></button>
  </div>
};