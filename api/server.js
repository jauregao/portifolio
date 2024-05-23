import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;

import 'dotenv/config';
import cors from 'cors';

const server = create();
const router = _router('db.json'); 
const middlewares = defaults(); 

const corsOptions = {
    origin: '*', 
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
};

server.use(cors(corsOptions));
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
