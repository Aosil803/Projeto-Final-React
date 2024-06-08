import { useState, useEffect } from 'react';
import styles from './popUp.module.css'

const PopUpIntro = ({ style, title, imagem, children }) => {
  const [openPopup, setOpenPopup] = useState(false);
  
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopup(true);

      const closeTimer = setTimeout(() => {
        setOpenPopup(false);
      }, 660000);

      return () => clearTimeout(closeTimer);
    }, 1000);

    return () => clearTimeout(openTimer);
  }, []);

  if (!openPopup) return null;
  
  return (

    <div style={style} className={styles.PopUp}>
      <div className={styles.caixaPopUpInterna}>
        <h2 className={styles.tituloPop}>
          {title}
          <img src={imagem}/>
        </h2>
        <div className={styles.popupBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUpIntro;