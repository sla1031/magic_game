import { EntityRepository, Repository } from "typeorm";
import { Race } from "../entity/Race";

@EntityRepository(Race)
export class RaceRepository extends Repository<Race> {
	findByName(name: string) {
		return this.findOne({name});
	}
}
