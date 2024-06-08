import { useNavigate } from 'react-router-dom';
import corredor from "../../assets/corredor.png"
import style from "./corredor.module.css"
import home from "../../assets/home.gif"
import  Button from '../../components/button'
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
        <p className={style.tituloLocal}>Corredor</p>
        <Button className={style.portaCrime} onClick={PortaCrime}/>
        <Button className={style.portaBonas} onClick={PortaBonas}/>
        <Button className={style.portaAlex} onClick={PortaAlex}/>
        <Button className={style.portaYuka} onClick={PortaYuka}/>
        <Button className={style.portaMiguelito} onClick={PortaMiguelito}/>
        <Button className={style.portaLorencini} onClick={PortaLorencini}/>
        <Button className={style.home} onClick={Home}/>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
  </div>
};