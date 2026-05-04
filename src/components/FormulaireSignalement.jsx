import { useState } from 'react'
import '../styles/FormulaireSignalement.css'
const typesPannes = [
  "Coupure totale", "Basse tension", "Clignotement",
  "Compteur défectueux", "Autre"
]

export default function FormulaireSignalement() {
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    typePanne: typesPannes[0],
    description: ''
  })

return (
    <section className='formulaire-section'>
        <h2>Signaler une panne</h2>
        <form className='formulaire-signalement'>
            <label>
                Nom :
                <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    required
                />
            </label>
            <label>
                Adresse :
                <input
                    type="text"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                    required
                />
            </label>
            <label>
                Type de panne :
                <select
                    value={formData.typePanne}
                    onChange={(e) => setFormData({ ...formData, typePanne: e.target.value })}
                >
                    {typesPannes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Description :
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                />
            </label>
            <button type="submit">Envoyer</button>
        </form>
    </section>
)}