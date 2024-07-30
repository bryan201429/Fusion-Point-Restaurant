import './Home.css'
import wood from '../../assets/backgrounds/blackWood.jpg'
import food1 from '../../assets/backgrounds/FoodHome1.png'
import carbon from '../../assets/backgrounds/carbon.png'
import smoke from '../../assets/backgrounds/smoke.png'

import {Link} from 'react-router-dom';
export default function Home(){

    return(
        <div id='HomeContainer'>
            <img src={food1} id='img1'></img>
            <img src={carbon} alt="carbon" id='img2'/>
            <div className='smokeWrap'>
                <img src={smoke} alt="smoke" className='smoke'/>
            </div>
            <div className='smokeWrap'>
                <img src={smoke} alt="smoke2" className='smoke2'/>
            </div>
            <div className='smokeWrap'>
                <img src={smoke} alt="smoke3" className='smoke3'/>
            </div>
            

            <section id='titleContainer'>
            <h1> FUSION POINT</h1>
            <h3> Bienvenido al festín de diversidad culinaria. Ven y explora un menú que desafía los límites y celebra la variedad de la cocina 
                global en un ambiente acogedor y moderno.  </h3>
            <Link to='/Products' id='inbtn'>EXPERIMENTAR</Link>
            
            </section>

        </div>
    )

}