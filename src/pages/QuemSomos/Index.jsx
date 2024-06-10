import style from "./style.module.css";
import bianco from "../../assets/quemSomos/desenvolvedores/iconb.png";
import yuka from "../../assets/quemSomos/desenvolvedores/icony.png";
import miguelito from "../../assets/quemSomos/desenvolvedores/iconm.png";
import alexandre from "../../assets/quemSomos/desenvolvedores/icona.png";
import bonafe from "../../assets/quemSomos/desenvolvedores/iconbo.png";
import github from "../../assets/quemSomos/social/github.png";
import linkedin from "../../assets/quemSomos/social/linkedin.png";
//import bg from "../../assets/bg/spacebg.mp4";

export const QuemSomos = () => {
  return (
    <div className={style.absoluto}>
      <div className={style.toppage}><h1>Desenvolvedores:</h1></div>
      <div className={style.midpage}>
        <div className={style.devlist}>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={yuka} alt="Yuka" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/yuka" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={bonafe} alt="Bonafe" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/bonafe" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/bonafe" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={miguelito} alt="Miguelito" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/miguel-caldas-0359802a5/" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Biguelisto" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={bianco} alt="Bianco" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/bianco" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/bianco" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className={style.devContainer}>
            <img className={style.devIcon} src={alexandre} alt="Alexandre" />
            <div className={style.socialIcons}>
              <a href="https://www.linkedin.com/in/alexandre" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/alexandre" target="_blank" rel="noopener noreferrer">
                <img className={style.socialIcon} src={github} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};