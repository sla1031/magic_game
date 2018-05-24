import {
  getDefaultConnection,
  getCustomRepository,
  RaceRepository,
} from '../../model/index';


export const RaceResolvers = {
  Query: {
    async races(
       obj: any,
       args: any,
       context: any,
       info: any,
     ): Promise<any> {
       const connection = await getDefaultConnection();
       const raceRepo = getCustomRepository(RaceRepository);
       return raceRepo.find();
     }
   }
};
