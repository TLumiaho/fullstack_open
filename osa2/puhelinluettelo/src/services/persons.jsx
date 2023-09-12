import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const reguest = axios.get(baseUrl)
    return reguest.then(response => {
        return response.data
    })
}

const create = nameObject => {
    const request = axios.post(baseUrl, nameObject)
    return request.then(response => response.data)
}

const deleteObject = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, create, deleteObject}