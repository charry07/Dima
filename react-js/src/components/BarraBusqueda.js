import React from 'react'
import lupa from '../images/lupa.svg'

function BarraBusqueda() {
    return (
        <div>
            <form class="search-bar">
                <input class="search-input" type="search" placeholder="Buscar" aria-label="Buscar" />
                <button type="submit" class="search-btn">
                <img src={lupa} />
                </button>
            </form>
        </div>
    )
}

export default BarraBusqueda
