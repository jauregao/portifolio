import 'dotenv/config'
import axios from 'axios'

export default axios.create({
        baseURL: process.env.DEPLOY_URL_API || 'https://portifolio-cth1.onrender.com/pt',
        timeout: 10000,
        headers: {
        'Content-Type': 'application/json'
    }
})