import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { getConselhoById } from '../service';
import { postUser } from '../service/usePost';
import style from './style.module.css'
import opening from '../assets/republicaLogo.mp4'
import backGround from '../assets/menuInicial.mp4'
import icone from '../assets/avatar.gif'

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  useEffect(() =>{
    getConselhoById().
      then((response) => 
        console.log(response)).
      catch((error) => 
        console.log(error));  
  }, []);

  const handleSubmit = (e) => { 
    e.preventDefault();//tirar
    const usuario = {
      email: email,
      senha: senha
      
    };
    postUser(usuario);

  }

  /*---videoIntroTransição---*/
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

  function Entrada() {
    navigate('../entrada');
  }

  /*---formulario---*/
  const [openForm ,setOpenForm] = useState(false)

  return (
    <>
      <div className={style.mainContainer}>
        <video className={style.opening} src={opening} autoPlay muted><span className={style.span01}></span></video>
        <span className={style.span01}></span>
        <video className={style.backGroundVideo} src={backGround}  loop autoPlay muted></video>
        <nav className={style.navBarMenu}>
          <ul className='animate__animated animate__fadeInLeft animate__delay-5s'>
            <div>
              <li><a href="#" onClick={Entrada}>A República</a></li>
              <p className={style.paragrafo}>Ajude a desvendar um crime</p>
            </div>
          </ul>
            {/* <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form> */}
        </nav>
        <div className={style.iconContainer + ' animate__animated animate__fadeInRight animate__delay-5s'}>
          <a href="#"><img className={style.iconAvatar} src={icone} alt="" onClick={() => setOpenForm(!openForm)}/></a>
        </div>

        {
          openForm &&
          <form action="#" className={style.formContainer}>
            <h2 className={style.h2Style}>REGISTER / LOGIN</h2>
            <div className={style.underline}></div>
            <div className={style.inputData}>
              <input type="text" required />
              <label htmlFor="#">Email</label>
            </div>
            <section>
              <div className={style.inputData}>
                <input type="password" required/>
                <label htmlFor="#">Senha</label>
              </div>
            </section>
            <div className={style.inputData}>
              <input type="text" placeholder='NickName'/>
              <label htmlFor="#"></label>
            </div>
            <div className={style.divButton}>
              <button className={style.buttonStyle}><span>Register</span></button>
              <button className={style.buttonStyle}><span>Login</span></button>
            </div>
          </form>
        }
      </div>
    </>
  )
}

export default App
