import api from '../services/api'

export default async function getData() {
    const response = await api.get('/pt')
    return response.data
}
