  import { useNavigate } from 'react-router-dom';
  import corredor from "../../assets/corredor.png"
  import style from "./corredor.module.css"
  import home from "../../assets/home.gif"
  import lupa from "../../assets/lupa.gif"
  import { getConselhoById } from '../../service';
  import { toast } from 'react-toastify';

  export const Corredor = () => {

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
          <button className={style.portaCrime} onClick={PortaCrime}></button>
          <button className={style.portaBonas} onClick={PortaBonas}></button>
          <button className={style.portaAlex} onClick={PortaAlex}></button>
          <button className={style.portaYuka} onClick={PortaYuka}></button>
          <button className={style.portaMiguelito} onClick={PortaMiguelito}></button>
          <button className={style.portaLorencini} onClick={PortaLorencini}></button>
          <button className={style.home} onClick={Home}></button>
          <div className={style.containerIcon}>
            <a href="#" onClick={Home}>
              <img className={style.homeIcon} src={home} alt="icon home" />
            </a>
          </div>
          <div className={style.containerLupa}>
            <a href="#" onClick={mostraConselho}>
              <img className={style.lupaIcon} src={lupa} alt="icon home" />
            </a>
          </div>
    </div>
  };
