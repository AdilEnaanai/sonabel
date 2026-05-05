import React from 'react'
import { useState } from 'react'
import ListeClients from './ListeClients'
import FormClient from './FormClient'
import '../styles/Client.css'
function Client() {
    const [vue,setVue]=useState('liste')
    const [clients, setClients] = useState([])

    const onCancel=()=>{
        setVue('liste')
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

  return (
    <>
    {(vue==='liste')?
    <div>
    <button className='toggle-btn' onClick={() => setVue(vue==='ajout' ? 'liste' : 'ajout')}>+</button>
    <div className='liste'><ListeClients  clients={clients} onDelete={onDelete}></ListeClients></div>
    </div>   
    :
    <div className='ajout'><FormClient onCancel={onCancel} onAdd={onAdd}></FormClient></div>}
    </>
  )
}

export default Client