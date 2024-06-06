import { useNavigate } from 'react-router-dom';
import quarto03 from "../../assets/quartoYuka.png"
import style from "./quarto03.module.css"
import home from "../../assets/home.gif"
import { useState } from 'react';


export const QuartoYuka = () => {
  const [openPopupCaixa ,setOpenPopupCaixa] = useState(false)
  const [openPopupGato ,setOpenPopupGato] = useState(false)
  const [openPopupSangue ,setOpenPopupSangue] = useState(false)
  const navigate = useNavigate();

  function Home() {
    navigate('../corredor');
  }


  return <div>
    <div>
    <img className={style.quarto03} src={quarto03} alt="Quarto da yuka" />
    </div>
    <p className={style.tituloLocal}>Quarto da Yuka</p>
    <button className={style.caixa} onClick={() => setOpenPopupCaixa(!openPopupCaixa)}></button>
    <button className={style.gato} onClick={() => setOpenPopupGato(!openPopupGato)}></button>
    <button className={style.sangue} onClick={() => setOpenPopupSangue(!openPopupSangue)}></button>
    <button className={style.home} onClick={Home}></button>
    <div className={style.containerIcon}>
      <a href="#" onClick={Home}>
        <img className={style.homeIcon} src={home} alt="icon home" />
        </a>
    </div>

    {
      openPopupCaixa &&
    <div className={style.caixaPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Caixa de papelão</h2>
        <button onClick={()=> setOpenPopupCaixa(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Dentro dessa caixa você encontra um spray para ferimentos, gaze e ataduras cortadas.</p>
    </div>
    }

    {
      openPopupGato &&
    <div className={style.gatoPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Tuquito</h2>
        <button onClick={()=> setOpenPopupGato(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Ele está mancando, com uma grande ferida aberta nas costas. Tuquito te comprimenta com um miado simpático. </p>
    </div>
    }

    {
      openPopupSangue &&
    <div className={style.sanguePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Mancha de sangue?</h2>
        <button onClick={()=> setOpenPopupSangue(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Parece que alguém sujou essa cadeira ao tentar arrastá-la.</p>
    </div>
    }
  </div>
};