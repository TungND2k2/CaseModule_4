import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id_wallet: number;
    @Column({ nullable: true,})
    name: string
    @Column({ nullable: true,})
    moneyTotal: number
    @Column({ nullable: true,})
    idUser: number

}