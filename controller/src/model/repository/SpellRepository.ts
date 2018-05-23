import { EntityRepository, Repository } from 'typeorm';
import { Spell } from '../entity/Spell';

@EntityRepository(Spell)
export class SpellRepository extends Repository<Spell> {
  findByName(name: string): Promise<Spell> {
    return this.findOne({name});
  }

  findCharacterSpells(characterId: string): Promise<Spell[]> {
    return this
      .createQueryBuilder('spell')
      .innerJoin('spell.characters', 'character')
      .where('character.id = :characterId', { characterId })
      .getMany();
  }
}
