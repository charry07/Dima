import React from 'react'
import LogoDimaCuadrado from '../images/LogoDimaCuadrado.png'

function Footer() {
    return (
        <footer>
            <a href="./index.html">
                <img className="footerIzquierda" src={LogoDimaCuadrado} alt="Logo dima" width="10%"/>
            </a>
            <pre className="footerIzquierda">
                <b>Contacto : Charry072013@gmail.com</b> <br/>
                <b>Contacto : Charry072013@gmail.com</b> <br/>
                <b>Contacto : Charry072013@gmail.com</b> <br/>
                <b>Contacto : Charry072013@gmail.com</b>
            </pre>
        </footer>
    )
}

export default Footer
