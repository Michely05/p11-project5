import '../Components/Catalog.css'
import React, { useState, useEffect } from "react";
import { DecathlonApi } from '../api/DecathlonApi';

const Catalog = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await(new DecathlonApi()).dameLasPeliculas();
                if (response.ok) {
                    const data = await response.json();
                    setItems(data);
                } else {
                    console.error("Ha habido un error al cargar los datos.");
                }
            } catch (error) {
                console.error ("Ha habido un error al cargar los datos.", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Top ventas del momento</h2>
            <ul className="Carrusel">
                {items.slice(0, 10).map((item, index) => (
                    <li className="card" key={index}>
                        <div className="cardContent">
                            <img className="imageItem" src={item.imagen} alt="imagen del producto"/>
                            <p id="brand">{item.marca}</p>
                            <p id="price">{item.precio + " €"}</p>
                            <p id="name">{item.nombre}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalog;