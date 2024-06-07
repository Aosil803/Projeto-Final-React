import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto01 from "../../assets/quartoAlex.png"
import style from "./quarto01.module.css"
import home from "../../assets/home.gif"
import cofre from "../../assets/quartoAlex/cofre.png"
import chave from "../../assets/quartoAlex/chaves.png"
import documento from "../../assets/quartoAlex/documento.png"
import  Button from '../../components/button'


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
      <Button className={style.home} onClick={Home}/>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.caixaArmario} onClick={() => setOpenPopupCofre(!openPopupCofre)}/>
    <Button className={style.gaveta} onClick={() => setOpenPopupGaveta(!openPopupGaveta)}/>
    <Button className={style.chave} onClick={() => setOpenPopupChave(!openPopupChave)}/>

    {
      openPopupCofre &&
    <div className={style.cofrePopUp}>
      <div className={style.caixaPopUpInterna}>
      <h2 className={style.tituloPop}>Cofre Antigo<span className={style.spanPop} onClick={()=> setOpenPopupCofre(false)}>X</span></h2>
        <img src={cofre} alt="Cofre antigo" />
      </div>
      <p className={style.textoPopUp}>Dentro dele você encontra MUITO dinheiro.</p>
    </div>
    }

    {
      openPopupGaveta &&
    <div className={style.gavetaPopUp}>
      <div className={style.caixaPopUpInterna}>
      <h2 className={style.tituloPop}>Gaveta<span className={style.spanPop} onClick={()=> setOpenPopupGaveta(false)}>X</span></h2>
        <img src={documento} alt="Ação judicial" />
      </div>
      <p className={style.textoPopUp}>Há uma Ação Judicial dentro dela. Tem o nome Fred e Alex no documento.</p>
    </div>
    }

    {
      openPopupChave &&
    <div className={style.chavePopUp}>
      <div className={style.caixaPopUpInterna}>
      <h2 className={style.tituloPop}>Chaves<span className={style.spanPop} onClick={()=> setOpenPopupChave(false)}>X</span></h2>
        <img src={chave} alt="Chaves do Jardim" />
      </div>
      <p className={style.textoPopUp}>Uma chave um pouco antiga. Há uma etiqueta nela escrito <span>Depósito Jadim dos fundos</span>. </p>
    </div>
    }



  </div>
};