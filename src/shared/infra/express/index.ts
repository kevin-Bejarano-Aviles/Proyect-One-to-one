import express from 'express';
import config from '../../config/express'
import routes from './routes'
import { iServer } from '../iServer'
import { logger } from '../logger';

class ExpressServer implements iServer {
    constructor(private appServer=express()) {}
    start() {
        this.appServer.use(express.urlencoded({ extended: true }));
        this.appServer.use(express.json())
        this.appServer.use('/api', routes);

        const port = config.port;
  
        this.appServer.listen(port, ()=>{
            logger.info(`SERVER UP running in http://localhost:${port}`) 
        })
    }
}

export default new ExpressServer();