import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import cors from 'cors'
import {AppDataSource} from "./BE/src/data-source";
import router from "./BE/src/router/wallet.router";
import authRoutes from "./BE/src/router/auth.router";
import payRouter from "./BE/src/router/transaction.router";


AppDataSource.initialize().then(() => {
    console.log('Data connection')
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'))
app.use('', router);
app.use('', authRoutes);
app.use('', payRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});