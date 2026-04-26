import 'dotenv/config' ;
import express  , { Application } from 'express' ;
import apiRoutes from './routes/index' ;

const app: Application = express()

app.use(express.json()) ;

app.use('/api' , apiRoutes) ;

const PORT = process.env.PORT || 5000 ;


app.listen(PORT , ()=>{
  console.log(`server is running on http://localhost:${PORT} and port: ${PORT}`)
})




