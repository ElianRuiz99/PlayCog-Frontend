import axios from "axios";
import React, { useEffect } from "react";
import {ItemVideogame} from "./ItemVideogame";
import "./styles/ListVideogame.css";
import logoUser from "../assets/user.png";
import { useParams } from "react-router-dom";

function ListVideogame(){

    let params = useParams();
    let correo = params.correo;

    const [videogamesData, setVideogamesData] = React.useState([]);

    useEffect(()=>{
        axios({
            url: 'https://playcog.uc.r.appspot.com/videogame/list' 
        })
            .then(response =>{
                setVideogamesData(response.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [setVideogamesData]);

    return(
        <>
            <section className="videogames-section">
                {videogamesData.map(item => (
                    <ItemVideogame
                        key={item.nombre} 
                        nombre={item.nombre}
                        descripcion={item.descripcion}
                        link={item.link}
                    />
                ))}
                 
            </section>

            <div className="myAccount">
                <div className="container-myAccount">
                    <a href={`/myAccount/${correo}`}><img className='logoUser' src={logoUser} alt="" /></a>
                </div>
            </div>
        </>
    );
}

export { ListVideogame }