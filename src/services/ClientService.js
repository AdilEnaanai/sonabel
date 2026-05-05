import axios from "axios";
const baseURL="https://69f9e271c509a40d3aa37a84.mockapi.io/clients"

export const getClients=async()=>{
return axios.get(baseURL)
}

export const addClient=(client)=>{
    return axios.post(baseURL,client)
}

export const deleteClient=(id)=>{
    console.log(`${baseURL}/${id}`)
    return axios.delete(`${baseURL}/${id}`)
}
