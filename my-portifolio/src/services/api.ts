import 'dotenv/config'
import axios from 'axios'

export default axios.create({
        baseURL: process.env.DEPLOY_URL_API || "http://localhost:3003/pt",
        timeout: 10000,
        headers: {
        'Content-Type': 'application/json'
    }
})