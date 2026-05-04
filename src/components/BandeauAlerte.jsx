import React from 'react'
import '../styles/BandeauAlerte.css'
function BandeauAlerte() {
  return (
    <div className="bandeau-alerte">
        <h3 style={{color:'red'}}>ALERT</h3>
        <p>Quartier : Ouagadougou </p>
        <p>Début de coupure: 14h00</p>
        <p style={{color:'red'}}>En cours</p>
    </div>
  )
}

export default BandeauAlerte