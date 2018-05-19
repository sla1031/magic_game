import { EntityRepository, Repository } from "typeorm";
import { Spell } from "../entity/Spell";

@EntityRepository(Spell)
export class SpellRepository extends Repository<Spell> {
	findByName(name: string) {
		return this.findOne({name});
	}
}
