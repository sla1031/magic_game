import {
  getDefaultConnection,
  getCustomRepository,
  CharacterRepository,
  RaceRepository,
  SpellRepository,
} from '../../model/index';


export const CharacterResolvers = {
  Query: {
    async characters(
       root: any,
       args: any,
       context: any,
       info: any,
     ): Promise<any> {
        const connection = await getDefaultConnection();
        const charactersRepo = getCustomRepository(CharacterRepository);
        return charactersRepo.find();
     },
   },
   Character: {
     async race(
      character: any,
      args: any,
      context: any,
      info: any,
    ): Promise<any> {
       const connection = await getDefaultConnection();
       const raceRepo = getCustomRepository(RaceRepository);
       return raceRepo.findCharacterRace(character.id);
    },
    async spells(
     character: any,
     args: any,
     context: any,
     info: any,
   ): Promise<any> {
      const connection = await getDefaultConnection();
      const spellRepo = getCustomRepository(SpellRepository);
      return spellRepo.findCharacterSpells(character.id);
   },
  },
};
