import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto01 from "../../assets/quartoAlex.png"
import style from "./quarto01.module.css"
import home from "../../assets/home.gif"
import cofre from "../../assets/quartoAlex/cofre.png"
import chave from "../../assets/quartoAlex/chaves.png"
import documento from "../../assets/quartoAlex/documento.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'

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

    <PopUp  style={{position:"absolute", top: 180, left: 590, width:250,}}
        open={openPopupCofre}
        onClose={() => setOpenPopupCofre(false)}
        title="Cofre"
      >
        <img src={cofre} alt="cofre" />
      <p>Dentro dele você encontra MUITO dinheiro.Atrás dela há uma porta trancada.</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 350, right: 380, width:200,}}
        open={openPopupGaveta}
        onClose={() => setOpenPopupGaveta(false)}
        title="Gaveta"
      >
        <img src={documento} alt="Ação Judicial" />
      <p>Há uma Ação Judicial dentro dela. Tem o nome Fred e Alex no documento.</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 160, right: 160, width: 200, height: 270,}}
        open={openPopupChave}
        onClose={() => setOpenPopupChave(false)}
        title="Chave"
      >
        <img src={chave} alt="Chaves do Jardim" />
      <p>Uma chave um pouco antiga. Há uma etiqueta nela escrito <span>Depósito Jadim dos fundos</span>. </p>
    </PopUp>
  </div>
};