import './Contacto.css'
import rest from '../../assets/backgrounds/contactBack.jpg'
import arrow from '../../assets/icons/downArrow.svg'
export default function Contacto(){

    return(
        <div id='ContactContainer'>
            <section id='section1'>
                <img id='imgb1' src={rest}></img>
                <h1>SIGUE EL CAMINO AL SABOR SOÑADO</h1>
                <div id='conoceBtn'>
                    <h2>Conoce más</h2>
                    <img src={arrow}></img>
                </div>
                
            </section>
            <section id='section2'>


            </section>
            <section id='section3'>

                
            </section>
        </div>
    )
}