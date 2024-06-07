import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quarto03 from "../../assets/quartoYuka.png"
import style from "./quarto03.module.css"
import home from "../../assets/home.gif"
import gato from '../../assets/quartoYuka/gato.png'
import caixaPapelao from '../../assets/quartoYuka/caixa.jpg'
import sangue from '../../assets/quartoYuka/sangue.png'
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'

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
    <Button className={style.caixa} onClick={() => setOpenPopupCaixa(!openPopupCaixa)}/>
    <Button className={style.gato} onClick={() => setOpenPopupGato(!openPopupGato)}/>
    <Button className={style.sangue} onClick={() => setOpenPopupSangue(!openPopupSangue)}/>
    <Button className={style.home} onClick={Home}/>
    <div className={style.containerIcon}>
      <a href="#" onClick={Home}>
        <img className={style.homeIcon} src={home} alt="icon home" />
        </a>
    </div>

    <PopUp  style={{position:"absolute", top: 250, left: 360, width: 250,}}
        open={openPopupCaixa}
        onClose={() => setOpenPopupCaixa(false)}
        title="Caixa de Papelão"
      >
        <img src={caixaPapelao} alt="Caixa de Papelão" />
      <p>Dentro dessa caixa você encontra um spray para ferimentos, gaze e ataduras cortadas.</p>
    </PopUp>

    <PopUp  style={{position:"absolute", top: 210, right: 340, width: 300,}}
        open={openPopupGato}
        onClose={() => setOpenPopupGato(false)}
        title="Toquito"
      >
        <img src={gato} alt="Porteira" />
      <p>Ele está mancando, com uma grande ferida aberta nas costas. Tuquito te comprimenta com um miado simpático. </p>
    </PopUp>

    <PopUp  style={{position:"absolute", 
        top: 160, right: 30, width: 200,}}
        open={openPopupSangue}
        onClose={() => setOpenPopupSangue(false)}
        title="Mancha de Sangue"
      >
        <img src={sangue} alt="sangue" />
      <p>Parece que alguém sujou essa cadeira ao tentar arrastá-la.</p>
    </PopUp>
  </div>
};