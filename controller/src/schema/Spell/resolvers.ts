import {
  getDefaultConnection,
  getCustomRepository,
  SpellRepository,
} from '../../model/index';


export const SpellResolvers = {
  Query: {
    async spells(
       obj: any,
       args: any,
       context: any,
       info: any,
     ): Promise<any> {
        const connection = await getDefaultConnection();
        const spellRepo = getCustomRepository(SpellRepository);
        const spells = spellRepo.find();

        return spells;
     }
   }
};
