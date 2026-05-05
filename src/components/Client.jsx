import React, { useEffect } from 'react'
import { useState } from 'react'
import ListeClients from './ListeClients'
import FormClient from './FormClient'
import '../styles/Client.css'
import { addClient, getClients, deleteClient, updateClient } from '../services/ClientService'
function Client() {
    const [vue,setVue]=useState('liste')
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
      getClients().then(response => setClients(response.data))
},[])

    const onCancel=()=>{
        setVue('liste')
        setSelectedClient(null)
    }

    const onAdd=(newClient)=>{
        console.log('Client ajouté')
        addClient(newClient).then(data=>{
          console.log('Client ajouté avec succès:', data.data);
          setClients((prevClients) => [...prevClients,data.data]);
        })
        
        setVue('liste')
    }


    const onDelete=(id)=>{
        deleteClient(id).then(()=>{
            setClients((prevClients) => prevClients.filter(client => client.id !== id));
        }
        ).catch(error=>{
            console.error(`Erreur lors de la suppression du client avec l'id ${id}:`, error);
        })
        
    }

    const onUpdate=(updatingClient)=>{
        updateClient(updatingClient).then((response) => {
            setClients((prevClients) => prevClients.map(client => client.id === updatingClient.id ? response.data : client));
            setVue('liste')
            setSelectedClient(null)
        });
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