import React from 'react'
import '../styles/ListeClients.css'
function ListeClients({ clients }) {
  return (
    <>
        <h2>Liste des clients</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Compteur</th>
                    <th>Ville</th>
                    <th>Consommation</th>
                    <th>Réseau</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {clients.map(client => (
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.nom}</td>
                        <td>{client.compteur}</td>
                        <td>{client.ville}</td>
                        <td>{client.consommation} kWh</td>
                        <td style={{ color: client.reseau === 'Alimenté' ? '#006633' : '#cc0000' }}>{client.reseau}</td>
                        <td>
                            <img className='deleteBTN' src="https://cdn1.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DeleteRed.png" alt="Supprimer" onClick={() => handleDeleteClient(client.id)} />
                        </td>
                    </tr>
                ))}
                </tbody>
        </table>
        
    </>
  )
}

export default ListeClients