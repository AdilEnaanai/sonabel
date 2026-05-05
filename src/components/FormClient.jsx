import React from 'react'

function FormClient({onCancel,onAdd}) {
const [formData, setFormData] = React.useState({
    nom: '',
    compteur: '',
    ville: '',
    consommation: 0,
    reseau: 'Alimenté'
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

  return (
    <>
    <form onSubmit={addNewClient}>
        <label>
            Nom :
            <input type="text" name="nom" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value})} />
        </label>
        <label>
            Compteur :
            <input type="text" name="compteur" value={formData.compteur} onChange={(e) => setFormData({...formData, compteur: e.target.value})} />
        </label>
        <label>
            Ville :
            <input type="text" name="ville" value={formData.ville} onChange={(e) => setFormData({...formData, ville: e.target.value})} />
        </label>
        <label>
            Consommation :
            <input type="number" name="consommation" value={formData.consommation} onChange={(e) => setFormData({...formData, consommation: parseFloat(e.target.value) || 0})} />
        </label>
        <label>
            Réseau :
            <select name="reseau" value={formData.reseau} onChange={(e) => setFormData({...formData, reseau: e.target.value})}>
                <option value="Alimenté">Alimenté</option>
                <option value="Non alimenté">Non alimenté</option>
            </select>
        </label>
        <button type="submit">
            Ajouter
        </button>
        <button type="reset" onClick={onCancel}>
            Annuler
        </button>
    </form>
    </>
  )
}

export default FormClient