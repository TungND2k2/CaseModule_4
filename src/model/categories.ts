import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id_category: number;
    @Column('enum')
    name: 'eating' | 'living'|'external income'|'salary'|'house'|'investment'|'other'
}