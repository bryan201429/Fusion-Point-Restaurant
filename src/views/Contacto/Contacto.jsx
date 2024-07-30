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
                    <h2>Número de Contacto:</h2>
                    <hr id='divider'></hr>
                    <h3>+1 (504) 123 456 789</h3>
                    <br></br>
                    <h2>Dirección:</h2>
                    <hr id='divider'></hr>
                    <h3>Avenida Volcánica 123, Tercer piso, 5° Provincia.</h3>
                    <br></br>
                    <h2>Horario de Atención:</h2>
                    <hr id='divider'></hr>
                    <h3>Lunes a Viernes: 8:00 AM - 10:00 PM</h3>
                    <h3>Sábadas, Domingos y Feriados: 8:00 AM - 9:00 PM</h3>
                    

                
                </div>
                <div className='rightDiv'>
                    <h2>Maps: </h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36270.689610188514!2d-71.425016445661!3d-16.294937959858316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424fcc9f1394f9%3A0x319d57bcb502bf3c!2sMisti!5e1!3m2!1ses!2spe!4v1722367496961!5m2!1ses!2spe" width="80%" height="80%" style={{border:0,borderRadius:'10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id='section3'>

                
            </section>
        </div>
    )
}