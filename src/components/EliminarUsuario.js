import React from 'react'
import reciclaje from '../images/reciclaje.svg'
import {useState} from 'react'


function EliminarUsuario() {
    return (
        <div>
            <button class="eliminarUsuario"><img src={reciclaje} alt="basura" width="15px"/></button>
        </div>
    )
}

export default EliminarUsuario
