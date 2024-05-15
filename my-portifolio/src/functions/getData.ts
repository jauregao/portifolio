import { useEffect, useState } from 'react'
import api from '../services/api'
import { DevData } from '@/types/devTypes'

export default function getData() {
    const [allData, setAllData] = useState<DevData>()

    async function LoadData() {
        try {
            const response = await api.get('/')
            
            setAllData(response.data)
        } catch (error) {
            return 'Internal server error.'
        }
    }

    return useEffect(()=> {
        LoadData()
    }, [])
}
    