import * as path from 'path';
import express from 'express';
import * as bodyParser from 'body-parser';

class App{
    public express: express.Application;

    /**
     *
     */
    constructor() {
        this.express = express();     
        this.middleware(); 
        this.route();  
    }

    private middleware(): void{
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private route(): void{
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello there!'
            });
        });
        this.express.use('/', router);
    }
}
export default new App().express;