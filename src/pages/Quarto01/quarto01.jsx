import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto01 from "../../assets/quartoAlex.png"
import style from "./quarto01.module.css"
import home from "../../assets/home.gif"


export const QuartoAlex = () => {
  const navigate = useNavigate();
  const [openPopupCofre ,setOpenPopupCofre] = useState(false)
  const [openPopupGaveta ,setOpenPopupGaveta] = useState(false)
  const [openPopupChave ,setOpenPopupChave] = useState(false)
  function Home() {
    navigate('../corredor');
  }


  return <div>
      <div>
        <img className={style.quarto01} src={quarto01} alt="Quarto do Alex" />
      </div>
      <p className={style.tituloLocal}>Quarto do Alex</p>
      <button className={style.home} onClick={Home}></button>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <button className={style.caixaArmario} onClick={() => setOpenPopupCofre(!openPopupCofre)}></button>
    <button className={style.gaveta} onClick={() => setOpenPopupGaveta(!openPopupGaveta)}></button>
    <button className={style.chave} onClick={() => setOpenPopupChave(!openPopupChave)}></button>

    {
      openPopupCofre &&
    <div className={style.cofrePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupCofre(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

    {
      openPopupGaveta &&
    <div className={style.gavetaPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupGaveta(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }

    {
      openPopupChave &&
    <div className={style.chavePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>PopUp</h2>
        <button onClick={()=> setOpenPopupChave(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Caixa PopUp </p>
    </div>
    }



  </div>
};