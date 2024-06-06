import { useNavigate } from 'react-router-dom';
import corredor from "../../assets/corredor.png"
import style from "./corredor.module.css"
import home from "../../assets/home.gif"

export const Corredor = () => {

  const navigate = useNavigate();


  function PortaCrime() {
    navigate('../crime');
  }
  function PortaBonas() {
    navigate('../quartoBonas');
  }
  function PortaAlex() {
    navigate('../quartoAlex');
  }
  function PortaYuka() {
    navigate('../quartoYuka');
  }
  function PortaMiguelito() {
    navigate('../quartoMiguelito');
  }
  function PortaLorencini() {
    navigate('../quartoLorencini');
  }
  function Home() {
    navigate('../corredor');
  }

  return <div>
        <div>
        <img className={style.corredor} src={corredor} alt="corredor de uma casa" />
        </div>
        <button className={style.portaCrime} onClick={PortaCrime}></button>
        <button className={style.portaBonas} onClick={PortaBonas}></button>
        <button className={style.portaAlex} onClick={PortaAlex}></button>
        <button className={style.portaYuka} onClick={PortaYuka}></button>
        <button className={style.portaMiguelito} onClick={PortaMiguelito}></button>
        <button className={style.portaLorencini} onClick={PortaLorencini}></button>
        <button className={style.home} onClick={Home}></button>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
  </div>
};