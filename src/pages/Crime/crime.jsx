import crime from "../../assets/cenaCrime.png"
import style from "./crime.module.css"


export const PortaCrime = () => {


  return <div>
      <img className={style.crime} src={crime} alt="cena do crime" />
  </div>
};