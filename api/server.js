import pkg from 'json-server';
import 'dotenv/config';
import cors from 'cors';

const { create, router: _router, defaults } = pkg;

const server = create();
const router = _router('db.json'); 
const middlewares = defaults(); 

const corsOptions = {
    origin: '*', 
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200,
    credentials: true,
};

server.use(cors(corsOptions));
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
