import { useContext } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';
  import { getConselhoById } from '../../service';
  import { UserContext } from '../../service/userContext.jsx';
  import corredor from "../../assets/corredor.png"
  import style from "./corredor.module.css"
  import home from "../../assets/home.gif"
  import lupa from "../../assets/lupa.gif"
  import Button from '../../components/button.jsx'
  import alexCorredor from '../../assets/dialogo/AlexNormal.png'



  export const Corredor = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
  
    function PortaCrime() {
      navigate('../crime');
    }
    function PortaBonas() {
      navigate('../quartoBonas');
    }
    function PortaAlex () {
      navigate('../quartoAlex');
    }
    function PortaYuka() {
      navigate('../quartoYuka');
    }
    function PortaMiguelito() {
      navigate('../quartoMiguelito');
    }
    function PortaLorencini() {
      navigate('../quartoLorencini');
    }
    function Home() {
      navigate('../corredor');
    }
  
    async function mostraConselho(){
      try {
        const conselho = await getConselhoById();
         toast.success(conselho.data.slip.advice) // necessário entrar em cada parte do retorno da api pra pegar advice
        } catch(error){
          console.error(error);
      }
    }
  
    return <div>
          <div>
          <img className={style.corredor} src={corredor} alt="corredor de uma casa" />
          </div>
          <p className={style.tituloLocal}>Corredor</p>
          <Button className={style.portaCrime} onClick={PortaCrime}/>
          <Button className={style.portaBonas} onClick={PortaBonas}/>
          <Button className={style.portaAlex} onClick={PortaAlex}/>
          <Button className={style.portaYuka} onClick={PortaYuka}/>
          <Button className={style.portaMiguelito} onClick={PortaMiguelito}/>
          <Button className={style.portaLorencini} onClick={PortaLorencini}/>
          <Button className={style.home} onClick={Home}/>
          <div className={style.containerIcon}>
            <a href="#" onClick={Home}>
              <img className={style.homeIcon} src={home} alt="icon home" />
            </a>
          </div>
          <div className={style.containerLupa}>
            <a href="#" onClick={mostraConselho}>
              <img className={style.lupaIcon} src={lupa} alt="icon Lupa" />
            </a>
          </div>
          
          <img className={style.alexIntroCorredor} src={alexCorredor}alt="" />
          <div className={style.falaAlexInicial}>
            <p>Olá, detetive <strong>{ user }</strong>. Seja bem-vindo(a), sou Alex, dono desta república. O delegado já nos avisou sobre sua visita...
            Fique à vontade para investigar. Mesmo não gostando muito da vítima, vamos tentar cooperar o máximo possível!
            Por ordens dos policiais, iremos ficar nos nossos quartos até a investigação terminar..</p>
          </div>
    </div>
  };
