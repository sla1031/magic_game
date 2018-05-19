import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Character } from "./Character";

@Entity()
export class Race {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

	@Column("text")
	description: string;

    @Column("text")
    image: string;

    @OneToMany(type => Character, character => character.race)
    characters: Character[];

}
