import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto02 from "../../assets/quartoBonas.png"
import style from "./quarto02.module.css"
import home from "../../assets/home.gif"
import note from "../../assets/quartoBonas/notebook.png"
import diario from "../../assets/quartoBonas/diario.png"
import canivete from "../../assets/quartoBonas/canivete.png"


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
      <h2 className={style.tituloPop}>Notebook <span className={style.spanPop} onClick={()=> setOpenPopupLapTop(false)}>X</span></h2>
        <img  src={note} alt="Notebook" />
      </div>
      <p className={style.textoPopUp}>Não está ligando. O teclado está com água.</p>
    </div>
    }

    {
      openPopupLivro &&
    <div className={style.livroPopUp}>
      <div className={style.caixaPopUpInterna}>
      <h2 className={style.tituloPop}>Diário Pessoal<span className={style.spanPop} onClick={()=> setOpenPopupLivro(false)}>X</span></h2>
        <img  src={diario} alt="Diário Pessoal" />
      </div>
      <p className={style.textoPopUp}> "Que ódio que me dá quando isso acontece!"..."Será que foi necessário?"</p>
    </div>
    }

{
      openPopupCanivete &&
    <div className={style.canivetePopUp}>
      <div className={style.caixaPopUpInterna}>
      <h2 className={style.tituloPop}>Canivete Pessoal<span className={style.spanPop} onClick={()=> setOpenPopupLivro(false)}>X</span></h2>
        <img  src={canivete} alt="Canivete" />
      </div>
      <p className={style.textoPopUp}>Um canivete aparentemente novo, poucas marcas de uso. Parece ter uma linha presa na lâmina.</p>
    </div>
    }

  </div>
};