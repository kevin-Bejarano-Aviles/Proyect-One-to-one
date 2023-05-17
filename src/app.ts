import 'reflect-metadata';
import dotenv from 'dotenv' ;
import express from 'express';
import followUpRouter from './routes/followup';
import {MysqlDataSource} from './data/data-source';



dotenv.config()
const app = express();
const port = process.env.PORT || 8000;

// console.log(process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   process.env.DB_DATABASE);
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
/* app.use('/',(req:Request,res:Response)=>{
  res.send('Hola mundo')
}) */
app.use('/api/follow-up',followUpRouter);

const dbConection = async()=>{
  try {
    await MysqlDataSource.initialize();    
    app.listen(port, ()=>{
      console.log(`SERVER UP running in http://localhost:${port}`) 
    })
  } catch (error) {
    console.log(`The error is: ${error}`)
    throw new Error('Error when starting the database');
  }
}


/* app.use('/',(req:Request,res:Response)=>{
    console.log('asdasdas');
    res.send('asdad')
});
app.use('/crear',(req:Request,res:Response)=>{
    console.log('asdasdas');
    res.send('qweqweqwe');
}); */
dbConection()