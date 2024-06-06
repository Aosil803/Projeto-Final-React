import { useNavigate } from 'react-router-dom';
import crime from "../../assets/cenaCrime.png"
import style from "./crime.module.css"
import home from "../../assets/home.gif"



export const PortaCrime = () => {
  const navigate = useNavigate();

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
  </div>
};