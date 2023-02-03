import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import cors from 'cors'
import {AppDataSource} from "./BE/src/data-source";
import {authRouter} from "./BE/src/router/auth.router"


AppDataSource.initialize().then(() => {
    console.log('Data connection')
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'))
app.use('/',authRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});