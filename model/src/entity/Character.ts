import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Spell } from "./Spell";
import { Race } from "./Race";

@Entity()
export class Character {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

    @Column()
    health: number;

    @Column()
    magicka: number;

    @Column("text")
    image: string;

    @ManyToOne(type => Race, race=>race.characters)
    race: Race;

    @ManyToMany(type => Spell, spell => spell.characters)
    @JoinTable()
    spells: Spell[];

}
