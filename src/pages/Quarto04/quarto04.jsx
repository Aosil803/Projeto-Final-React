import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import quarto04 from "../../assets/quartoLorencini.png"
import style from "./quarto04.module.css"
import home from "../../assets/home.gif"
import dever from "../../assets/quartoLorencini/dever.png"
import genshin from "../../assets/quartoLorencini/genshin.png"
import produtos from "../../assets/quartoLorencini/produtos.png"
import  Button from '../../components/button'
import PopUp from '../../components/PopUp/popUp';

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
      <Button className={style.home} onClick={Home}/>
      <p className={style.tituloLocal}>Quarto do Lorencini</p>
        <div className={style.containerIcon}>
          <a href="#" onClick={Home}>
            <img className={style.homeIcon} src={home} alt="icon home" />
          </a>
        </div>
    <Button className={style.balde} onClick={() => setOpenPopupBalde(!openPopupBalde)}/>
    <Button className={style.computador} onClick={() => setOpenPopupComputador(!openPopupComputador)}/>
    <Button className={style.dever} onClick={() => setOpenPopupDever(!openPopupDever)}/>

    <PopUp  style={{position:"absolute", top: 400, left: 160, width: 250 }}
        open={openPopupComputador}
        onClose={() => setOpenPopupComputador(false)}
        title="Computador Ligado"
      >
        <img src={genshin} alt="Computador" />
      <p>Está aberto em um jogo.</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 200, left: 590, width: 250 }}
        open={openPopupBalde}
        onClose={() => setOpenPopupBalde(false)}
        title="Produtos de Limpeza"
      >
        <img src={produtos} alt="Produtos de Limpeza" />
      <p>Sabão em pó, água sanitária e desifetante. Estão usados.</p>
      </PopUp>

      <PopUp  style={{position:"absolute", top: 370, right: 20, width: 250 }}
        open={openPopupDever}
        onClose={() => setOpenPopupDever(false)}
        title="Dever de Casa"
      >
        <img src={dever} alt="Dever de Casa" />
      <p>Todos eles estão com o nome do Fred, nota 100!</p>
      </PopUp>

  </div>
};