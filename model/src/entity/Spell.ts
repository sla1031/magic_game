import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { Character } from "./Character";

@Entity()
export class Spell {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

	@Column("text")
	description: string;

    @Column({ type: "text", default: "https://upload.wikimedia.org/wikipedia/commons/2/22/Four_elements_symbol.png" })
    image: string;

	@Column()
	damage: number;

    @ManyToMany(type => Character, character => character.spells)
    characters: Character[];

}
