import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import '../styles/ListeClients.css'

function ListeClients({ onDelete, onEdit, clients }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDeleteClient = (id) => {
        onDelete(id);
    }

    const handleEditClient = (client) => {
        onEdit(client);
    }
  return (
    <>
        <h2>Liste des clients</h2>
        <table className='liste-clients' border={1}>
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
                            <img className='deleteBTN' src="https://cdn1.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DeleteRed.png" alt="Supprimer" onClick={() => setIsOpen(true)} />
                            <img className='editBTN' src="https://icons.veryicon.com/png/o/miscellaneous/blue-soft-fillet-icon/edit-173.png" alt="Modifier" onClick={() => handleEditClient(client)} />
                        </td>
                    {/* Modal de confirmation de suppression} */}
                    <Modal className="modal-content" isOpen={isOpen} onRequestClose={() => setIsOpen(false)} contentLabel="Confirmation de suppression">
                            <h2>Êtes-vous sûr de vouloir supprimer ce client ?</h2>
                            <button className='oui' onClick={() => { handleDeleteClient(client.id); setIsOpen(false); }}>Oui</button>
                            <button className='non' onClick={() => setIsOpen(false)}>Non</button>
                        </Modal> 
                    </tr>
                    
                ))}
                </tbody>
        </table>

 
    </>
  )
}

export default ListeClients