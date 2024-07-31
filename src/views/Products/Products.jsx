import './Products.css';
import Navbar from "../../components/NavBar/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

export default function Products() {
    const [comidas, setComidas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const obtenerComidas = async () => {
            let listaComidas = [];
            for (let i = 0; i < 15; i++) {
                try {
                    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                    const data = response.data;
                    if (data.meals && data.meals.length > 0) {
                        listaComidas.push(data.meals[0]);
                    }
                } catch (error) {
                    console.error('Error de API:', error);
                }
            }
            setComidas(listaComidas);
            setIsLoading(false); // Datos cargados, oculta el loader
        };

        obtenerComidas();
    }, []);

    return (
        <div id='ProductsContainer'>
            <Navbar />
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <div id='cardContainer'>
                    {comidas.map((comida, index) => (
                        <div key={index} className='card'>
                            <img src={comida.strMealThumb} alt={comida.strMeal} />
                            <h3>{comida.strMeal}</h3>
                            <p>{comida.strCategory}</p>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}
