import React from 'react'
import lupa from '../images/lupa.svg'

function BarraBusqueda() {
    return (
        <div>
            <form className="search-bar">
                <input className="search-input" type="search" placeholder="Buscar" aria-label="Buscar" />
                <button type="submit" className="search-btn">
                <img src={lupa} alt="lupa" />
                </button>
            </form>
        </div>
    )
}

export default BarraBusqueda
