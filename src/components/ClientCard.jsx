import React from 'react'
import '../styles/ClientCard.css'
function ClientCard({ nom, compteur, ville, consommation, reseau }) {
  return (
    <div className="carte-abonne">
      <h2>{nom}</h2>
      <p>Compteur : {compteur}</p>
      <p>Ville : {ville}</p>
      <p>Consommation : {consommation} kWh</p>
      <p>
        Réseau :{' '}
        <span style={{ color: reseau === 'Alimenté' ? '#006633' : '#cc0000' }}>
          {reseau}
        </span>
      </p>

    </div>
  )
}


export default ClientCard