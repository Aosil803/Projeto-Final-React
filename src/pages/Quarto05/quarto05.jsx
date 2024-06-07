import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quarto05 from "../../assets/quartoMiguelito.png"
import style from "./quarto05.module.css"
import home from "../../assets/home.gif"
import sangue from "../../assets/quartoMiguel/sangue.png"
import foice from "../../assets/quartoMiguel/foice.png"
import crime from "../../assets/quartoMiguel/crime.png"
import  Button from '../../components/button'


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

    {
      openPopupSangue &&
    <div className={style.sanguePopUp}>
      <div className={style.caixaPopUpInterna}>
        <h2 className={style.tituloPop}>Isso é Sangue?!<span className={style.spanPop} onClick={()=> setOpenPopupSangue(false)}>X</span></h2>
        <img src={sangue} alt="Mancha de sangue" />
      </div>
      <p className={style.textoPopUp}>O travesseiro e parte do edredom estão com manchas de sangue, o que aconteceu?</p>
    </div>
    }

    {
      openPopupEvidencia &&
    <div className={style.evidenciaPopUp}>
      <div className={style.caixaPopUpInterna}>
      <h2 className={style.tituloPop}>Foice de jardim<span className={style.spanPop} onClick={()=> setOpenPopupEvidencia(false)}>X</span></h2>
        <img src={foice} alt="Foice de jardim" />
      </div>
      <p className={style.textoPopUp}>Ela está com cheiro de sabão. </p>
    </div>
    }

{
      openPopupComputador &&
    <div className={style.computadorPopUp}>
      <div className={style.caixaPopUpInterna}>
       <h2 className={style.tituloPop}>Computador Ligado!<span className={style.spanPop} onClick={()=> setOpenPopupComputador(false)}>X</span></h2>
        <img src={crime} alt="Computador ligado" />
      </div>
      <p className={style.textoPopUp}>Está aberto em um site de resenhas de anime.</p>
    </div>
    }

  </div>
};