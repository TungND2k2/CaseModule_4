import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import cors from 'cors'
import {AppDataSource} from "./BE/src/data-source";
import authRouter from "./BE/src/router/auth.router";
import payRouter from "./BE/src/router/transaction.router";
import {WalletRouter} from "./BE/src/router/wallet.router";


AppDataSource.initialize().then(() => {
    console.log('Data connection')
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'))
app.use('', WalletRouter);
app.use('', authRouter);
app.use('', payRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});