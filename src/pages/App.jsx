import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import style from './style.module.css'
import opening from '../assets/republicaLogo.mp4'
import backGround from '../assets/republica.mp4' 
import { getConselhoById } from '../service';
import { postUser } from '../service/usePost';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const usuario = {
    email: "bonafe",
    senha: "lc"
  };
  
  useEffect(() =>{
    getConselhoById().
      then((response) => 
        console.log(response)).
      catch((error) => 
        console.log(error));  
  }, []);

  useEffect(() => {
    axios.post('https://6660c1015425580055b52043.mockapi.io/api/usuarios', usuario, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => { 
    e.preventDefault();
    const usuario = {
      email: email,
      senha: senha
      
    };

    postUser(usuario);
  }

  useEffect(() =>{ // ver se é necessário tirar then e catch
    getConselhoById().
      then((response) => 
        console.log(response)).
      catch((error) => 
        console.log(error));  
  }, []);// implementar no pop up

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

  return (
    <>
      <div className={style.mainContainer}>
        <video className={style.opening} src={opening} autoPlay muted><span className={style.span01}></span></video>
        <span className={style.span01}></span>
        <video className={style.backGroundVideo} src={backGround}  loop autoPlay muted></video>
        <nav className={style.navBarMenu}>
          <ul className='animate__animated animate__fadeInLeft animate__delay-5s'>
            <li><a href="#" onClick={Entrada}>A República</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Contato</a></li>
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
          </form>
           */}
        </nav>
      </div>
    </>
  )
}

export default App
