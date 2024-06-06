import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quarto05 from "../../assets/quartoMiguelito.png"
import style from "./quarto05.module.css"
import home from "../../assets/home.gif"


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
    <button className={style.home} onClick={Home}></button>
      <p className={style.tituloLocal}>Quarto do Miguelito</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <button className={style.brilho} onClick={() => setOpenPopupEvidencia(!openPopupEvidencia)}></button>
    <button className={style.monitor} onClick={() => setOpenPopupComputador(!openPopupComputador)}></button>
    <button className={style.sangue} onClick={() => setOpenPopupSangue(!openPopupSangue)}></button>

    {
      openPopupSangue &&
    <div className={style.sanguePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupSangue(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

    {
      openPopupEvidencia &&
    <div className={style.evidenciaPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupEvidencia(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

{
      openPopupComputador &&
    <div className={style.computadorPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupComputador(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

  </div>
};