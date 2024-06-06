import { useNavigate } from 'react-router-dom';
import quarto05 from "../../assets/quartoMiguelito.png"
import style from "./quarto05.module.css"
import home from "../../assets/home.gif"


export const QuartoMiguelito = () => {
  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }

  return <div>
    <img className={style.quarto05} src={quarto05} alt="Quarto do Miguelito" />
    <button className={style.home} onClick={Home}></button>
      <p className={style.tituloLocal}>Quarto Miguelito</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <button className={style.brilho}></button>
    <button className={style.monitor}></button>
    <button className={style.sangue}></button>
  </div>
};