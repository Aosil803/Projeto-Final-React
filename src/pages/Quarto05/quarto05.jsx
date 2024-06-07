import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quarto05 from "../../assets/quartoMiguelito.png"
import style from "./quarto05.module.css"
import home from "../../assets/home.gif"
import sangue from "../../assets/quartoMiguel/sangue.png"
import foice from "../../assets/quartoMiguel/foice.png"
import crime from "../../assets/quartoMiguel/crime.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'

export const QuartoMiguelito = () => {
  const navigate = useNavigate();
  const [openPopupSangue ,setOpenPopupSangue] = useState(false)
  const [openPopupEvidencia ,setOpenPopupEvidencia] = useState(false)
  const [openPopupComputador ,setOpenPopupComputador] = useState(false)

  function Home() {
    navigate('../corredor');
  }

  return <div>
    <img className={style.quarto05} src={quarto05} alt="Quarto do Miguelito" />
    <Button className={style.home} onClick={Home}/>
      <p className={style.tituloLocal}>Quarto do Miguelito</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.brilho} onClick={() => setOpenPopupEvidencia(!openPopupEvidencia)}/>
    <Button className={style.monitor} onClick={() => setOpenPopupComputador(!openPopupComputador)}/>
    <Button className={style.sangue} onClick={() => setOpenPopupSangue(!openPopupSangue)}/>

    <PopUp  style={{position:"absolute", top: 200, left: 340, width:250}}
        open={openPopupSangue}
        onClose={() => setOpenPopupSangue(false)}
        title="Sangue no Travesseiro"
      >
        <img src={sangue} alt="sangue em um travesseiro" />
      <p>O travesseiro e parte do edredom estão com manchas de sangue, o que aconteceu?</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 200, left: 800, width:250}}
        open={openPopupEvidencia}
        onClose={() => setOpenPopupEvidencia(false)}
        title="Foice"
      >
        <img src={foice} alt="foice de mão" />
      <p>Ela está com cheiro de sabão.</p>
    </PopUp>
    
    <PopUp  style={{position:"absolute", top: 200, right: 100, width:250}}
        open={openPopupComputador}
        onClose={() => setOpenPopupComputador(false)}
        title="Computador"
      >
        <img src={crime} alt="Computador" />
      <p>Está aberto em um site de resenhas de anime.</p>
    </PopUp>
  </div>
};