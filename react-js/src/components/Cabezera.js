import React from 'react'
import {useState} from 'react'
import LogoDima from '../images/LogoDima.png'
import fotoPerfil from '../images/fotoPerfil.jpg'
import notificaciones from '../images/Notificaciones.svg'




function Cabezera() {
    const [AbrirBarraI, setAbrirBarraI] = useState(false);
    const showAbrirBarraI = () => setAbrirBarraI(!AbrirBarraI);
    
    return (
        <>
            <header id="header" class="header">
                <span title="Opciones" id="abrirBarra" onClick={showAbrirBarraI} >&#9776; </span>
                
                <nav className={AbrirBarraI ? 'barraIzquierda active' : 'barraIzquierda'}>
                    <div id="barraLateralIquierdaID" >
                        <a href="#" title="Cerrar" class="xBarra" onClick={showAbrirBarraI}>&times;</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>

                <a href="./index.html">
                    <img src={LogoDima} alt="Logo DiMA" class="dima-logo" />
                </a>
                
                
                <div class="menu-icons">
                    {/* <a href="#">
                        <img src="apps.svg" alt="Apps" />
                    </a> */}
                    <a href="#" title="Notificaciones">
                        <img id="notificaciones" src={notificaciones} alt="Notificaciones" />
                    </a>
                    <a href="#" title="Perfil">
                        <img   class="menu-channel-icon" src={fotoPerfil} alt="Your Channel" />
                    </a>
                </div>
                    
            </header>
        </>
        
    )
}

export default Cabezera
