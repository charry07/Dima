import React from 'react'
import LogoDimaCuadrado from '../images/LogoDimaCuadrado.png'

function Footer() {
    return (
        <footer>
            <a href="./index.html">
            <div>
                <img class="footerIzquierda" src={LogoDimaCuadrado} alt="Logo dima" width="10%"/>
            </div>
            </a>
    
            <div>
                <pre class="footerIzquierda">
                    <b>Contacto : Charry072013@gmail.com</b> <br/>
                    <b>Contacto : Charry072013@gmail.com</b> <br/>
                    <b>Contacto : Charry072013@gmail.com</b> <br/>
                    <b>Contacto : Charry072013@gmail.com</b>
                    
                </pre>
            </div>
        </footer>
    )
}

export default Footer
