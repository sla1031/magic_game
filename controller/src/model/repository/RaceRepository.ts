import { EntityRepository, Repository } from 'typeorm';
import { Race } from '../entity/Race';

@EntityRepository(Race)
export class RaceRepository extends Repository<Race> {
  findByName(name: string): Promise<Race> {
    return this.findOne({name});
  }

  findCharacterRace(characterId: string): Promise<Race> {
    return this
      .createQueryBuilder('race')
      .innerJoin('race.characters', 'character')
      .where('character.id = :characterId', { characterId })
      .getOne();
  }
}
