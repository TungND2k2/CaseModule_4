import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
export enum nameTransaction {
    SPENDING = "spending",
    PROCEEDS = "proceeds",

}
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id_transaction: number;
    @Column({
        type: "enum",
        enum: nameTransaction,
    })
    name: nameTransaction;
    @Column({ nullable: true,})
    idWallet: number
    @Column({ nullable: true,})
    money: number
    @Column({ nullable: true,})
    idCategory: number
}