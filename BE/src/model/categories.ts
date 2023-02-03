import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
export enum nameCategory {
    EATING = "eating",
    LIVING = "living",
    EXTERNAL_INCOME = "external income",
    SALARY='salary',
    HOUSE='house',
    INVESTMENT='investment',
    OTHER='other'
}
@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id_category: number;
    @Column({
        type: "enum",
        enum: nameCategory,
    })
    name: nameCategory;
}