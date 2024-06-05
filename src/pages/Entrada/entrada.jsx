
import { useNavigate } from 'react-router-dom';
import entrada1 from "../../assets/entrada.png"
import style from "./entrada.module.css";

export const Entrada = () => {

  const navigate = useNavigate();


  function Corredor() {
    navigate('../corredor');
  }

  return <div>
        <div>
          <img className={style.entrada} src={entrada1} alt="frente de uma casa" />
        </div>
        <button className={style.portaEntrada} onClick={Corredor}></button>
  </div>
};