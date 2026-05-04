import { useState } from "react";
import { abonnes } from "../data/abonnes";
import ClientCard from "./ClientCard";

export default function ListeAbonnes() {
  const [recherche, setRecherche] = useState("");

  const abonnesFiltres = abonnes.filter((abonne) =>
    abonne.ville.toLowerCase().includes(recherche.toLowerCase()),
  );

  return (
    <section className="liste-abonnes">
      <h2>Abonnés SONABEL</h2>
      <input
        type="text"
        placeholder="Filtrer par ville..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        className="champ-recherche"
      />
      {abonnesFiltres.length === 0 ? (
        <p className="aucun-resultat">Aucun abonné trouvé pour cette ville.</p>
      ) : (
        <div className="grille">
          {abonnesFiltres.map((abonne) => (
            <ClientCard key={abonne.id} {...abonne} />
          ))}
        </div>
      )}
    </section>
  );
}
