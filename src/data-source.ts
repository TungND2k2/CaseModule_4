import "reflect-metadata"

import { DataSource } from "typeorm"



export const AppDataSource = new DataSource({

    type: "mysql",

    host: "localhost",

    port: 3306,

    username: "root",

    password: "2002",

    database: "money_app",
    entities: ["dist/src/model/*.js"],
    synchronize: true,
})
