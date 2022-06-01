import React from "react";
import "./styles/ItemVideogame.css";

function ItemVideogame(props){

    return(
        <div className="container-videogames">
            <div className="container-title">
                <h2>{props.nombre}</h2>
            </div>
            <p>{props.descripcion}</p>
            <a href={`${props.link}`}>¡Jugar Ahora!</a>
        </div>    
    );
}

export {ItemVideogame}