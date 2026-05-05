import React from 'react'
import '../styles/FormClient.css'
function FormClient({onCancel,onAdd,onUpdate,client}) {
const [formData, setFormData] = React.useState({
    nom: client ? client.nom : '',
    compteur: client ? client.compteur : '',
    ville: client ? client.ville : '',
    consommation: client ? client.consommation : 0,
    reseau: client ? client.reseau : 'Alimenté'
})

function addNewClient(e){
    e.preventDefault()
    const newClient = {
        id: 'BF' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
        nom: formData.nom,
        compteur: formData.compteur,
        ville: formData.ville,
        consommation: formData.consommation,
        reseau: formData.reseau
    };
    onAdd(newClient);
}

function updateClient(e){
    e.preventDefault()
    const updatedClient = {
        id: client.id,
        nom: formData.nom,
        compteur: formData.compteur,
        ville: formData.ville,
        consommation: formData.consommation,
        reseau: formData.reseau
    };
    onUpdate(updatedClient);
}

  return (
    <>
    <form onSubmit={client ? updateClient : addNewClient} className='form'>

            <input type="text" name="nom" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value})} placeholder='Nom' />
            <input type="text" name="compteur" value={formData.compteur} onChange={(e) => setFormData({...formData, compteur: e.target.value})} placeholder='Compteur' />
            <input type="text" name="ville" value={formData.ville} onChange={(e) => setFormData({...formData, ville: e.target.value})} placeholder='Ville' />
            <input type="number" name="consommation" value={formData.consommation} onChange={(e) => setFormData({...formData, consommation: parseFloat(e.target.value) || 0})} placeholder='Consommation' />
            <select name="reseau" value={formData.reseau} onChange={(e) => setFormData({...formData, reseau: e.target.value})}>
                <option value="Alimenté">Alimenté</option>
                <option value="Non alimenté">Non alimenté</option>
            </select>
            <div className='btn-box'>
                <button type="reset" className='reset-btn' onClick={onCancel}>Annuler</button>
                 <button type="submit" className='submit-btn'>{client ? 'Modifier' : 'Ajouter'}</button>
            </div>
    </form>
    </>
  )
}

export default FormClient