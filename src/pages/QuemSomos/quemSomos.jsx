import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../../assets/quemSomosBackground.mp4'


export const QuemSomos = () => {
  const navigate = useNavigate();

  const App = () => navigate('../home');

  return <div>
    <div className={backgroundVideo}>
      <div>
          <button onClick={App}></button>
      </div>
    </div>
  </div>
}