import { useEffect } from 'react'
import style from './style.module.css'
import opening from '../assets/republicaLogo.mp4'
import backGround from '../assets/lua.mp4'

function App() {
  
  useEffect(() => {
    const introductionVideo = document.querySelector('.' + style.opening);
    const backgroundVideo = document.querySelector('.' + style.backGround);
  
    introductionVideo.play();
  
    introductionVideo.addEventListener('ended', () => {
      introductionVideo.classList.add(style.hidden);
      backgroundVideo.style.opacity = 1; 
    });
  
    return () => {
      introductionVideo.removeEventListener('ended', () => {});
    };
  }, []);

  return (
    <>
      <div className={style.mainContainer}>
        <video className={style.opening} src={opening} autoPlay muted>A República</video>
        <video className={style.backGroundVideo} src={backGround}  loop autoPlay muted></video>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
