import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quarto04 from "../../assets/quartoLorencini.png"
import style from "./quarto04.module.css"
import home from "../../assets/home.gif"

export const QuartoLorencini = () => {

  const navigate = useNavigate();
  const [openPopupComputador ,setOpenPopupComputador] = useState(false)
  const [openPopupBalde ,setOpenPopupBalde] = useState(false)
  const [openPopupDever ,setOpenPopupDever] = useState(false)

  function Home() {
    navigate('../corredor');
  }

  return <div>
      <div>
        <img className={style.quarto04} src={quarto04} alt="Quarto do Lorencini" />
      </div>
      <button className={style.home} onClick={Home}></button>
      <p className={style.tituloLocal}>Quarto do Lorencini</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <button className={style.balde} onClick={() => setOpenPopupBalde(!openPopupBalde)}></button>
    <button className={style.computador} onClick={() => setOpenPopupComputador(!openPopupComputador)}></button>
    <button className={style.dever} onClick={() => setOpenPopupDever(!openPopupDever)}></button>

    {
      openPopupComputador &&
    <div className={style.computadorPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Computador Ligado</h2>
        <button onClick={()=> setOpenPopupComputador(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Está aberto em um jogo.</p>
    </div>
    }

    {
      openPopupBalde &&
    <div className={style.baldePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Material de Limpeza</h2>
        <button onClick={()=> setOpenPopupBalde(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Sabão em pó, água sanitária e desifetante. Estão usados.</p>
    </div>
    }

{
      openPopupDever &&
    <div className={style.deverPopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2>Dever de casa</h2>
        <button onClick={()=> setOpenPopupDever(false)}>X</button>
      </div>
      <p className={style.textoPopUp}>Todos eles estão com o nome do Fred, nota 100!</p>
    </div>
    }

  </div>
};