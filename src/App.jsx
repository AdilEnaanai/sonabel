import ListeAbonnes from './components/listeAbonnes'
import BandeauAlerte from './components/BandeauAlerte'
import FormulaireSignalement from './components/FormulaireSignalement'
function App(){
  return (
    <div>
      <h1>Sonabel Smart Portal</h1>
      <ListeAbonnes />
      <FormulaireSignalement />
    </div>
  );
}

export default App;