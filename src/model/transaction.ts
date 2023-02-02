import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id_transaction: number;
    @Column('enum')
    name: 'spending' | 'proceeds'
    @Column({ nullable: true,})
    idWallet: number
    @Column({ nullable: true,})
    money: number
    @Column({ nullable: true,})
    idCategory: number
}