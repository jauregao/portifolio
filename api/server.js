import 'dotenv/config'
import { create, router as _router, defaults } from 'json-server'
const server = create()
const router = _router('db.json')
const middlewares = defaults()

import cors from 'cors'
const corsOptions = {
    origin: '*',
    methods: ['GET'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
};

server.use(cors(corsOptions))
server.use(middlewares)
server.use(router)
server.listen(process.env.SERVER_PORT || 3000)
