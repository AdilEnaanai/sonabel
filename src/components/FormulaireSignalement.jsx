import { useState } from 'react'
import '../styles/FormulaireSignalement.css'
import {CircleLoader} from 'react-spinners'
const typesPannes = [
  "Coupure totale", "Basse tension", "Clignotement",
  "Compteur défectueux", "Autre"
]

export default function FormulaireSignalement() {
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    typePanne: typesPannes[0],
    consommation: 0,
    description: ''
  })

  const [etat, setEtat] = useState('pause')

function valid(){
    return !formData.nom || !formData.adresse || !formData.description || formData.consommation <= 0;
}

function handleChange(e){
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }))
}
function handleSubmit(e){
    e.preventDefault();
    setEtat('En cours')
    setFormData({
        nom: '',
        adresse: '',
        typePanne: typesPannes[0],
        description: ''
    })
    setTimeout(() => {
        setEtat('Envoyé')
        setTimeout(() => setEtat('pause'), 5000)
    }, 5000)
    
}

function consommationFormat(){
    let format={}
    format['texte']=!formData.consommation ? '' : formData.consommation < 100 ? 'Consommation faible' : formData.consommation < 300 ? 'Consommation moyenne' : 'Consommation élevée'
    format['couleur']=formData.consommation < 100 ? '#006633' : formData.consommation < 300 ? '#e68a00' : '#cc0000'
    return format
}

return (
    <section className='formulaire-section'>
        <h2>Signaler une panne</h2>
        <CircleLoader loading={etat === 'En cours'} color="#e70000" size={30} />
        <form className='formulaire-signalement' onSubmit={handleSubmit}>
            <label>
                Nom :
                <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                
                />
            </label>
            <label>
                Adresse :
                <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}

                />
            </label>
            <label>
                Type de panne :
                <select
                    value={formData.typePanne}
                    name='typePanne'
                    onChange={handleChange}
                >
                    {typesPannes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Consommation
                <input
                    type="number"
                    name="consommation"
                    value={formData.consommation || ''}
                    onChange={handleChange}
                />
                <p style={{ color: consommationFormat().couleur }}>{consommationFormat().texte}</p>
            </label>
            <label>
                Description :
                <textarea
                    value={formData.description}
                    name="description"
                    onChange={handleChange}
                />
            </label>
            <button type="submit" disabled={valid()} >
                Envoyer
            </button>
        </form>
        {
            etat === 'Envoyé' && (
                <div className="confirmation">
                <h3>Signalement envoyé ✓</h3>
                <p>Merci <strong>{formData.nom}</strong>, votre panne a été enregistrée.</p>
                </div>
            )
        }
    </section>
)}