import express from 'express';
import cors from 'cors';

import userRouter from './routes/user.js';


const app = express();
const PORT = 3000;



app.use(cors());
app.use(express.json());


app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log('Mock Server On!')
})
