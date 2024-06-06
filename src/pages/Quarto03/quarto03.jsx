import quarto03 from "../../assets/quartoYuka.png"
import style from "./quarto03.module.css"

export const QuartoYuka = () => {

  return <div>
    <div>
    <img className={style.quarto03} src={quarto03} alt="Quarto da yuka" />
    </div>
    <button className={style.caixa}></button>
    <button className={style.gato}></button>
    <button className={style.sangue}></button>

  </div>
};