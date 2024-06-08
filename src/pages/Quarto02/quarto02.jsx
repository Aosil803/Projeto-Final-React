import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quarto02 from "../../assets/quartoBonas.png"
import style from "./quarto02.module.css"
import home from "../../assets/home.gif"
import note from "../../assets/quartoBonas/notebook.png"
import diario from "../../assets/quartoBonas/diario.png"
import canivete from "../../assets/quartoBonas/canivete.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp.jsx'


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
      <Button className={style.home} onClick={Home}/>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
      <Button className={style.notebook} onClick={() => setOpenPopupLapTop(!openPopupLapTop)}/>
      <Button className={style.diario} onClick={() => setOpenPopupLivro(!openPopupLivro)}/>
      <Button className={style.canivete} onClick={() => setOpenPopupCanivete(!openPopupCanivete)}/>

      <PopUp  style={{position:"absolute", top: 200, left: 700, width: 250}}
        open={openPopupLapTop}
        onClose={() => setOpenPopupLapTop(false)}
        title="Notebook Quebrado"
      >
        <img src={note} alt="Notebook" />
      <p>Não está ligando. O teclado está com água.</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 420, left: 400, width: 250}}
        open={openPopupLivro}
        onClose={() => setOpenPopupLivro(false)}
        title="Diário Pessoal"
      >
        <img src={diario} alt="Diário" />
        <p>"Que ódio que me dá quando isso acontece!"..."Será que foi necessário?"</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 320, right: 1, width: 250}}
        open={openPopupCanivete}
        onClose={() => setOpenPopupCanivete(false)}
        title="Canivete Suiço"
      >
        <img src={canivete} alt="Canivete" />
        <p>Um canivete aparentemente novo, poucas marcas de uso. Parece ter uma linha presa na lâmina.</p>
      </PopUp>

  </div>
};