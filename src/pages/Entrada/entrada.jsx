import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Button from '../../components/button'
import entrada1 from "../../assets/entrada.png"
import style from "./entrada.module.css";
import PopUpIntro from '../../components/PopUp/popUpIntro.jsx'
import { UserContext } from '../../service/userContext.jsx';

export const Entrada = () => {
  
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const {user} = useContext(UserContext);

  function Corredor() {
    navigate('../corredor');
  }

  return <div>
        <div>
          <img className={style.entrada} src={entrada1} alt="frente de uma casa" />
        </div>
        <Button title="" className={style.portaEntrada} onClick={Corredor}/>
        
        <PopUpIntro  style={{position:"absolute", top: 150, left: 260, width: 400, height: 40}}
        title=""
        >
        <p className={style.intro}>Olá detetive { user }, bem vindo(a) a república... </p>
        </PopUpIntro>

    
  </div>
};