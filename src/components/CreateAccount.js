import React from "react";
import fondo from '../assets/fondo.png'; 
import './styles/CreateAccount.css';

//api
import { saveUser } from "../api/UserService";
import { Modal } from "../modal/Modal";
import { MyAccount } from "./MyAccount";


//modal


function CreateAccount(){
    //Estado Modal 
    const [openModal, setOpenModal] = React.useState(false);

    //Estado del formulario
    const [form, setForm] = React.useState({});
   
    //Eventos para el formulario
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) =>{
        //Validacion de los campos 
        e.preventDefault();
        console.log('Formulario Enviado');

        //guardar usuario
        saveUser(form)

        //abrir modal
        setOpenModal(true)
    }

    return(
        <>
            <body background={fondo}>
                <div className='form-container'>
                    <h1>REGISTRATE</h1>
                        
                    <form onSubmit={handleSubmit}>
                                
                        <input type="text" required name="nombre" placeholder="Nombre" onChange={handleChange} />

                        <input type="text" required name="apellido" placeholder="Apellido" onChange={handleChange} />
                            
                        <input type="email" required name="correo" placeholder="tucorreo@gmail.com" onChange={handleChange} />

                        <input type="password" required name="contrasena" placeholder="contraseña" onChange={handleChange} />

                        <input type="number" required name="celular" placeholder="Celular" onChange={handleChange} />

                        <input type="text" required name="direccion_residencia" placeholder="Ciudad" onChange={handleChange} />

                        <input type="text" required name="fecha_nacimiento" placeholder="2000-12-01" onChange={handleChange} />

                        <button type="submit" className='secondary-button'>CREAR CUENTA</button>
                            
                    </form>
                
                </div>
                    
            </body>

            {!!openModal && (
                <Modal>
                    <div className='Modal-container'>
                        <h2>Felicidades!!</h2>
                        <p>Tu cuenta ha sido creada</p>
                        <a href={`/myAccount`}><button>Cerrar</button></a>
                    </div>
                </Modal>
            )}
        </>
    );
}

export { CreateAccount };