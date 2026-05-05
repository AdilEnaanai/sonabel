import React from 'react'
import { useState } from 'react'
import ListeClients from './ListeClients'
import FormClient from './FormClient'
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
  return (
    <>
    {(vue==='liste')?
    <div>
    <button onClick={() => setVue(vue==='ajout' ? 'liste' : 'ajout')}>+</button>
    <div className='liste'><ListeClients clients={clients}></ListeClients></div>
    </div>   
    :
    <div className='ajout'><FormClient onCancel={onCancel} onAdd={onAdd}></FormClient></div>}
    </>
  )
}

export default Client