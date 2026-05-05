import React from 'react'
import { useState } from 'react'
import ListeClients from './ListeClients'
import FormClient from './FormClient'
import '../styles/Client.css'
function Client() {
    const [vue,setVue]=useState('liste')
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState(null);

    const onCancel=()=>{
        setVue('liste')
        setSelectedClient(null)
    }

    const onAdd=(newClient)=>{
        console.log('Client ajouté')
        setClients((prevClients) => [...prevClients, newClient]);
        setVue('liste')
    }


    const onDelete=(id)=>{
        console.log(`Supprimer le client avec l'id: ${id}`);
        setClients((prevClients) => prevClients.filter(client => client.id !== id));
    }

    const onUpdate=(updatingClient)=>{
        setClients((prevClients) => prevClients.map(client => client.id === updatingClient.id ? updatingClient : client));
        setVue('liste')
        setSelectedClient(null)
    }

    const onEdit=(client)=>{
      setSelectedClient(client)
      setVue('edit')
    }
  return (
    <>
    {(vue==='liste')?( 
    <div>
    <button className='toggle-btn' onClick={() => setVue(vue==='ajout' ? 'liste' : 'ajout')}>+</button>
    <div className='liste'><ListeClients  clients={clients} onDelete={onDelete} onEdit={onEdit}></ListeClients></div>
    </div> )  
    :
    <div className='ajout'><FormClient client={selectedClient} onCancel={onCancel} onAdd={onAdd} onUpdate={onUpdate}></FormClient></div>}
    </>
  )
}

export default Client