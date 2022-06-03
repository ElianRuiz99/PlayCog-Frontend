import React, { useEffect } from "react";
import axios from "axios";
import fondo from "../assets/fondo.png";
import "./styles/MyAccount.css";
import { DeleteUser } from "../api/DeleteUser";
import { Modal } from "../modal/Modal";
import { Modal2 } from "../modal/Modal2";
import control from "../assets/control.png";
import { UpdateUser } from "../api/UpdateUser";
import { useParams } from "react-router-dom";

function MyAccount(){

    let params = useParams();
    let correo = params.correo;


    //Estado informacion Usuario
    const [dataUser, setDataUser] = React.useState([]);

    //Estado modal
    const [openModalDelete, setOpenModalDelete] = React.useState(false);

    const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

    //Estado nueva informacion
    const [newData, setNewData] = React.useState({})

    React.useEffect(() => {
        axios({
            url: `https://playcog.uc.r.appspot.com/user/${correo}`,
        })
            .then(response =>{
                setDataUser(response.data)
                if(response.data.fecha_nacimiento == null){
                    setDataUser(response.data)
                }else{
                    let dividirFecha = response.data.fecha_nacimiento.split(' ');
                    let fecha = dividirFecha[0];
                    response.data.fecha_nacimiento = fecha;
                    setDataUser(response.data)
                }   
            })
            .catch(err =>{
                console.log(err)
            })

    }, [setDataUser]);
    
    const handleSubmitDelete = (id) => {
        console.log(id)
        DeleteUser(id);
        console.log('eliminado')
        setOpenModalDelete(true)
    }

    const newhandleChange = (e) =>{
        setNewData({
            ...newData,
            [e.target.name]: e.target.value,
        })
    }

    const updateUser = () =>{
        console.log('actualizado')
        UpdateUser(newData, dataUser.correo)
        setOpenModalUpdate(true)
    }
    
    return(
        <>
            <body background={fondo}>
                    <div className='form-container'>
                        <h1>Mi Cuenta</h1>
                                    
                            <input type="text" id="nombre" required name="nombre" placeholder={dataUser.nombre} onChange={newhandleChange} />

                            <input type="text" id="apellido" required name="apellido" placeholder={dataUser.apellido} onChange={newhandleChange} />
                                
                            <input type="email" id="correo" value={dataUser.correo} />

                            <input type="password" required id="contrasena" name="contrasena" placeholder={dataUser.contrasena} onChange={newhandleChange} />

                            <input type="number" id="celular" required name="celular" placeholder={dataUser.celular} onChange={newhandleChange} />

                            <input type="text" id="direccion_residencia" required name="direccion_residencia" placeholder={dataUser.direccion_residencia} onChange={newhandleChange} />

                            <div className="container-buttons">
                                <a><button onClick={updateUser} className='secondary-button'>ACTUALIZAR</button></a>
                                <a><button onClick={() => handleSubmitDelete(dataUser.id)} className='secondary-button'>BORRAR CUENTA</button></a>
                            </div>
                    </div>
                    <div className="ListVideogames">
                        <a href={`/videogame/${correo}`}><img src={control} /></a>
                    </div>
                    
            </body>

            {!!openModalUpdate && (
                <Modal2>
                    <div className='container-delete'>
                        <h2>Perfil Actualizado!!</h2>
                        <p>Tus datos fueron actualizados</p>
                        <a href={`/videogame/${correo}`}><button>Juegos</button></a>
                    </div>
                </Modal2>
            )}

            {!!openModalDelete && (
                <Modal>
                    <div className='container-delete'>
                        <h2>¡¡NOO!!</h2>
                        <p>Tu cuenta fue Eliminada</p>
                        <a href="/"><button>Inicio</button></a>
                    </div>
                </Modal>
            )}
        </>
    );
}

export {MyAccount};