import { EntityRepository, Repository } from "typeorm";
import { Character } from "../entity/Character";

@EntityRepository(Character)
export class CharacterRepository extends Repository<Character> {
	findByName(name: string) {
		return this.findOne({name});
	}
}
