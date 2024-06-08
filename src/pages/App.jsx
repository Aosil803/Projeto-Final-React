import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser, getUser } from '../service/usePost';
import { UserProvider } from '../service/userContext';
import style from './style.module.css';
import opening from '../assets/republicaLogo.mp4';
import backGround from '../assets/menuInicial.mp4';
import icone from '../assets/avatar.gif';
import { UserContext } from '../service/userContext.jsx';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const usuario = {
    email: email,
    senha: senha,
    nickname: nickname
  };

  const userExists = async (email, senha) => {
    try {
      const response = await getUser();
      const usuarios = response.data;
      const usuario = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

      console.log("Usuário encontrado: ", usuario); // log para depuração

      return usuario ? true : false;

    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
      return false;
    }
  };

  const handleRegister = async (e) => { 
    e.preventDefault();
    try {
      await postUser(usuario);
      setMessage(<p>ㅤㅤㅤSucesso!<br /> Agora logue para iniciar!</p>); 
      setError(null);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      setError('Erro ao registrar usuário. Tente novamente.');
  }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const usuario = await userExists(email, senha);
    if (usuario) {
      setUser(nickname);
      navigate('../entrada');
    } else {
      setMessage('');
      setError('Email ou senha inválidos'); // aparece dentro do card o erro
    }
  };

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

  const Entrada = () => {
    navigate('../entrada');
  };

  return (
    <>
     <UserProvider>
      <div className={style.mainContainer}>
        <video className={style.opening} src={opening} autoPlay muted><span className={style.span01}></span></video>
        <span className={style.span01}></span>
        <video className={style.backGroundVideo} src={backGround} loop autoPlay muted></video>
        <nav className={style.navBarMenu}>
          <ul className='animate__animated animate__fadeInLeft animate__delay-5s'>
            <div>
              <li><a href="#" onClick={Entrada}>A República</a></li>
              <p className={style.paragrafo}>Ajude a desvendar um crime</p>
            </div>
          </ul>
        </nav>
        <div className={style.iconContainer + ' animate__animated animate__fadeInRight animate__delay-5s'}>
          <a href="#"><img className={style.iconAvatar} src={icone} alt="" onClick={() => setOpenForm(!openForm)} /></a>
        </div>

        {
          openForm &&
          <form action="#" className={style.formContainer}>
            <h2 className={style.h2Style}>REGISTER / LOGIN</h2>
            <div className={style.underline}></div>
            <div className={style.inputData}>
              <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="#">Email</label>
            </div>
            <section>
              <div className={style.inputData}>
                <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                <label htmlFor="#">Senha</label>
              </div>
            </section>
            <div className={style.inputData}>
              <input type="text" placeholder='NickName' value={nickname} onChange={(e) => setNickname(e.target.value)} />
              <label htmlFor="#"></label>
            </div>
            <div className={style.divButton}>
              <button className={style.buttonStyle} onClick={handleRegister}><span>Register</span></button>
              <button className={style.buttonStyle} onClick={handleLogin}><span>Login</span></button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
          </form>
        }
      </div>
      </UserProvider>
    </>
  );
}

export default App;
