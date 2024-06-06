import { useNavigate } from 'react-router-dom';
import crime from "../../assets/cenaCrime.png"
import style from "./crime.module.css"
import home from "../../assets/home.gif"
import { useState } from 'react';


export const PortaCrime = () => {
  const navigate = useNavigate();
  const [openPopupPorta ,setOpenPopupPorta] = useState(false)
  const [openPopupFerida ,setOpenPopupFerida] = useState(false)
  function Home() {
    navigate('../corredor');
  }

  return <div>
      <img className={style.crime} src={crime} alt="cena do crime" />
      <button className={style.home} onClick={Home}></button>
      <p className={style.tituloLocal}>Cena do Crime</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <button className={style.ferida} onClick={() => setOpenPopupFerida(!openPopupFerida)}></button>
    <button className={style.porteira} onClick={() => setOpenPopupPorta(!openPopupPorta)}></button>

    {
      openPopupPorta &&
    <div className={style.portaPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Porteira Velha</h2>
        <button onClick={()=> setOpenPopupPorta(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Atras dela há uma porta trancada.</p>
    </div>
    }

    {
      openPopupFerida &&
    <div className={style.feridaPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Ferimento da Vítma</h2>
        <button onClick={()=> setOpenPopupFerida(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Que horrível! Parece ser um corte, e tem terra em volta dele.</p>
    </div>
    }


  </div>
};