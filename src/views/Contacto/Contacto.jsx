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
                <div className='leftDiv'>
                    
                </div>
                <div className='rightDiv'>
                    <h2>MAPA: </h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36270.689610188514!2d-71.425016445661!3d-16.294937959858316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424fcc9f1394f9%3A0x319d57bcb502bf3c!2sMisti!5e1!3m2!1ses!2spe!4v1722367496961!5m2!1ses!2spe" width="80%" height="80%" style={{border:0,borderRadius:'10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id='section3'>

                
            </section>
        </div>
    )
}