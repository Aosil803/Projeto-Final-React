import crime from "../../assets/cenaDoCrime.png"
import style from "./crime.module.css"


export const Entrada = () => {


  return <div>
      <img className={style.crime} src={crime} alt="cena do crime" />
  </div>
};