import  Button from '../../components/button'
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
        <Button title="" className={style.portaEntrada} onClick={Corredor}/>
        
        <div>

        </div>
  </div>
};