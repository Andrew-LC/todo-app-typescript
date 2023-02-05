import express from 'express'
import { connect } from 'mongoose';
import * as dotenv from 'dotenv'
import cors from 'cors';
import todoRouter from './routes/todoRoute'

dotenv.config()

const app = express();
const port = process.env.PORT;
const db = `${process.env.DATABASE_URL}`;

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

connect(db);

app.get('/', (req, res) => {
  res.send('<h1>Simple api for a todo app</h1>')
})


app.use('/api', todoRouter);


app.listen(port, () => {
  console.log(`App is listening at PORT: ${port}`)
})
