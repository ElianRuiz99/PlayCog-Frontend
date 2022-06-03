import React, { useEffect } from "react";
import axios from "axios";
import fondo from "../assets/fondo.png";
import "./styles/MyAccount.css";
import { DeleteUser } from "../api/DeleteUser";
import { Modal } from "../modal/Modal";
import { Modal2 } from "../modal/Modal2";
import control from "../assets/control.png";
import { UpdateUser } from "../api/UpdateUser";
import { getUser } from "../api/UserService";

function MyAccount(props){
    //Estado correo
    const [correo, setCorreo] = React.useState('');

    //Estado informacion Usuario
    const [dataUser, setDataUser] = React.useState({});

    //Estado modal
    const [openModalDelete, setOpenModalDelete] = React.useState(false);

    const [openModalUpdate, setOpenModalUpdate] = React.useState(false);

    //Estado nueva informacion
    const [newData, setNewData] = React.useState({})
    
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

    const saveCorreo = (event) =>{
        setCorreo(event.target.value)
    }

    const searchUser = () => {
        axios({
            url: `https://playcog.uc.r.appspot.com//user/${correo}`,
        })
            .then(response =>{
                if(response.data.fecha_nacimiento == null){
                    console.log(response.data)
                    setDataUser(response.data)
                }else{
                    let dividirFecha = response.data.fecha_nacimiento.split(' ');
                    let fecha = dividirFecha[0];
                    response.data.fecha_nacimiento = fecha;
                    console.log(response.data)
                    setDataUser(response.data) 
                }   
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    return(
        <>
            <body background={fondo}>
                <div className='form-container'>
                    <label>Digite su Correo para traer sus datos:</label>
                    <input type="text" name="correo" placeholder="Correo" required onChange={saveCorreo}/>
                    <button onClick={searchUser} className='secondary-button'>TRAER DATOS</button>
                </div>

                <div className='form-container'>
                    <h1>Mi Cuenta</h1>
                        <form onSubmit={updateUser}>
                            <input type="text"  required name="nombre" placeholder={`Nombre:${dataUser.nombre}`} onChange={newhandleChange} />
                            <input type="text"  required name="apellido" placeholder={`Apellido:${dataUser.apellido}`} onChange={newhandleChange} />
                            <input type="password" required  name="contrasena" placeholder={`Contraseña:${dataUser.contrasena}`} onChange={newhandleChange} />
                            <input type="number"  required name="celular" placeholder={`Celular:${dataUser.celular}`} onChange={newhandleChange} />
                            <input type="text" required name="direccion_residencia" placeholder={`Ciudad:${dataUser.direccion_residencia}`} onChange={newhandleChange} />

                            <div className="container-buttons">
                                <a><button type="submit" className='secondary-button'>ACTUALIZAR</button></a>
                                <a><button onClick={() => handleSubmitDelete(dataUser.id)} className='secondary-button'>BORRAR CUENTA</button></a>
                            </div>
                        </form>
                </div>

                    <div className="ListVideogames">
                        <a href={`/videogame`}><img src={control} /></a>
                    </div>
                    
            </body>

            {!!openModalUpdate && (
                <Modal2>
                    <div className='container-delete'>
                        <h2>Perfil Actualizado!!</h2>
                        <p>Tus datos fueron actualizados</p>
                        <a href={`/videogame`}><button>Juegos</button></a>
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