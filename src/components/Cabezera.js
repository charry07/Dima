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
            <header id="header" className="header">
                <span title="Opciones" id="abrirBarra" onClick={showAbrirBarraI} >&#9776; </span>
                
                <nav className={AbrirBarraI ? 'barraIzquierda active' : 'barraIzquierda'}>
                    <div id="barraLateralIquierdaID" >
                        <p title="Cerrar" className="x" onClick={showAbrirBarraI}>&times;</p>
                        <a href="./index.html">About</a>
                        <a href="./index.html">Services</a>
                        <a href="./index.html">Clients</a>
                        <a href="./index.html">Contact</a>
                    </div>
                </nav>

                <a href="./index.html">
                    <img src={LogoDima} alt="Logo DiMA" className="dima-logo" />
                </a>
                
                <div className="menu-icons">
                    {/* <a href="./index.html">
                        <img src="apps.svg" alt="Apps" />
                    </a> */}
                    <a href="./index.html" title="Notificaciones">
                        <img id="notificaciones" src={notificaciones} alt="Notificaciones" />
                    </a>
                    <a href="./index.html" title="Perfil">
                        <img   className="menu-channel-icon" src={fotoPerfil} alt="Your Channel" />
                    </a>
                </div>
                    
            </header>
        </>
        
    )
}

export default Cabezera
