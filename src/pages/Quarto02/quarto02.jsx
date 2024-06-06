import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto02 from "../../assets/quartoBonas.png"
import style from "./quarto02.module.css"
import home from "../../assets/home.gif"


export const QuartoBonas = () => {
  const [openPopupLapTop ,setOpenPopupLapTop] = useState(false)
  const [openPopupLivro ,setOpenPopupLivro] = useState(false)
  const [openPopupCanivete ,setOpenPopupCanivete] = useState(false)
  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }


  return <div>
      <div>
        <img className={style.quarto02} src={quarto02} alt="Quarto do Bonas" />
      </div>
      <p className={style.tituloLocal}>Quarto do Bonas</p>
      <button className={style.home} onClick={Home}></button>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
      <button className={style.notebook} onClick={() => setOpenPopupLapTop(!openPopupLapTop)}></button>
      <button className={style.diario} onClick={() => setOpenPopupLivro(!openPopupLivro)}></button>
      <button className={style.canivete} onClick={() => setOpenPopupCanivete(!openPopupCanivete)}></button>

    {
      openPopupLapTop &&
    <div className={style.lapTopPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupLapTop(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

    {
      openPopupLivro &&
    <div className={style.livroPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupLivro(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

{
      openPopupCanivete &&
    <div className={style.canivetePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupCanivete(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

  </div>
};