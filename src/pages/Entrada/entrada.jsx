import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Button from '../../components/button'
import entrada1 from "../../assets/entrada.png"
import style from "./entrada.module.css";
import PopUp from '../../components/PopUp/popUp.jsx'
import retangulo from "../../assets/Retangulo.png"

export const Entrada = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup(false);
      }, 5000);

      return () => clearTimeout(closeTimer);
    }, 3000);

    return () => clearTimeout(openTimer);
  }, []);

  function Corredor() {
    navigate('../corredor');
  }

  return <div>
        <div>
          <img className={style.entrada} src={entrada1} alt="frente de uma casa" />
        </div>
        <Button title="" className={style.portaEntrada} onClick={Corredor}/>
        
        <PopUp  style={{position:"absolute", top: 150, left: 460}}
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        title="Porteira"
      >
        <img src={retangulo} alt="Porteira" />
      <p>Atrás dela há uma porta trancada.</p>
      </PopUp>

    
  </div>
};